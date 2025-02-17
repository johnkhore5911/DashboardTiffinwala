import React, { useState } from 'react';
import { FaCalendarAlt, FaBell } from 'react-icons/fa';

const QRCodeScanning = () => {
  const [qrCodeType, setQrCodeType] = useState('Valid for one meal');

  const handleGenerateQR = () => {
    alert('QR Code generated successfully!');
  };

  const tableData = [
    { name: 'Aakarsh Prasad', email: 'aakarshpsd12@email.com', usedCredits: 30, remainingCredits: 5, mealPlan: 'Gold', lastScanned: '06:41 pm' },
    { name: 'John', email: 'johnny@email.com', usedCredits: 20, remainingCredits: 8, mealPlan: 'Silver', lastScanned: '11:27 pm' },
    { name: 'Aakarsh Prasad', email: 'aakarshpsd12@email.com', usedCredits: 21, remainingCredits: 10, mealPlan: 'Silver', lastScanned: '12:01 pm' },
    { name: 'John', email: 'johnny@email.com', usedCredits: 22, remainingCredits: 7, mealPlan: 'Gold', lastScanned: '06:42 am' },
    { name: 'Aakarsh Prasad', email: 'aakarshpsd12@email.com', usedCredits: 28, remainingCredits: 8, mealPlan: 'Platinum', lastScanned: '03:48 am' },
    { name: 'John', email: 'johnny@email.com', usedCredits: 33, remainingCredits: 5, mealPlan: 'Platinum', lastScanned: '10:41 pm' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <FaCalendarAlt className="text-gray-500" />
          <span className="text-gray-600">Jul 20, 2024</span>
        </div>
        <div className="flex items-center gap-6">
          <input
            type="text"
            placeholder="Type to search"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaBell className="text-2xl text-gray-600 cursor-pointer hover:text-blue-500" />
          <div className="flex items-center gap-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Admin"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-700">Admin Name</span>
          </div>
        </div>
      </div>

      {/* QR Code Scanning Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">QR Code Scanning</h2>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Generate QR Code</h3>
        <div className="flex items-center gap-4 mb-4">
          <select
            value={qrCodeType}
            onChange={(e) => setQrCodeType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Valid for one meal">Valid for one meal</option>
            <option value="Valid for one week">Valid for one week</option>
            <option value="Valid for one month">Valid for one month</option>
          </select>
          <button
            onClick={handleGenerateQR}
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Generate QR Code
          </button>
        </div>
      </div>

      {/* Table Section */}
      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-700">
            <th className="p-4">Customer Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Used Credits</th>
            <th className="p-4">Remaining Credits</th>
            <th className="p-4">Meal Plan</th>
            <th className="p-4">Last Scanned (Local Time)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="p-4">{data.name}</td>
              <td className="p-4">{data.email}</td>
              <td className="p-4">{data.usedCredits}</td>
              <td className="p-4">{data.remainingCredits}</td>
              <td className="p-4">{data.mealPlan}</td>
              <td className="p-4">{data.lastScanned}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-gray-600">Results per page</div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-gray-200 rounded-lg">1</button>
          <button className="px-3 py-1">2</button>
          <button className="px-3 py-1">3</button>
          <button className="px-3 py-1">4</button>
          <button className="px-3 py-1">5</button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeScanning;
