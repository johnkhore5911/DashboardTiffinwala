import React, { useState } from "react";
import downArrow from '../assets/down.png';
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="w-full">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-2 bg-white">
        <div>
          <h2 className="text-xl font-semibold">Hi Admin Name,</h2>
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
            <span className="text-lg cursor-pointer">🔔</span>
            <div className="relative">
              <span
                className="text-lg font-medium cursor-pointer flex items-center space-x-1"
                onClick={handleDropdownToggle}
              >
                <span>👤 Admin Name</span>
                <img
                  src={downArrow}
                  alt="down arrow"
                  className="ml-2" // Adjust the size and rotation
                />
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
