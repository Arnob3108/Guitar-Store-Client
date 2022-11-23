import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navber from "../Shared/Navber/Navber";

const Main = () => {
  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
