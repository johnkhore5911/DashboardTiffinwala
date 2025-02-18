import { useEffect, useState } from "react";
import arrow from '../../assets/chevron_forward.png';
import Api from '../../services/api';

const CustomerManagement = () => {
  const [selectedQR, setSelectedQR] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(15);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get('/userRoutes/getAllCustomers'); 
        console.log("Fetched Data:", response.data);
        setCustomers(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const totalPages = Math.ceil(customers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = customers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="min-h-[calc(100vh-70px)] flex flex-col justify-between p-6">
      <h1 className="font-semibold text-gray-600 text-3xl mb-8 mt-3">
        User Credit Dashboard
      </h1>

      <div className="flex-grow">
        <table className="w-full mt-6 border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-2 text-gray-600 font-semibold">Customer Name</th>
              <th className="text-gray-600 font-semibold">Email</th>
              <th className="text-gray-600 font-semibold">Used Credits</th>
              <th className="text-gray-600 font-semibold">Available Credits</th>
              <th className="text-gray-600 font-semibold">Meal Plan</th>
              <th className="text-gray-600 font-semibold">Meal Plan Credits</th>
              <th className="text-gray-600 font-semibold">Meal Plan Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user, index) => (
                <tr key={index} className="border-b border-gray-300 text-center text-gray-500">
                  <td className="p-2">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{(user.mealPlanCredits - user.availableCredits) ? (user.mealPlanCredits - user.availableCredits) : "--"}</td>
                  <td>{user.availableCredits ?  user.availableCredits : "--"}</td>
                  <td>{user.mealPlanName ? user.mealPlanName : "--"}</td>
                  <td>{user.mealPlanCredits ? user.mealPlanCredits : "--"}</td>
                  {/* <td>{user.mealPlanExpiryDate}</td> */}
                  <td>
                  {user?.mealPlanExpiryDate
                  ? new Date(user.mealPlanExpiryDate).toLocaleString() // Converts to local date and time
                  : "--"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-4 text-gray-500">
                  No Customers Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-auto flex justify-between items-center">
        <div></div>

        <div className="flex items-center space-x-2">
          <button
            className="px-3 py-2 text-black disabled:opacity-50"
            disabled={currentPage <= 1}
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
