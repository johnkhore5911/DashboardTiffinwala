import { useState } from "react";
import arrow from '../../assets/chevron_forward.png';
import { Button,Chip } from '@mui/material';
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

const customer = [
  "John (Sector 16 D, Chandigarh)",
  "Lakhan (Zirapur)",
];
const deliveryPerson = [
  "Aakarsh (Sector 25)",
];


const DeliveryData= [
  {
      "deliveryPerson": {
          "_id": "679f2a266ce4c300e99727ac",
          "name": "Aakarsh Prasad",
          "email": "aakarsh@gmail.com"
      },
      "deliveries": [
          {
              "customer": {
                  "_id": "679f2a586ce4c300e99727b4",
                  "name": "John Khore",
                  "email": "johnny@gmail.com"
              },
              "status": "Delivered",
              "collectionStatus": "Collected",
              "date": "16:23",
              "feedback": "No Feedback"
          },
          {
              "customer": {
                  "_id": "679f2a586ce4c300e99727b4",
                  "name": "John Khore",
                  "email": "johnny@gmail.com"
              },
              "status": "Missed",
              "collectionStatus": "Not Collected",
              "date": "14:42",
              "feedback": "No Feedback"
          },
          {
            "customer": {
                "_id": "679f2a586ce4c300e99727b4",
                "name": "John Khore",
                "email": "johnny@gmail.com"
            },
            "status": "Missed",
            "collectionStatus": "Not Collected",
            "date": "14:42",
            "feedback": "No Feedback"
        },
      ]
  },
  {
    "deliveryPerson": {
        "_id": "679f2a266ce4c300e99727ac",
        "name": "Lakhan Vashney",
        "email": "lakhanVashney@gmail.com"
    },
    "deliveries": [
        {
            "customer": {
                "_id": "679f2a586ce4c300e99727b4",
                "name": "John Khore",
                "email": "johnny@gmail.com"
            },
            "status": "Delivered",
            "collectionStatus": "Collected",
            "date": "16:23",
            "feedback": "No Feedback"
        },
    ]
}
]

const DeliveryManagement = () => {
  const [selectedQR, setSelectedQR] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(15);
  const [selectedTime, setSelectedTime] = useState("");
  const [tempSelectedCustomers,setTempSelectedCustomers] = useState([]);
  const [selectedDeliveryUser, setSelectedDeliveryUser] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('');



  const handleAddCustomer = ()=>{
    console.log("selectedCustomer: ",selectedCustomer);
    console.log("selectedDeliveryUser: ",selectedDeliveryUser);
    console.log("selectedTime: ",selectedTime);
    const randomId = uuidv4();
    console.log(randomId);

    if (selectedCustomer && selectedDeliveryUser) {
      setTempSelectedCustomers((prev) => [
        ...prev,
        {
          uniqueId:randomId,
          customerId: selectedCustomer,
          customerName: selectedCustomer,
          // customerFcmtoken: customer.fcmToken,
          deliveryPersonId: selectedDeliveryUser,
          deliveryName: selectedDeliveryUser,
          // deliveryFcmtoken: deliveryUser.fcmToken, // Include delivery FCM token
          status: 'Pending',
          date: selectedTime,
        },
      ]);
      // setSelectedCustomer('');
      // setSelectedTime('');
    } else {
      alert('Please select a valid customer and delivery user.');
    }
  }
  const handleRemoveCustomer = (customerId) => {
    setTempSelectedCustomers((prev) =>
      prev.filter((c) => c.uniqueId !== customerId)
    );
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
            {customer.map((option) => (
              <option key={option} value={option}>
                {option}
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
            {deliveryPerson.map((option) => (
              <option key={option} value={option}>
                {option}
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
                <button className="px-12 py-2 bg-blue-600 text-white rounded-lg ml-12 cursor-pointer hover:bg-blue-700 font-semibold">
                  Assign Deliveries
                </button>
              </div>

          </div>
        }
      </div>

{/* Table wrapper with flex-grow to take available space */}
<div className="flex-grow overflow-auto max-h-[560px] hide-scrollbar">
  {DeliveryData.map((data, index) => (
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
                    onClick={() => handleDelete(delivery.customer._id)}
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
