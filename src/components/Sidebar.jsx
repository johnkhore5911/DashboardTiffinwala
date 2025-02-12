import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); // Get current URL path

  const menuItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: "🏠" },
    { path: "/admin/meal-notification", label: "Daily Menu", icon: "🍽️" },
    { path: "/admin/plan-management", label: "Plan & Credit Management", icon: "⭐" },
    { path: "/admin/qr-management", label: "QR Code Scanning", icon: "📷" },
    { path: "/admin/delivery-assignment", label: "Delivery Assignment", icon: "🚚" },
    { path: "/admin/mealOpt-Notification", label: "Meal Opt-Out Notification", icon: "🚫" },
    { path: "/admin/missing-tiffin-reports", label: "Missing Tiffin Reports", icon: "📋" },
    { path: "/admin/customer-management", label: "View Available Customers", icon: "👥" },
  ];

  return (
    <div className="w-64 h-screen bg-[#171037] text-white p-2 pt-18 rounded-tr-lg rounded-br-lg">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                location.pathname === item.path ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
