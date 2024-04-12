import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUser, FaUserAstronaut } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import logo from "/m.png";
import Modal from "../components/Modal";

const Admindashboard = () => {
  const isAdmin = true;
  return (
    <div>
      {
        isAdmin ? (<div data-theme = "light">
        <div className="drawer sm:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <div className="flex items-center justify-between">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <LuLayoutDashboard />
            </label>
            {/* <button className="btn rounded-full px-6 bg-blue flex items-center gap-2 text-white sm:hidden"><FaRegUser/>Logout</button> */}
            </div>
            <div className="mt-5 md:mt-2"><Outlet/></div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li>
                <Link to="/dashboard" className="flex justify-start mb-3">
                  <img className="w-16" src={logo} alt="" />
                  <span className="badge badge-primary">Admin</span>
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/dashboard" className="mt-3">
                  <MdOutlineDashboard />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard/users">
                  <FaUserAstronaut />
                  User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>) : (<Modal/>)
      }
    </div>
  );
};

export default Admindashboard;
