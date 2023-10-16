import React from "react";
import { Outlet } from "react-router-dom";

function GuestLayout() {
  return (
    <div>
      <p>Guest layout</p>
      <Outlet/>
    </div>
  );
}

export default GuestLayout;
