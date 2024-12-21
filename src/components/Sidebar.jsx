import React from "react";
import "./Sidebar.css";
import { FaUserPlus, FaUsers, FaChartBar, FaStar, FaSignOutAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link , } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-box"></span>
        <h2>LOGO</h2>
      </div>

      <div className="search-bar">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="menu">
        <div className="menu-section">
          <h3>Recruitment</h3>
          <div className="menu-item">
            <FaUserPlus className="menu-icon" />
            <Link style={{textDecoration:'none'}} to="/dashboard" > <b>Candidates </b></Link>  
          </div>
        </div>

        <div className="menu-section">
          <h3>Organization</h3>
          <div className="menu-item">
            <FaUsers className="menu-icon" />
            <Link style={{textDecoration:'none'}} to="/employees" > <b>Employess </b></Link>  
      
          </div>
          <div className="menu-item">
            <FaChartBar className="menu-icon" />
            <Link style={{textDecoration:'none'}} to="/Attendance" > <b>Attendance</b></Link>  
          </div>
          <div className="menu-item">
            <FaStar className="menu-icon" />
            <Link style={{textDecoration:'none'}} to="/leave" > <b>Leave</b></Link>
          </div>
        </div>

        <div className="menu-section">
          <h3>Others</h3>
          <div className="menu-item">
            <FaSignOutAlt className="menu-icon" />
            <span>Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
