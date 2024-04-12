import React, { useContext } from "react";
import logo from "/m.png";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";
import Profile from "./Profile";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  // console.log(user);
  const navItems = (
    <>
      <li className="font-bold text-xl">
        <a href="/">Home</a>
      </li>
      <li className="font-bold text-xl">
        <a href="/about">About</a>
      </li>
      <li className="font-bold text-xl">
        <a href="/news">News</a>
      </li>
      <li className="font-bold text-xl">
        <a
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Community
        </a>
      </li>
    </>
  );
  return (
    <div className="">
      {user ? (
        <div>
          <header className="max-w-screen-2xl  container mx-auto text-white border-b border-grey-500">
            <div className="navbar xl:px-24">
              <div className="navbar-start">
                <a href="/">
                  <img className="w-16" src={logo} alt="" />
                </a>
              </div>
              <div className="  ">
                <h4 className="font-bold text-lg">SMA</h4>
                <ul className="menu menu-horizontal px-1"></ul>
              </div>

              <div className="navbar-end">
                {user ? (
                  <Profile user={user} />
                ) : (
                  <a
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                    className="btn bg-blue border-none rounded-full px-6 text-white flex items-center"
                  >
                    Get Started
                  </a>
                )}

                <Modal />
              </div>
            </div>
          </header>
        </div>
      ) : (
        <header className="max-w-screen-2xl  container mx-auto text-white border-b border-grey-500">
          <div className="navbar xl:px-24">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
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
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {navItems}
                </ul>
              </div>
              <a href="/">
                <img className="w-16" src={logo} alt="" />
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>

            <div className="navbar-end">
              {user ? (
                <Profile user={user} />
              ) : (
                <a
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="btn bg-blue border-none rounded-full px-6 text-white flex items-center"
                >
                  Get Started
                </a>
              )}

              <Modal />
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default Navbar;
