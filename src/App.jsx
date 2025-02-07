import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminDashboard from "./pages/Admin/Dashboard.jsx";
import PlanManagement from "./pages/Admin/PlanManagement.jsx";
import QRManagement from "./pages/Admin/QRManagement.jsx";
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
            <Route path="/admin/plan-management" element={<PlanManagement />} />
            <Route path="/admin/qr-management" element={<QRManagement />} />
          </Routes>
        </div>
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
