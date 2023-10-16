import React from "react";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div>
      <p>Default layout</p>
      <Outlet />
    </div>
  );
}

export default DefaultLayout;