import React from 'react';
import { FaHome, FaUtensils, FaStar, FaQrcode, FaTruck, FaBell, FaFileAlt, FaUsers } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  


  const menuItems = [
    { section: 'dashboard', icon: <FaHome />, label: 'Dashboard', path: '/admin/dashboard' },
    { section: 'dailyMeal', icon: <FaUtensils />, label: 'Daily Menu', path: '/admin/daily-meal' },
    { section: 'PlanCreditManagement', icon: <FaStar />, label: 'Plan & Credit Management', path: '/admin/PlanCreditManagement' },
    { section: 'QRCodeScanning', icon: <FaQrcode />, label: 'QR Code Scanning', path: '/admin/QRCodeScanning' },
    { section: 'delivery', icon: <FaTruck />, label: 'Delivery Assignment', path: '/admin/delivery-assignment' },
    { section: 'MealOptOutNotification', icon: <FaBell />, label: 'Meal Opt-Out Notification', path: '/admin/MealOptOutNotification' },
    { section: 'missingReports', icon: <FaFileAlt />, label: 'Missing Tiffin Reports', path: '/admin/missing-reports' },
    { section: 'viewCustomers', icon: <FaUsers />, label: 'View Available Customer', path: '/admin/ViewAvailableCustomers' },
  ];

  return (
    <div className="w-[250px] h-[200vh] bg-[#1a1232] p-5  shadow-lg rounded-[15px] overflow-y-auto">
      <div className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <div
            key={item.section}
            className={`flex items-center gap-3 p-3 text-white text-sm rounded-lg transition-colors duration-300 cursor-pointer ${
              location.pathname === item.path ? 'bg-blue-600' : 'hover:bg-blue-500'
            }`}
            onClick={() => navigate(item.path)}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
