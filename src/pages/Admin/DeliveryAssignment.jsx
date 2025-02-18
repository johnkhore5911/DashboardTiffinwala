import { useState,useEffect } from "react";
import arrow from '../../assets/chevron_forward.png';
import { Button,Chip } from '@mui/material';
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import api from '../../services/api';


const DeliveryManagement = () => {
  const [selectedQR, setSelectedQR] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(15);
  const [selectedTime, setSelectedTime] = useState("");
  const [tempSelectedCustomers,setTempSelectedCustomers] = useState([]);
  const [selectedDeliveryUser, setSelectedDeliveryUser] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [customers, setCustomers] = useState([]);
  const [deliveryUsers, setDeliveryUsers] = useState([]);
  const [deliveryData, setDeliveryData] = useState([]);
  

  const fetchData = async () => {
    try {
      const customerResponse = await api.get(
        '/userRoutes/getTiffinSystemCustomers'
      );
      const deliveryResponse = await api.get(
        '/userRoutes/getDeliveryUsers'
      );
  
      const deliveryDataResponse = await api.get(
        '/deliveryRoutes/getAllDeliveries'
      );
  
      console.log("customerResponse: ", customerResponse.data);
      console.log("deliveryResponse: ", deliveryResponse.data);
      setCustomers(customerResponse.data.customers);
      setDeliveryUsers(deliveryResponse.data.data);
      setDeliveryData(deliveryDataResponse.data.deliveryPersons);
      console.log("Jatt di msuk biba russia toh: ", deliveryDataResponse.data.deliveryPersons);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);


  const handleAddCustomer = ()=>{
    console.log("selectedCustomer: ",selectedCustomer);
    console.log("selectedDeliveryUser: ",selectedDeliveryUser);
    console.log("selectedTime: ",selectedTime);
    const randomId = uuidv4();
    console.log(randomId);

    const customer = customers.find((c) => c._id === selectedCustomer);
    const deliveryUser = deliveryUsers.find((user) => user._id === selectedDeliveryUser);

    console.log("hiix1")
    console.log("customer: ",customer);
    console.log("deliveryUser: ",deliveryUser);

    if (selectedCustomer && selectedDeliveryUser) {
      setTempSelectedCustomers((prev) => [
        ...prev,
        {
          uniqueId:randomId,
          customerId: selectedCustomer,
          customerName: customer.name,
          customerFcmtoken: customer.fcmToken,
          deliveryPersonId: selectedDeliveryUser,
          deliveryName: deliveryUser.name,
          deliveryFcmtoken: deliveryUser.fcmToken, // Include delivery FCM token
          status: 'Pending',
          date: selectedTime,
        },
      ]);
      console.log("tempSelectedCustomers: ",tempSelectedCustomers);
    } else {
      alert('Please select a valid customer and delivery user.');
    }
  }

  const handleDelete = async (deliveryPersonId, customerId) => {
    console.log("deliveryPersonId: ",deliveryPersonId);
    console.log("customerId: ",customerId);
    try {
      await api.delete(
        `/deliveryRoutes/delete/${deliveryPersonId}/${customerId}`,
      );
      alert('Delivery deleted successfully.');
      fetchData(); 
    } catch (error) {
      console.error('Error deleting delivery:', error);
      alert('Failed to delete delivery. Please try again.');
    }
  };

  const handleRemoveCustomer = (customerId) => {
    setTempSelectedCustomers((prev) =>
      prev.filter((c) => c.uniqueId !== customerId)
    );
  };


  const handleAssign = async () => {
    if (!selectedDeliveryUser || tempSelectedCustomers.length === 0) {
      alert('Please select a delivery user and at least one customer.');
      return;
    }
    console.log("23: ",tempSelectedCustomers);

    try {
      await api.post(
        '/deliveryRoutes/assignMultiple',
        tempSelectedCustomers,
      );
      fetchData();
      alert('Delivery assignment successful!');
      setTempSelectedCustomers([]);
    } catch (error) {
      console.error('Error assigning delivery:', error);
      alert('Failed to assign delivery. Please try again.');
    }
  };


  return (
<div className="min-h-[calc(100vh-70px)] flex flex-col justify-between p-6">
  

  <h1 className="font-semibold text-gray-600 text-3xl mt-3">
    Delivery Assignment
  </h1>



  <div className="bg-white p-6 rounded-lg items-center w-[60rem] border border-gray-300 mb-4">
        <div className="mb-10 text-xl text-gray-600 font-semibold">Assign Deliveries</div>
        <div className="flex gap-5">
          {/* Wrapper div for label and select */}
        <div className="relative">
          <label className="absolute left-3 top-0 -translate-y-1/2 bg-white px-1 text-gray-800 text-md">
            Select Customer
          </label>
          <select
        className="w-72 border border-gray-300 p-2 py-3 pl-4 rounded-lg text-gray-600 bg-white text-sm"
        value={selectedCustomer}
        onChange={(e) => setSelectedCustomer(e.target.value)}
      >
        <option value="">Select Customer</option>
        {customers.map((customer) => (
          <option key={customer._id} value={customer._id}>
            {customer.name} ({customer.address}){/* Adjust this based on API response */}
          </option>
        ))}
      </select>
        </div>

        <div className="relative">
          <label className="absolute left-3 top-0 -translate-y-1/2 bg-white px-1 text-gray-800 text-md">
          Select Delivery 
          </label>
          <select
            className="w-72 border border-gray-300 p-2 py-3 pl-4 rounded-lg text-gray-600 bg-white text-sm"
            value={selectedDeliveryUser} 
            onChange={(e) => setSelectedDeliveryUser(e.target.value)}
          >
            <option value="">Select Delivery</option>
            {deliveryUsers.map((delivery) => (
              <option key={delivery._id} value={delivery._id}>
              {delivery.name} ({delivery.address}){/* Adjust this based on API response */}
            </option>
            ))}
          </select>

        </div>

        <div className="relative">
          <TextField
            label="Select Time"
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            InputLabelProps={{ shrink: true }}
            inputProps={{
              step: 300, // 5-minute intervals
              style: {
                padding: "16px", // Reduce input padding
                fontSize: "16px", // Reduce font size
                color:`gray`
              },
            }}
            InputProps={{
              style: {
                height: "50px", // Reduce input box height
                fontSize: "16px",
              },
            }}
          />
        </div>
          
        {/* Generate QR Code Button */}
        <button className="px-12 py-0 bg-blue-600 text-white rounded-lg ml-12 cursor-pointer hover:bg-blue-700 font-semibold" onClick={handleAddCustomer}>
          Add
        </button>

        </div>

        {
          tempSelectedCustomers.length == 0 ? <></> : 
          <div>
            <div className="font-semibold text-gray-600 text-lg mt-3">
              Selected Customer
            </div>
            
            {
              tempSelectedCustomers.map((customer) => (
                <Chip
                key={customer.uniqueId}
                label={`Customer: ${customer.customerName} | Time: ${customer.date}`}
                onDelete={() => handleRemoveCustomer(customer.uniqueId)}
                sx={{ margin: '5px' }}
              />
              ))
            }
              <div className="mb-2 mt-4 relative right-10">
                <button className="px-12 py-2 bg-blue-600 text-white rounded-lg ml-12 cursor-pointer hover:bg-blue-700 font-semibold"
                onClick={() => handleAssign()}
                >
                  Assign Deliveries
                </button>
              </div>

          </div>
        }
      </div>

{/* Table wrapper with flex-grow to take available space */}
<div className="flex-grow overflow-auto max-h-[560px] hide-scrollbar">
  {deliveryData.map((data, index) => (
    <div key={index} className="bg-white border border-gray-400 rounded-lg p-4 mb-4">
      <div className="">
        <h2 className="text-2xl font-semibold text-gray-600">{data.deliveryPerson.name}</h2>
        <p className="text-gray-600">{data.deliveryPerson.email}</p>
      </div>

      <div className="flex-grow">
        <table className="w-full mt-6 border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-2 text-gray-600 font-semibold">Customer Name</th>
              <th className="text-gray-600 font-semibold">Email</th>
              <th className="text-gray-600 font-semibold">Status</th>
              <th className="text-gray-600 font-semibold">Collection Status</th>
              <th className="text-gray-600 font-semibold">Date</th>
              <th className="text-gray-600 font-semibold">Feedback</th>
              <th className="text-gray-600 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.deliveries.map((delivery, idx) => (
              <tr key={idx} className="border-b border-gray-300 text-center text-gray-500">
                <td className="p-2">{delivery.customer.name}</td>
                <td>{delivery.customer.email}</td>
                <td>{delivery.status}</td>
                <td>{delivery.collectionStatus}</td>
                <td>{delivery.date}</td>
                <td>{delivery.feedback}</td>
                <td>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(data.deliveryPerson._id,delivery.customer._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ))}
</div>


</div>

  );
};

export default DeliveryManagement;
