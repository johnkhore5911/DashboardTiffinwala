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
  { name: "Courtney Henry", email: "alma.lawson@email.com", used: 30, remaining: 5, plan: "Gold", scanned: "06:41 pm" },
  { name: "Dianne Russell", email: "dolores.chambers@email.com", used: 20, remaining: 8, plan: "Silver", scanned: "11:27 pm" },
  { name: "Wade Warren", email: "debbie.baker@email.com", used: 21, remaining: 10, plan: "Silver", scanned: "12:01 pm" },
  { name: "Kathryn Murphy", email: "debra.holt@email.com", used: 22, remaining: 7, plan: "Gold", scanned: "06:42 am" },
  { name: "Eleanor Pena", email: "curtis.weaver@email.com", used: 28, remaining: 8, plan: "Platinum", scanned: "03:48 am" },
  { name: "Brooklyn Simmons", email: "tanya.hill@email.com", used: 33, remaining: 5, plan: "Platinum", scanned: "10:41 pm" },
  { name: "John Doe", email: "john.doe@email.com", used: 25, remaining: 9, plan: "Gold", scanned: "05:30 pm" },
  { name: "Jane Smith", email: "jane.smith@email.com", used: 18, remaining: 12, plan: "Silver", scanned: "09:15 am" },
  { name: "Bob Johnson", email: "bob.johnson@email.com", used: 26, remaining: 6, plan: "Gold", scanned: "02:22 pm" },
  { name: "Alice Brown", email: "alice.brown@email.com", used: 24, remaining: 7, plan: "Platinum", scanned: "07:45 pm" },
  { name: "Jane Smith", email: "jane.smith@email.com", used: 18, remaining: 12, plan: "Silver", scanned: "09:15 am" },
  { name: "Bob Johnson", email: "bob.johnson@email.com", used: 26, remaining: 6, plan: "Gold", scanned: "02:22 pm" },
  { name: "Alice Brown", email: "alice.brown@email.com", used: 24, remaining: 7, plan: "Platinum", scanned: "07:45 pm" },
  { name: "Wade Warren", email: "debbie.baker@email.com", used: 21, remaining: 10, plan: "Silver", scanned: "12:01 pm" },
  { name: "Kathryn Murphy", email: "debra.holt@email.com", used: 22, remaining: 7, plan: "Gold", scanned: "06:42 am" },
  { name: "Eleanor Pena", email: "curtis.weaver@email.com", used: 28, remaining: 8, plan: "Platinum", scanned: "03:48 am" },
  { name: "Brooklyn Simmons", email: "tanya.hill@email.com", used: 33, remaining: 5, plan: "Platinum", scanned: "10:41 pm" },
  { name: "John Doe", email: "john.doe@email.com", used: 25, remaining: 9, plan: "Gold", scanned: "05:30 pm" },
  { name: "Jane Smith", email: "jane.smith@email.com", used: 18, remaining: 12, plan: "Silver", scanned: "09:15 am" },
  { name: "Bob Johnson", email: "bob.johnson@email.com", used: 26, remaining: 6, plan: "Gold", scanned: "02:22 pm" },
  { name: "Alice Brown", email: "alice.brown@email.com", used: 24, remaining: 7, plan: "Platinum", scanned: "07:45 pm" },
  { name: "Jane Smith", email: "jane.smith@email.com", used: 18, remaining: 12, plan: "Silver", scanned: "09:15 am" },
  { name: "Bob Johnson", email: "bob.johnson@email.com", used: 26, remaining: 6, plan: "Gold", scanned: "02:22 pm" },
  { name: "Alice Brown", email: "alice.brown@email.com", used: 24, remaining: 7, plan: "Platinum", scanned: "07:45 pm" },
];

const QRCodeScanning = () => {
  const [selectedQR, setSelectedQR] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const totalPages = Math.ceil(usersData.length / usersPerPage);


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="p-6 min-h-[calc(100vh-70px)]">
      <h1 className="font-semibold text-gray-700 mb-5 text-3xl">QR Code Scanning</h1>
      {/* <div className="bg-white p-6 rounded-lg mb-2 flex items-center w-3xl space-x-4  border-gray-800"> */}
      <div className="bg-white p-6 rounded-lg mb-2 items-center w-3xl space-x-4 border border-gray-300">
        <div className="mb-10 text-xl text-gray-600 font-semibold">Generate QR Code</div>
        <div className="flex">
          {/* Wrapper div for label and select */}
        <div className="relative">
          <label className="absolute left-3 top-0 -translate-y-1/2 bg-white px-1 text-gray-800 text-md">
            QR Code
          </label>
          <select className="w-72 border border-gray-300 p-2 py-3 pl-4 rounded-lg text-gray-400 bg-white text-sm">
            <option value="">Select QR Code Type</option>
            {qrOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
          
        {/* Generate QR Code Button */}
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg ml-12 cursor-pointer hover:bg-blue-700 font-semibold">
          Generate QR Code
        </button>

        </div>
      </div>


      <div className="flex-grow">
        <table className="w-full mt-6 border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-2 text-gray-600 font-bold">Customer Name</th>
              <th className="text-gray-600 font-bold">Email</th>
              <th className="text-gray-600 font-bold">Used Credits</th>
              <th className="text-gray-600 font-bold">Remaining Credits</th>
              <th className="text-gray-600 font-bold">Meal Plan</th>
              <th className="text-gray-600 font-bold">Last Scanned (Local Time)</th>
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
                <td>{user.scanned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  {/* Pagination section at bottom */}
  {/* <div className="mt-auto flex justify-between items-center"> */}
  <div className="fixed mt-auto bottom-10 min-w-[80vw] flex justify-between items-center">

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

export default QRCodeScanning;
