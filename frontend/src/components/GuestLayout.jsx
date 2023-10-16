import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider.jsx";

function GuestLayout() {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <p>Guest layout</p>
      <Outlet />
    </div>
  );
}

export default GuestLayout;
