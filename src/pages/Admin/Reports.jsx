import { useState, useEffect } from "react";
import arrow from '../../assets/chevron_forward.png';
import { Button } from '@mui/material';
import api from '../../services/api';


const Reports = () => {
  const [missedDeliveries, setMissedDeliveries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(15);
  const [isRefunding, setIsRefunding] = useState(false);
  

  useEffect(() => {
    const fetchMissedDeliveries = async () => {
      try {
        const response = await api.get('/deliveryRoutes/adminReportMissedTiffins');
        console.log("/deliveryRoutes/adminReportMissedTiffins: ", response.data);
        setMissedDeliveries(response.data);
      } catch (err) {
        console.error("Error fetching missed deliveries:", err);
      }
    };

    fetchMissedDeliveries();

    const intervalId = setInterval(fetchMissedDeliveries, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);




  // const handleRefund = async (id) => {
    // console.log("id: ",id);
    // try {
    //   const response = await api.post(
    //     '/userRoutes/refundCredits', 
    //     { deliveryId:id }
    //   );

    //   setDisabledRefunds((prev) => ({ ...prev, [id]: true })); // Disable the button for this ID
    //   alert('Credits refunded successfully!');
    // } catch (err) {
    //   console.error(err);
    //   alert('Failed to refund credits!');
    // }
  // };

  const [disabledRefunds, setDisabledRefunds] = useState({});

  const handleRefund = async (id) => {
    console.log("Refunding for ID: ", id);
    
    // Disable the button for this specific ID
    setDisabledRefunds((prev) => ({ ...prev, [id]: true }));
    
    try {
      // Make the API request to refund credits
      const response = await api.post('/userRoutes/refundCredits', { deliveryId: id });

      // If refund is successful, show a success message
      alert('Credits refunded successfully!');
    } catch (err) {
      // Handle error and show an alert
      console.error(err);
      alert('Failed to refund credits!');
    } finally {
      // Optionally, reset the button state or leave it disabled for better UX
      // setDisabledRefunds((prev) => ({ ...prev, [id]: false }));
    }
  };

  const totalPages = Math.ceil(missedDeliveries.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = missedDeliveries.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="min-h-[calc(100vh-70px)] flex flex-col justify-between p-6">
      <h1 className="font-semibold text-gray-600 text-3xl mb-8 mt-3">
        Missing Tiffin Reports
      </h1>

      {/* Table wrapper with flex-grow to take available space */}
      <div className="flex-grow">
        <table className="w-full mt-6 border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-2 text-gray-600 font-semibold">Customer Name</th>
              <th className="text-gray-600 font-semibold">Customer Email</th>
              <th className="text-gray-600 font-semibold">Delivery Person</th>
              <th className="text-gray-600 font-semibold">Delivery Person Email</th>
              <th className="text-gray-600 font-semibold">Status</th>
              <th className="text-gray-600 font-semibold">Collection Status</th>
              <th className="text-gray-600 font-semibold">Date</th>
              <th className="text-gray-600 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={index} className="border-b border-gray-300 text-center text-gray-500">
                <td className="p-2">{user.customer?.name}</td>
                <td>{user.customer?.email}</td>
                <td>{user.deliveryPerson?.name}</td>
                <td>{user.deliveryPerson?.email}</td>
                <td>{user.status}</td>
                <td>{user.collectionStatus}</td>
                <td>{user.date}</td>
                <td>
            { (user.status === 'Missed' && !user.isRefunded ) ? (
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#8791CD",
                        "&:hover": {
                          backgroundColor: "#6B7AB6",
                        },
                      }}
                      onClick={() => handleRefund(user._id)}
                      disabled={disabledRefunds[user._id]}
                    >
                      {disabledRefunds[user._id] ? 'Processing...' : 'Refund Credits'}
                    </Button>
                  ) : (
                    <div>
                      Already Refunded
                    </div>
                  ) }
                </td>
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

export default Reports;
