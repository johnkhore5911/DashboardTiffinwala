import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsBell } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

const ViewAvailableCustomers = () => {
  const data = [
    { name: 'Aakarsh Prasad', email: 'aakarshpsd12@gmail.com', usedCredits: 30, availableCredits: 5, mealPlan: 'Gold', mealPlanCredits: 50, expiryDate: '15 May 2024' },
    { name: 'John ', email: 'johnny@gmail.com', usedCredits: 20, availableCredits: 8, mealPlan: 'Silver', mealPlanCredits: 58, expiryDate: '15 May 2020' },
    { name: 'Aakarsh Prasad', email: 'aakarshpsd12@gmail.com', usedCredits: 21, availableCredits: 10, mealPlan: 'Silver', mealPlanCredits: 38, expiryDate: '15 May 2024' },
    { name: 'Johnny', email: 'johnny@gmail.com', usedCredits: 22, availableCredits: 7, mealPlan: 'Gold', mealPlanCredits: 40, expiryDate: '15 May 2020' },
    { name: 'Aakarsh Prasad', email: 'aakarshpsd12@gmail.com', usedCredits: 28, availableCredits: 8, mealPlan: 'Platinum', mealPlanCredits: 32, expiryDate: '15 May 2024' },
    { name: 'John ', email: 'johnny@gmail.com', usedCredits: 33, availableCredits: 5, mealPlan: 'Platinum', mealPlanCredits: 22, expiryDate: '15 May 2024' }
  ];
  

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">View Available Customers</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Type to search"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <FiSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
          <BsBell className="text-xl text-gray-500" />
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-2xl text-gray-500" />
            <span className="text-sm">Admin Name</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Customer Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Used Credits</th>
              <th className="py-2 px-4 border-b">Available Credits</th>
              <th className="py-2 px-4 border-b">Meal Plan Name</th>
              <th className="py-2 px-4 border-b">Meal Plan Credits</th>
              <th className="py-2 px-4 border-b">Meal Plan Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.email}</td>
                <td className="py-2 px-4 border-b">{item.usedCredits}</td>
                <td className="py-2 px-4 border-b">{item.availableCredits}</td>
                <td className="py-2 px-4 border-b">{item.mealPlan}</td>
                <td className="py-2 px-4 border-b">{item.mealPlanCredits}</td>
                <td className="py-2 px-4 border-b">{item.expiryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-sm">Results per page: 10</span>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded-md bg-blue-500 text-white">1</button>
          <button className="px-3 py-1 border rounded-md">2</button>
          <button className="px-3 py-1 border rounded-md">3</button>
          <button className="px-3 py-1 border rounded-md">4</button>
          <button className="px-3 py-1 border rounded-md">5</button>
        </div>
      </div>
    </div>
  );
};

export default ViewAvailableCustomers;
