import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
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
          <label
            htmlFor="dashboard-drawer"
            tabIndex={2}
            className="btn btn-ghost glass lg:hidden absolute right-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
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
              <Link to="/dashboard">All Users</Link>
              <Link to="/dashboard/addProduct">Add Products</Link>
              <Link to={"/dashboard/bookedProducts"}>My Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
