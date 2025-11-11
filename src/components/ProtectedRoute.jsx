import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/Login"
        replace
        state={{
          from: location.pathname,
          message: "Você precisa entrar para acessar esta página.",
        }}
      />
    );
  }

  return children;
}

export default ProtectedRoute;