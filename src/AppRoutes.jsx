import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AuthForm from "./pages/AuthForm/AuthForm";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useAuth } from "./providers/AuthProvider";
import Card from "./pages/Card/Card";
import Exit from "./pages/Exit/Exit";
import NewCard from "./pages/NewCard/NewCard";

const AppRoutes = () => {
  const { isAuth } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} navigateTo="/login" />}>
          <Route path="/" element={<MainPage />}>
            <Route path="exit" element={<Exit />} />
            <Route path="newcard" element={<NewCard />} />
            <Route path="card/:id" element={<Card />} />
          </Route>
        </Route>
        <Route element={<PrivateRoute isAuth={!isAuth} navigateTo="/" />}>
          <Route path="/login" element={<AuthForm />} />
          <Route path="/register" element={<AuthForm isSignUp={true} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
