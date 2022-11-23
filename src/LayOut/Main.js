import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";

const Main = () => {
  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
    </>
  );
};

export default Main;
