import { useState, useEffect } from "react";
import arrow from '../../assets/chevron_forward.png';
import { Button, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../../services/api';
import axios from "axios";

const MealOptNotification = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(15);
  const [optOutUsers, setOptOutUsers] = useState([]);
  const [loadingId, setLoadingId] = useState(null); // Track the loading state for each delete action

  const handleDelete = (id) => {
    setLoadingId(id); // Set loading state for the button
    api
      .post('/userRoutes/deleteOptOutById', { id })
      .then((response) => {
        if (response.status === 200) {
          setOptOutUsers(optOutUsers.filter((user) => user._id !== id));
          alert('Opt-out record deleted successfully');
        }
      })
      .catch((error) => {
        console.error('Error deleting opt-out record:', error);
      })
      .finally(() => {
        setLoadingId(null); // Reset loading state
      });
  };

  useEffect(() => {
    const fetchOptOutUsers = async () => {
      try {
        const response = await api.get('/userRoutes/getOptOutReports');
        setOptOutUsers(response.data);
      } catch (err) {
        console.error("Error fetching missed deliveries:", err);
      }
    };

    fetchOptOutUsers();

    const intervalId = setInterval(fetchOptOutUsers, 5000);
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const totalPages = Math.ceil(optOutUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = optOutUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="min-h-[calc(100vh-70px)] flex flex-col justify-between p-6">
      <h1 className="font-semibold text-gray-600 text-3xl mb-8 mt-3">Meal Opt-Out Notification</h1>

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
                <td className="p-2">{user.customer?.name}</td>
                <td>{user.customer?.email}</td>
                <td>{user.customer?.contact}</td>
                <td>{user.date}</td>
                <td>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={loadingId === user._id ? <CircularProgress size={24} /> : <DeleteIcon />}
                    onClick={() => handleDelete(user._id)}
                    disabled={loadingId === user._id} // Disable button during loading
                    style={{
                      backgroundColor: loadingId === user._id ? '#f2f2f2' : '',
                      color: loadingId === user._id ? 'red' : 'red',
                    }}
                  >
                    {loadingId === user._id ? 'Deleting...' : 'Delete'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination section */}
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
              className={`px-3 py-2 font-300 text-black rounded-lg ${currentPage === i + 1 ? 'bg-[#8791CD] text-white' : 'hover:bg-gray-200'}`}
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
