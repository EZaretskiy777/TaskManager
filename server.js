import jsonServer from "json-server";
import cors from "cors";
import { v4 as uuid } from "uuid";

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
app.use(cors());
app.use(jsonServer.bodyParser);
app.use(middlewares);

const db = router.db;

// Регистрация
app.post("/register", (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const existingUser = db.get("users").find({ email }).value();
  if (existingUser) {
    return res.status(409).json({ error: "User already exists" });
  }

  const newUser = {
    _id: uuid(),
    email,
    password,
    name,
    token: uuid().replace(/-/g, ""),
  };

  db.get("users").push(newUser).write();

  res.status(201).json({
    token: newUser.token,
    user: {
      _id: newUser._id,
      email: newUser.email,
      name: newUser.name,
    },
  });
});

// Логин
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = db.get("users").find({ email, password }).value();

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.json({
    token: user.token,
    user: {
      _id: user._id,
      email: user.email,
      name: user.name,
    },
  });
});

// Авторизация
app.use((req, res, next) => {
  const openRoutes = [
    { path: "/login", method: "POST" },
    { path: "/register", method: "POST" },
  ];

  const isOpen = openRoutes.some(
    (route) => req.path === route.path && req.method === route.method
  );

  if (isOpen) {
    return next();
  }

  const token = req.headers.authorization?.replace("Bearer ", "");
  const user = router.db.get("users").find({ token }).value();

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  req.user = user;
  next();
});

// Получение всех задач
app.get("/tasks", (req, res) => {
  const tasks = db.get("tasks").value();
  res.json(tasks);
});

// Получение задач пользователя
app.get("/tasks/filter/:userId", (req, res) => {
  const userId = req.params.userId;
  const tasks = db.get("tasks").filter({ ownerId: userId }).value();
  res.json(tasks);
});

// Получение задачи
app.get("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const task = db.get("tasks").find({ _id: id }).value();

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json(task);
});

// Создание задачи
app.post("/tasks", (req, res) => {
  const { title, topic, date, status } = req.body;

  if (!title || !topic || !date) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newTask = {
    _id: uuid(),
    title,
    topic,
    date,
    status,
    ownerId: req.user._id,
  };

  db.get("tasks").push(newTask).write();
  res.status(200).json(db.get("tasks").value());
});

// Обновление задачи
app.put("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  const task = db.get("tasks").find({ _id: id }).value();

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  db.get("tasks").find({ _id: id }).assign(updates).write();
  res.status(200).json(db.get("tasks").value());
});

// Удаление задачи
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const task = db.get("tasks").find({ _id: id }).value();

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  db.get("tasks").remove({ _id: id }).write();
  res.status(200).json(db.get("tasks").value());
});

app.use(router);
app.listen(3001, () => {
  console.log("✅ Server running at http://localhost:3001");
});
