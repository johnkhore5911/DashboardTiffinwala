import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import DailyMeal from "./pages/Admin/DailyMeal.jsx"
import PlanCreditManagement from "./pages/Admin/PlanCreditManagement.jsx";
import AdminDashboard from "./pages/Admin/Dashboard.jsx";
import QRCodeScanning from "./pages/Admin/QRCodeScanning.jsx";
import MealOptOutNotification from "./pages/Admin/MealOptOutNotification.jsx";
import DeliveryAssignment from "./pages/Admin/DeliveryAssignment.jsx";
import ViewAvailableCustomers from "./pages/Admin/ViewAvailableCustomers.jsx";
// import Login from "./pages/Auth/Login";
import Login from './pages/Auth/Login.jsx';
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Register from './pages/Auth/Register.jsx';
import "./App.css";

function App() {
  return (
    <Router>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/PlanCreditManagement" element={<PlanCreditManagement />} />
          <Route path="/admin/daily-meal" element={<DailyMeal />} />
          <Route path="/admin/QRCodeScanning" element={<QRCodeScanning />} />
          <Route path="/admin/delivery-assignment" element={<DeliveryAssignment />} />
          <Route path="/admin/MealOptOutNotification" element={<MealOptOutNotification />} />
          <Route path="/admin/ViewAvailableCustomers" element={<ViewAvailableCustomers />} />
        </Routes>
      </div>
    </div>
    <Toaster />
  </Router>
);
}

export default App;
