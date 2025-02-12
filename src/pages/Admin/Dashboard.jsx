import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import totalUser from '../../assets/totaluser.png'
import planUser from '../../assets/planuser.png'
import silveruser from '../../assets/silveruser.png'
import platinum from '../../assets/platinum.png'

import DeleteIcon from '@mui/icons-material/Delete';

const Card = ({ children, className }) => (
  <div className={`shadow-lg rounded-lg p-6 ${className} transition-transform duration-300 transform hover:translate-y-[-10px] cursor-pointer`}>
    {children}
  </div>
);

const CardNormal = ({ children, className }) => (
  <div className={`shadow-lg rounded-lg p-6 ${className} cursor-pointer`}>
    {children}
  </div>
);

const Button = ({ children, className, disabled }) => (
  <button
    className={`px-4 py-1 font-semibold rounded-lg transition-colors ${disabled ? "bg-blue-100 text-gray-600 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"} ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

const images = [totalUser, planUser, silveruser, platinum];

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState("July");

  const stats = [
    { title: "Total Customers", value: 84, change: "+12%", color: "bg-blue-100", index: 1 },
    { title: "Total gold plan users", value: 25, change: "-5%", color: "bg-red-100", index: 2 },
    { title: "Total Silver Plan users", value: 37, change: "+8%", color: "bg-blue-100", index: 3 },
    { title: "Total Platinum plan users", value: 22, change: "+5%", color: "bg-green-100", index: 4 },
  ];

  const mealData = [
    { week: "1 Week", dineIn: 30, tiffin: 10 },
    { week: "2 Week", dineIn: 60, tiffin: 50 },
    { week: "3 Week", dineIn: 40, tiffin: 60 },
    { week: "4 Week", dineIn: 50, tiffin: 70 },
    { week: "5 Week", dineIn: 70, tiffin: 50 },
  ];

  const deliveryPartners = [
    { name: "Admin Name", location: "ABC road, Pune", status: "Available" },
    { name: "Admin Name", location: "ABC road, Pune", status: "Unavailable" },
    { name: "Admin Name", location: "ABC road, Pune", status: "Unavailable" },
    { name: "Admin Name", location: "ABC road, Pune", status: "Available" },
  ];

  const planUsers = [
    { id: 1, name: "John Khore", contact: "8966543246", plan: "Platinum Plan", date: "18/12/2024 12:00 PM", expiry: "Next 10 days", alert: "Notify" },
    { id: 2, name: "Lakhan", contact: "8966543246", plan: "Gold Plan", date: "10/12/2024 10:50 AM", expiry: "10/01/2025", alert: "Notify" },
    { id: 3, name: "Aakarsh", contact: "8966543246", plan: "Gold Plan", date: "10/12/2024 10:50 AM", expiry: "10/01/2025", alert: "Notify" },
  ];

  return (
    <div className="p-6 space-y-6 bg-white-100">
      <div className="grid grid-cols-4 gap-4 mt-3">
        {stats.map((stat, index) => (
          <Card key={index} className={`p-4 rounded-xl ${stat.color}`}>
            <img src={images[index % images.length]} alt={stat.title} />
            <h3 className="text-lg font-semibold">{stat.title}</h3>
            <p className="text-3xl font-bold">{stat.value}</p>
            <span className="text-sm">{stat.change} Than last month</span>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <CardNormal className="col-span-2 p-4 border-[1px] border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Total Meal Users</h3>
            <select
              className="border px-3 py-1 rounded-md shadow-sm border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option className="text-gray-500">July</option>
              <option className="text-gray-500">August</option>
              <option className="text-gray-500">September</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
  <BarChart data={mealData} barGap={6}>
    <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
    <XAxis dataKey="week" tick={{ fill: "#555" }} />
    <YAxis tick={{ fill: "#555" }} domain={[0, 100]} />
    <Tooltip />
    <Legend
      align="left"
      verticalAlign="top"
      wrapperStyle={{ marginBottom: '20px' }} 
      itemStyle={{ marginBottom: '10px' }} 
      itemGap={10} 
    />
    <Bar
      dataKey="dineIn"
      fill="#e74c3c"
      radius={[5, 5, 0, 0]}
      barSize={20}
    />
    <Bar
      dataKey="tiffin"
      fill="#3498db"
      radius={[5, 5, 0, 0]}
      barSize={20}
    />
  </BarChart>
</ResponsiveContainer>


        </CardNormal>

        <CardNormal className="p-4 border-[1px] border-gray-300 bg-[#F9F9F9]">
          <h3 className="text-xl font-semibold mb-4">Delivery Partner Data</h3>
          {deliveryPartners.map((partner, index) => (
            <div key={index} className="flex justify-between items-center p-2 bg-white rounded-md mb-2">
              <div>
                <p className="font-semibold">{partner.name}</p>
                <p className="text-sm text-gray-500">{partner.location}</p>
              </div>
              <Button className={partner.status === "Available" ? "bg-blue-500" : "bg-gray-300"}>{partner.status}</Button>
            </div>
          ))}
        </CardNormal>
      </div>
{/* 
      <CardNormal className="p-4 border-[1px] border-gray-300 bg-[#F9F9F9]">
        <h3 className="text-lg font-semibold">Plan Purchased Users</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Sr no</th>
              <th>Name</th>
              <th>Contact No</th>
              <th>Purchased Plan</th>
              <th>Date and Time</th>
              <th>Plan Expiry</th>
              <th>Plan Alert</th>
            </tr>
          </thead>
          <tbody>
            {planUsers.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-2">{user.id}</td>
                <td>{user.name}</td>
                <td>{user.contact}</td>
                <td>{user.plan}</td>
                <td>{user.date}</td>
                <td>{user.expiry}</td>
                <td>
                  <Button className={user.alert === "Notify" ? "bg-blue-500" : "bg-gray-300"}>{user.alert}</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardNormal> */}



      <div className="flex-grow bg-[#F9F9F9] border rounded-md border-gray-300 p-5">
      <h3 className="text-lg font-semibold text-gray-700">Plan Purchased Users</h3>
        <table className="w-full mt-2 border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
            <th className="p-2 text-gray-600 font-semibold">Sr</th>
              <th className="p-2 text-gray-600 font-semibold">Customer Name</th>
              <th className="text-gray-600 font-semibold">Contact</th>
              <th className="text-gray-600 font-semibold">Plan</th>
              <th className="text-gray-600 font-semibold">Date</th>
              <th className="text-gray-600 font-semibold">Expiry</th>
              <th className="text-gray-600 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {planUsers.map((user, index) => (
              <tr key={index} className="border-b border-gray-300 text-center text-gray-500">
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.name}</td>
                <td>{user.contact}</td>
                <td>{user.plan}</td>
                <td>{user.date}</td>
                <td>{user.expiry}</td>
                <td><Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(user)}
                  >
                    Notify
                  </Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;
