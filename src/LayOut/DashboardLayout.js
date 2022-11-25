import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import bg from "../Assets/navBg.jpg";

const DashboardLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
          }}
          className="drawer-side"
        >
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard">My Appointments</Link>
              <Link to="/dashboard/addProduct">Add Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
