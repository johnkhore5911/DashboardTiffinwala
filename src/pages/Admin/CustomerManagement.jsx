import { useState } from "react";
import arrow from '../../assets/chevron_forward.png';
const qrOptions = [
  "Valid for One Meal",
  "Valid for Two Meals",
  "Valid for Full Day",
  "Valid for 1 Day",
  "Valid for 1 Week",
];

const usersData = [
  { name: "Courtney Henry", email: "alma.lawson@email.com", used: 30, remaining: 5, plan: "Gold", planCredits:50, planExpiry:"15 May 2025 " },
  { name: "Dianne Russell", email: "dolores.chambers@email.com", used: 20, remaining: 8, plan: "Silver", planCredits:45, planExpiry:"30 April 2025 " },
  { name: "Wade Warren", email: "debbie.baker@email.com", used: 21, remaining: 10, plan: "Silver", planCredits:7, planExpiry:"15 June 2025 " },
  { name: "Kathryn Murphy", email: "debra.holt@email.com", used: 22, remaining: 7, plan: "Gold", planCredits:45, planExpiry:"25 March 2025" },
  { name: "Eleanor Pena", email: "curtis.weaver@email.com", used: 28, remaining: 8, plan: "Platinum", planCredits:30, planExpiry:"12 March 2025" },
  { name: "Brooklyn Simmons", email: "tanya.hill@email.com", used: 33, remaining: 5, plan: "Platinum", planCredits:20, planExpiry:"5 March 2025" },
  { name: "John Doe", email: "john.doe@email.com", used: 25, remaining: 9, plan: "Gold", planCredits:50, planExpiry:"25 March 2025" },
  { name: "Jane Smith", email: "jane.smith@email.com", used: 18, remaining: 12, plan: "Silver", planCredits:20, planExpiry:"25 March 2025" },
  { name: "Dianne Russell", email: "dolores.chambers@email.com", used: 20, remaining: 8, plan: "Silver", planCredits:45, planExpiry:"30 April 2025 " },
  { name: "Wade Warren", email: "debbie.baker@email.com", used: 21, remaining: 10, plan: "Silver", planCredits:7, planExpiry:"15 June 2025 " },
  { name: "Kathryn Murphy", email: "debra.holt@email.com", used: 22, remaining: 7, plan: "Gold", planCredits:45, planExpiry:"25 March 2025" },
  { name: "Eleanor Pena", email: "curtis.weaver@email.com", used: 28, remaining: 8, plan: "Platinum", planCredits:30, planExpiry:"12 March 2025" },
  { name: "Brooklyn Simmons", email: "tanya.hill@email.com", used: 33, remaining: 5, plan: "Platinum", planCredits:20, planExpiry:"5 March 2025" },
  { name: "John Doe", email: "john.doe@email.com", used: 25, remaining: 9, plan: "Gold", planCredits:50, planExpiry:"25 March 2025" },
  { name: "Jane Smith", email: "jane.smith@email.com", used: 18, remaining: 12, plan: "Silver", planCredits:20, planExpiry:"25 March 2025" },
  { name: "Wade Warren", email: "debbie.baker@email.com", used: 21, remaining: 10, plan: "Silver", planCredits:7, planExpiry:"15 June 2025 " },
  { name: "Kathryn Murphy", email: "debra.holt@email.com", used: 22, remaining: 7, plan: "Gold", planCredits:45, planExpiry:"25 March 2025" },
  { name: "Eleanor Pena", email: "curtis.weaver@email.com", used: 28, remaining: 8, plan: "Platinum", planCredits:30, planExpiry:"12 March 2025" },
  { name: "Brooklyn Simmons", email: "tanya.hill@email.com", used: 33, remaining: 5, plan: "Platinum", planCredits:20, planExpiry:"5 March 2025" },
  { name: "John Doe", email: "john.doe@email.com", used: 25, remaining: 9, plan: "Gold", planCredits:50, planExpiry:"25 March 2025" },
  { name: "Jane Smith", email: "jane.smith@email.com", used: 18, remaining: 12, plan: "Silver", planCredits:20, planExpiry:"25 March 2025" },
];

const CustomerManagement = () => {
  const [selectedQR, setSelectedQR] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(15);
  const totalPages = Math.ceil(usersData.length / usersPerPage);


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);

  return (
<div className="min-h-[calc(100vh-70px)] flex flex-col justify-between p-6">

  <h1 className="font-semibold text-gray-600 text-3xl mb-8 mt-3">
    User Credit Dashboard
  </h1>

  {/* Table wrapper with flex-grow to take available space */}
  <div className="flex-grow">
    <table className="w-full mt-6 border-collapse">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="p-2 text-gray-600 font-semibold">Customer Name</th>
          <th className="text-gray-600 font-semibold">Email</th>
          <th className="text-gray-600 font-semibold">Used Credits</th>
          <th className="text-gray-600 font-semibold">Avaliable Credits</th>
          <th className="text-gray-600 font-semibold">Meal Plan</th>
          <th className="text-gray-600 font-semibold">Meal Plan Credits</th>
          <th className="text-gray-600 font-semibold">Meal Plan Expiry Date</th>
        </tr>
      </thead>
      <tbody>
        {currentUsers.map((user, index) => (
          <tr key={index} className="border-b border-gray-300 text-center text-gray-500">
            <td className="p-2">{user.name}</td>
            <td>{user.email}</td>
            <td>{user.used}</td>
            <td>{user.remaining}</td>
            <td>{user.plan}</td>
            <td>{user.planCredits}</td>
            <td>{user.planExpiry}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Pagination section at bottom */}
  <div className="mt-auto flex justify-between items-center">
    <div></div>

    <div className="flex items-center space-x-2">
      <button
        className="px-3 py-2 text-black disabled:opacity-50"
        disabled={currentPage >= totalPages}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        &lt;
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`px-3 py-2 font-300 text-black rounded-lg ${
            currentPage === i + 1 ? 'bg-[#8791CD] text-white' : 'hover:bg-gray-200'
          }`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="px-3 py-2 text-black font-bold disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        &gt;
      </button>
    </div>

    <div className="flex justify-center items-center">
      <span className="text-gray-500 mr-4">Results per page </span>
      <div className="relative w-16 cursor-pointer">
        <select
          className="border border-gray-300 p-1 rounded-lg px-4 text-gray-500 appearance-none bg-white w-full"
          onChange={(e) => setUsersPerPage(Number(e.target.value))}
        >
          {[15, 20].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 z-10 cursor-pointer">
          <img src={arrow} alt="down arrow" />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default CustomerManagement;
