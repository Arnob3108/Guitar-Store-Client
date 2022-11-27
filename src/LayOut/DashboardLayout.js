import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import bg from "../Assets/navBg.jpg";
import { MdDashboard } from "react-icons/md";

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
          <label
            htmlFor="dashboard-drawer"
            tabIndex={2}
            className="btn btn-ghost glass lg:hidden absolute right-0"
          >
            <MdDashboard className="text-2xl"></MdDashboard>
          </label>
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
              <Link to={"/dashboard"}>My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/allUsers">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/addProduct">Add Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
