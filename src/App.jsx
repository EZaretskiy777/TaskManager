import "./App.css";
import { GlobalStyles } from "./globalStyles";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./providers/AuthProvider";
import { TaskProvider } from "./providers/TaskProvider";
import { ThemesProvider } from "./providers/ThemesProvider";

function App() {
  return (
    <ThemesProvider>
      <AuthProvider>
        <TaskProvider>
          <GlobalStyles />
          <AppRoutes />
        </TaskProvider>
      </AuthProvider>
    </ThemesProvider>
  );
}

export default App;
