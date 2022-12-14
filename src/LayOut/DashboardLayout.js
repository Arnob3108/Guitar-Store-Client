import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import bg from "../Assets/navBg.jpg";
import { MdDashboard } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Context/AuthContext/AuthProvider";
import useSeller from "../hooks/useSeller";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

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
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allSeller">All Seller</Link>
                </li>
                <li>
                  <Link to="/dashboard/allBuyer">All Buyer</Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addProduct">Add Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/myProducts">My Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
