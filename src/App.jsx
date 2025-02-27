import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminDashboard from "./pages/Admin/Dashboard.jsx";
import PlanManagement from "./pages/Admin/PlanManagement.jsx";
import QRManagement from "./pages/Admin/QRManagement.jsx";
import MealNotification from './pages/Admin/MealNotifications.jsx';
import MealOptNotification from './pages/Admin/MealOptNotification.jsx';
import MissingTiffinReports from './pages/Admin/Reports.jsx';
import CustomerManagement from './pages/Admin/CustomerManagement.jsx';
import DeliveryAssignment from './pages/Admin/DeliveryAssignment.jsx';
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import "./App.css";
import { useState } from "react";

function Layout() {
  const location = useLocation();
  const hideSidebarNavbar = ["/", "/signup"].includes(location.pathname);

  return (
    <div className="flex h-screen">
      {!hideSidebarNavbar && <Sidebar />}
      <div className="flex-1 p-4">
        {!hideSidebarNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path='/admin/meal-notification' element={<MealNotification />} />
          <Route path="/admin/plan-management" element={<PlanManagement />} />
          <Route path="/admin/qr-management" element={<QRManagement />} />
          <Route path="/admin/mealOpt-Notification" element={<MealOptNotification />} />
          <Route path="/admin/missing-tiffin-reports" element={<MissingTiffinReports />} />
          <Route path="/admin/customer-management" element={<CustomerManagement />} />
          <Route path="/admin/delivery-assignment" element={<DeliveryAssignment />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
      <Toaster />
    </Router>
  );
}

export default App;
