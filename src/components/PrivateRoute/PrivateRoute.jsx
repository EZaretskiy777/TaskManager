import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({ isAuth, navigateTo }) {
  return isAuth ? <Outlet /> : <Navigate to={navigateTo} />;
}

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  navigateTo: PropTypes.string,
};

export default PrivateRoute;
