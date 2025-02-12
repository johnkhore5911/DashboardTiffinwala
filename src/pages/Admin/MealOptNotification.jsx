import { useState } from "react";
import arrow from '../../assets/chevron_forward.png';
import { Button, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const qrOptions = [
  "Valid for One Meal",
  "Valid for Two Meals",
  "Valid for Full Day",
  "Valid for 1 Day",
  "Valid for 1 Week",
];

const usersData = [
  { name: "Courtney Henry", email: "alma.lawson@email.com", contact: 9746367830, dateAndTime:"15 May 2025 " },
  { name: "Dianne Russell", email: "dolores.chambers@email.com", contact: 9746367820,  dateAndTime:"30 April 2025 " },
  { name: "Wade Warren", email: "debbie.baker@email.com", contact: 9746367821, dateAndTime:"15 June 2025 " },
  { name: "Kathryn Murphy", email: "debra.holt@email.com", contact: 9746367822, dateAndTime:"25 March 2025" },
  { name: "Eleanor Pena", email: "curtis.weaver@email.com", contact: 9746367828, dateAndTime:"12 March 2025" },
  { name: "Brooklyn Simmons", email: "tanya.hill@email.com", contact: 9746367833, dateAndTime:"5 March 2025" },
  { name: "John Doe", email: "john.doe@email.com", contact: 9746367825, dateAndTime:"25 March 2025" },
  { name: "Jane Smith", email: "jane.smith@email.com", contact: 9746367818, dateAndTime:"25 March 2025" },
  { name: "Dianne Russell", email: "dolores.chambers@email.com", contact: 9746367820, dateAndTime:"30 April 2025 " },
  { name: "Wade Warren", email: "debbie.baker@email.com", contact: 9746367821, dateAndTime:"15 June 2025 " },
  { name: "Kathryn Murphy", email: "debra.holt@email.com", contact: 9746367822, dateAndTime:"25 March 2025" },
  { name: "Eleanor Pena", email: "curtis.weaver@email.com", contact: 9746367828, dateAndTime:"12 March 2025" },
  { name: "Brooklyn Simmons", email: "tanya.hill@email.com", contact: 9746367833, dateAndTime:"5 March 2025" },
  { name: "John Doe", email: "john.doe@email.com", contact: 9746367825, dateAndTime:"25 March 2025" },
  { name: "Jane Smith", email: "jane.smith@email.com", contact: 9746367818, dateAndTime:"25 March 2025" },
  { name: "Wade Warren", email: "debbie.baker@email.com", contact: 9746367821, dateAndTime:"15 June 2025 " },
  { name: "Kathryn Murphy", email: "debra.holt@email.com", contact: 9746367822, dateAndTime:"25 March 2025" },
  { name: "Eleanor Pena", email: "curtis.weaver@email.com", contact: 9746367828, dateAndTime:"12 March 2025" },
  { name: "Brooklyn Simmons", email: "tanya.hill@email.com", contact: 9746367833, dateAndTime:"5 March 2025" },
  { name: "John Doe", email: "john.doe@email.com", contact: 9746367825, dateAndTime:"25 March 2025" },
  { name: "Wade Warren", email: "debbie.baker@email.com", contact: 9746367821, dateAndTime:"15 June 2025 " },
  { name: "Kathryn Murphy", email: "debra.holt@email.com", contact: 9746367822, dateAndTime:"25 March 2025" },
  { name: "Eleanor Pena", email: "curtis.weaver@email.com", contact: 9746367828, dateAndTime:"12 March 2025" },
  { name: "Brooklyn Simmons", email: "tanya.hill@email.com", contact: 9746367833, dateAndTime:"5 March 2025" },
  { name: "John Doe", email: "john.doe@email.com", contact: 9746367825, dateAndTime:"25 March 2025" },
  { name: "Jane Smith", email: "jane.smith@email.com", contact: 9746367818, dateAndTime:"25 March 2025" },
  { name: "Courtney Henry", email: "alma.lawson@email.com", contact: 9746367830, dateAndTime:"15 May 2025 " },
  { name: "Dianne Russell", email: "dolores.chambers@email.com", contact: 9746367820,  dateAndTime:"30 April 2025 " },
  { name: "Wade Warren", email: "debbie.baker@email.com", contact: 9746367821, dateAndTime:"15 June 2025 " },
  { name: "Kathryn Murphy", email: "debra.holt@email.com", contact: 9746367822, dateAndTime:"25 March 2025" },
  { name: "Eleanor Pena", email: "curtis.weaver@email.com", contact: 9746367828, dateAndTime:"12 March 2025" },
  { name: "Brooklyn Simmons", email: "tanya.hill@email.com", contact: 9746367833, dateAndTime:"5 March 2025" },
  { name: "John Doe", email: "john.doe@email.com", contact: 9746367825, dateAndTime:"25 March 2025" },
  { name: "Jane Smith", email: "jane.smith@email.com", contact: 9746367818, dateAndTime:"25 March 2025" },
  { name: "Dianne Russell", email: "dolores.chambers@email.com", contact: 9746367820, dateAndTime:"30 April 2025 " },
  { name: "Wade Warren", email: "debbie.baker@email.com", contact: 9746367821, dateAndTime:"15 June 2025 " },
  { name: "Kathryn Murphy", email: "debra.holt@email.com", contact: 9746367822, dateAndTime:"25 March 2025" },
  { name: "Eleanor Pena", email: "curtis.weaver@email.com", contact: 9746367828, dateAndTime:"12 March 2025" },
  { name: "Brooklyn Simmons", email: "tanya.hill@email.com", contact: 9746367833, dateAndTime:"5 March 2025" },
  { name: "John Doe", email: "john.doe@email.com", contact: 9746367825, dateAndTime:"25 March 2025" },
  { name: "Jane Smith", email: "jane.smith@email.com", contact: 9746367818, dateAndTime:"25 March 2025" },
  { name: "Wade Warren", email: "debbie.baker@email.com", contact: 9746367821, dateAndTime:"15 June 2025 " },
];

const handleDelete = (user) => {
  console.log("user: ",user);
  // axios
  //   .post(
  //     'https://tiffin-wala-backend.vercel.app/api/userRoutes/deleteOptOutById',
  //     { id },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   )
  //   .then((response) => {
  //     if (response.status === 200) {
  //       // Remove the deleted report from the state
  //       setOptOutReports(optOutReports.filter((report) => report._id !== id));
  //       alert('Opt-out record deleted successfully');
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('Error deleting opt-out record:', error);
  //   });
};

const MealOptNotification = () => {
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
    Meal Opt-Out Notification
  </h1>

  {/* Table wrapper with flex-grow to take available space */}
  <div className="flex-grow">
    <table className="w-full mt-6 border-collapse">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="p-2 text-gray-600 font-semibold">Customer Name</th>
          <th className="text-gray-600 font-semibold">Email</th>
          <th className="text-gray-600 font-semibold">Contact</th>
          <th className="text-gray-600 font-semibold">Date and Time</th>
          <th className="text-gray-600 font-semibold">Action</th>
        </tr>
      </thead>
      <tbody>
        {currentUsers.map((user, index) => (
          <tr key={index} className="border-b border-gray-300 text-center text-gray-500">
            <td className="p-2">{user.name}</td>
            <td>{user.email}</td>
            <td>{user.contact}</td>
            <td>{user.dateAndTime}</td>
            <td><Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete(user)}
              >
                Delete
              </Button></td>
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

export default MealOptNotification;
