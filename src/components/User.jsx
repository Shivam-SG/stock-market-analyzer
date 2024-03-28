import React, { useState } from "react";
import StockU from "./StockU";
import About from "../pages/About";
import { MdOutlineDashboard } from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";
import { MdOutlineInfo } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { RiCommunityLine } from "react-icons/ri";
import { LuCandlestickChart } from "react-icons/lu";
import { MdOutlineContactSupport } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";

import Charts from "./Charts";
import News from "../pages/News";
import Community from "./Community";
import Strategies from "./Strategies";

const User = () => {
  const [activePage, setActivePage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sidebarHandle = (page) => {
    setActivePage(page);
    setMenuOpen(false); // Close the menu when a page is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div data-theme = "light">
      <div className="flex flex-col md:flex-row">
      <div className={`md:w-1/6 md:flex ${menuOpen ? '' : 'hidden'}`}>
        <ul className="h-screen menu w-65">
          <li>
            <a onClick={() => sidebarHandle("Home")}>
              <MdOutlineDashboard />
              Dashboard
            </a>
          </li>
          <li>
            <a onClick={() => sidebarHandle("Charts")}>
              <IoStatsChartOutline />
              Charts
            </a>
          </li>
          <li>
            <details> {/* Changed close to open */}
              <summary>
                <RiCommunityLine />
                Community
              </summary>
              <ul>
                <li>
                  <a onClick={() => sidebarHandle("Strategies")}>
                    <LuCandlestickChart />
                    Strategies
                  </a>
                </li>
                <li>
                  <a onClick={() => sidebarHandle("Community")}>
                    <MdOutlineContactSupport />
                    Support
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a onClick={() => sidebarHandle("News")}>
              <BsNewspaper />
              News
            </a>
          </li>
          <li>
            <a onClick={() => sidebarHandle("About")}>
              <MdOutlineInfo />
              About
            </a>
          </li>
        </ul>
      </div>
      <div className="md:w-[140.333333%]">
        <button className="md:hidden ml-4 text-2xl" onClick={toggleMenu}><TfiMenu /></button>
        {activePage === "Home" && <StockU />}
        {activePage === "Charts" && <Charts />}
        {activePage === "Community" && <Community />}
        {activePage === "Strategies" && <Strategies />}
        {activePage === "News" && <News />}
        {activePage === "About" && <About />}
      </div>
    </div>
    </div>
  );
};

export default User;
