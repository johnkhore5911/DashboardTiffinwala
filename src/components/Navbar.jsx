import React, { useState,useEffect } from "react";
import downArrow from '../assets/down.png';
import { useNavigate } from "react-router-dom";
import { FaBell, FaCalendarAlt, FaUsers, FaRegMoneyBillAlt } from 'react-icons/fa';
import admin from '../assets/adminPic.png'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Get current date
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', { weekday: 'short' })}, ${currentDate.toLocaleString('default', { month: 'short' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/");
  };
  
  const [adminName, setAdminName] = useState("Admin Name");

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) setAdminName(name);
  }, []);


  return (
    <div className="w-full">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-2 bg-white">
        <div>
          <h2 className="text-xl font-semibold">Hi {adminName},</h2>
          <p className="text-gray-500">Welcome back!</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-gray-600 text-sm">📅 {formattedDate}</div>
          <input
            type="text"
            className="px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Type to search"
          />
          <div className="flex items-center space-x-3">
            {/* <span className="text-lg cursor-pointer">🔔</span> */}
            <FaBell className="text-2xl text-gray-600 cursor-pointer hover:text-blue-500" />

            <div className="relative">
              <span
                className="text-lg font-medium cursor-pointer flex items-center space-x-1"
                onClick={handleDropdownToggle}
              >
                {/* <span>👤 Admin Name</span> */}
                {/* <img
                  src={downArrow}
                  alt="down arrow"
                  className="ml-2" // Adjust the size and rotation
                /> */}

              <div className="relative">
                {/* <FaBell className="text-2xl text-gray-600 cursor-pointer hover:text-blue-500" /> */}
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={admin}
                  alt="Admin"
                  className="w-10 h-10 rounded-full border-2 border-blue-500 ml-4"
                />
                <span className="text-md font-medium text-gray-700">{adminName}</span>

                <img
                  src={downArrow}
                  alt="down arrow"
                  className="ml-2" // Adjust the size and rotation
                />
              </div>
              </span>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-red-400 text-white rounded-md shadow-lg transition-all duration-300 ease-in-out">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none transition-all duration-300"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
