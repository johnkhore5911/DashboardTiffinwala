import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const barData = {
    labels: ["1 Week", "2 /", "3 Week", "4 Week", "5 Week"],
    datasets: [
      { label: "Dine in", data: [20, 40, 60, 80, 50], backgroundColor: "#f87699" },
      { label: "Tiffin", data: [30, 50, 70, 90, 60], backgroundColor: "#2b99f0" },
    ],
  };

  const barOptions = {
    plugins: { legend: { display: true, position: "top" } },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="flex flex-wrap gap-6">
        {/* Total Meal Users Section */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-2/3 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Total Meal Users</h2>
            <select className="border border-gray-300 rounded-md p-2">
              <option>July</option>
              <option>August</option>
            </select>
          </div>
          <Bar data={barData} options={barOptions} />
        </div>

        {/* Delivery Partner Data */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Delivery Partner Data</h2>
            <select className="border border-gray-100 rounded-md p-2">
              <option>August</option>
              <option>July</option>
            </select>
          </div>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-medium">Admin Name</p>
                    <p className="text-sm text-gray-500">ABC Road, Pune</p>
                  </div>
                </div>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${i % 2 === 0 ? "bg-blue-100 text-blue-600" : "bg-gray-300 text-gray-700"}`}>
                  {i % 2 === 0 ? "Available" : "Unavailable"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plan Purchased Users */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Plan Purchased Users</h2>
          <select className="border border-gray-300 rounded-md p-2">
            <option>August</option>
            <option>July</option>
          </select>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Sr No</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Contact No</th>
              <th className="p-3 text-left">Purchased Plan</th>
              <th className="p-3 text-left">Date and Time</th>
              <th className="p-3 text-left">Plan Expiry</th>
              <th className="p-3 text-left">Plan Alert</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(2)].map((_, i) => (
              <tr key={i} className="border-b">
                <td className="p-3">{i + 1}</td>
                <td className="p-3">User Name</td>
                <td className="p-3">8966543246</td>
                <td className="p-3">{i % 2 === 0 ? "Platinum Plan" : "Gold Plan"}</td>
                <td className="p-3">18/12/2024 12:00 PM</td>
                <td className="p-3">{i % 2 === 0 ? "Next 10 days" : "10/01/2025"}</td>
                <td className="p-3">
                  <button className={`px-3 py-1 rounded-full text-sm ${i % 2 === 0 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"}`} disabled={i % 2 !== 0}>
                    Notify
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
