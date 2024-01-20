import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace state={{ data: location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;