import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  let accessToken = localStorage.getItem("accessToken");
  return accessToken;
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
