import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
  const token = localStorage.getItem("access_token");

  if (token == null || token === "") {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export function UnPrivateRoute() {
  const token = localStorage.getItem("access_token");

  if (token == null || token === "") {
    return <Outlet />;
  }

  return <Navigate to="/" />;
}
