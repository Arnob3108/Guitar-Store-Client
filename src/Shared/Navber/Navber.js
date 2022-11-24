import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/logo2.png";
import bg from "../../Assets/navBg.jpg";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";

const Navber = () => {
  const { user } = useContext(AuthContext);
  const menuList = (
    <>
      <li>
        <NavLink className="rounded-lg" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="appointment">Appointment</NavLink>
      </li>
      <li>
        <NavLink className="rounded-lg" to="blog">
          Blog
        </NavLink>
      </li>

      {user?.uid ? (
        <>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <button>Log Out</button>
          </li>
        </>
      ) : (
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="navbar flex justify-between"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuList}
          </ul>
        </div>
        <Link to="/">
          <img className="lg:w-32 w-28 lg:ml-10" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal mr-10 text-black font-bold">
          {menuList}
        </ul>
      </div>
    </div>
  );
};

export default Navber;
