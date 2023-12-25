import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { FaBlog } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="navbar">
        <div  className="menu-bars z-20">
          <FaBars
            onClick={showSidebar}
            className={`${sidebar ? 'hidden' : 'block text-white'}`}
          />
        </div>
      </div>
      <nav
        className={
          sidebar
            ? 'nav-menu active z-50 bg-[#060b26] mr-44'
            : 'nav-menu bg-[#060b26]'
        }
      >
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <div>
              <FaTimes
                size={50}
                className="menu-bars text-white top-0 -mt-24 ml-10 font-bold"
              />
            </div>
          </li>
          <Link to="/">
            <li className="nav-text text-white font-semibold text-xl hover:bg-[#1a83ff] cursor-pointer">
              <MdOutlineDashboardCustomize size={30} />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/blog">
            <li className="nav-text text-white font-semibold text-xl hover:bg-[#1a83ff] cursor-pointer">
              <FaBlog size={30} />
              <span>Blog</span>
            </li>
          </Link>
          <Link to="/logout">
            <li className="nav-text text-white font-semibold text-xl hover:bg-[#1a83ff] cursor-pointer">
              <HiOutlineLogout size={30} />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
