// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { FaUserFriends, FaUsers, FaStar, FaCrown } from 'react-icons/fa';
// import 'chart.js/auto';

// const DashboardBody = () => {
//   const barData = {
//     labels: ['1 Week', '2 Week', '3 Week', '4 Week', '5 Week'],
//     datasets: [
//       { label: 'Dine in', data: [20, 40, 60, 80, 50], backgroundColor: '#f87699' },
//       { label: 'Tiffin', data: [30, 50, 70, 90, 60], backgroundColor: '#2b99f0' },
//     ],
//   };

//   const barOptions = {
//     plugins: { legend: { display: true, position: 'top' } },
//     scales: { y: { beginAtZero: true } },
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {/* Stat Cards */}
//         {[
//           { icon: <FaUserFriends />, title: 'Total Customers', count: 84, change: '+12%', color: 'bg-indigo-500' },
//           { icon: <FaStar />, title: 'Total Gold Plan Users', count: 25, change: '-5%', color: 'bg-yellow-500' },
//           { icon: <FaUsers />, title: 'Total Silver Plan Users', count: 37, change: '+8%', color: 'bg-blue-500' },
//           { icon: <FaCrown />, title: 'Total Platinum Plan Users', count: 22, change: '+5%', color: 'bg-purple-500' },
//         ].map((stat, index) => (
//           <div key={index} className={`p-6 rounded-lg shadow-md text-white ${stat.color}`}>
//             <div className="flex items-center space-x-4">
//               <div className="text-4xl">{stat.icon}</div>
//               <div>
//                 <h3 className="text-lg font-semibold">{stat.title}</h3>
//                 <h1 className="text-3xl font-bold">{stat.count}</h1>
//                 <p className="text-sm">{stat.change} Than last month</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Chart Section */}
//       <div className="bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-6">Total Meal Users</h2>
//         <Bar data={barData} options={barOptions} />
//       </div>
//     </div>
//   );
// };

// export default DashboardBody;


import React from 'react';
import { FaBell, FaCalendarAlt, FaUsers, FaRegMoneyBillAlt } from 'react-icons/fa';

const Header = ({ adminName }) => {
  return (
    <div className="p-4 bg-gray-100 min-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center px-2 py-2 bg-white border border-gray-200 rounded-lg">
        <div className="text-gray-700">
          <h2 className="text-2xl font-semibold">Hi Aakarsh,</h2>
          <p className="text-sm text-gray-500">Welcome back!</p>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-gray-600 bg-gray-100 px-4 py-2 rounded-md shadow-sm">
            <FaCalendarAlt className="text-blue-500" />
            <span className="text-sm">Jul 20, 2024</span>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Type to search"
              className="w-64 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>
          <div className="relative">
            <FaBell className="text-2xl text-gray-600 cursor-pointer hover:text-blue-500" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/40"
              alt="Admin"
              className="w-10 h-10 rounded-full border-2 border-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">{adminName}</span>
          </div>
        </div>
      </div>

      {/* Customer Cards Section */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <CustomerCard
          icon={<FaUsers className="text-blue-500" />}
          title="Total Customers"
          count="84"
          percentage="+12%"
          bgColor="bg-blue-100"
          textColor="text-blue-700"
        />
        <CustomerCard
          icon={<FaRegMoneyBillAlt className="text-pink-500" />}
          title="Total Gold Plan Users"
          count="25"
          percentage="-5%"
          bgColor="bg-pink-100"
          textColor="text-pink-700"
        />
        <CustomerCard
          icon={<FaRegMoneyBillAlt className="text-teal-500" />}
          title="Total Silver Plan Users"
          count="37"
          percentage="+8%"
          bgColor="bg-teal-100"
          textColor="text-teal-700"
        />
        <CustomerCard
          icon={<FaRegMoneyBillAlt className="text-green-500" />}
          title="Total Platinum Plan Users"
          count="22"
          percentage="+5%"
          bgColor="bg-green-100"
          textColor="text-green-700"
        />
      </div>
    </div>
  );
};

const CustomerCard = ({ icon, title, count, percentage, bgColor, textColor }) => {
  return (
    <div className={`p-3 rounded-md shadow-sm ${bgColor}`}>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm">
          {icon}
        </div>
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p className="text-2xl font-bold">{count}</p>
      <p className={`mt-1 text-xs ${textColor}`}>{percentage} Than last month</p>
    </div>
  );
};


export default Header;

