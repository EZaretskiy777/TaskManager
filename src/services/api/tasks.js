import axios from "axios";

const API_URL_TASKS = "http://localhost:3001/tasks";

export async function getTasks({ token, userId = "" }) {
  try {
    const response = await axios.get(
      `${API_URL_TASKS}${userId ? `/filter/${userId}` : ""}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Ошибка получения задач:", error);
    throw new Error(error.message);
  }
}

export async function getTask({ token, taskId }) {
  try {
    const response = await axios.get(`${API_URL_TASKS}/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка получения задачи:", error);
    throw new Error(error.message);
  }
}

export async function addTask({ token, task }) {
  try {
    const response = await axios.post(API_URL_TASKS, task, {
      headers: {
        Authorization: `Bearer ${token.replaceAll('"', "")}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка добавления задачи:", error);
    throw new Error(error.message);
  }
}

export async function changeTask({ token, task, taskId }) {
  try {
    const response = await axios.put(`${API_URL_TASKS}/${taskId}`, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка обновления задачи:", error);
    throw new Error(error.message);
  }
}

export async function deleteTask({ token, taskId }) {
  try {
    const response = await axios.delete(`${API_URL_TASKS}/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token.replaceAll('"', "")}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка удаления задачи:", error);
    throw new Error(error.message);
  }
}
