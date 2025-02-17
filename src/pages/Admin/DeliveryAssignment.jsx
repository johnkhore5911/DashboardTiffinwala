import React, { useState } from 'react';

const DeliveryAssignment = () => {
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedTime, setSelectedTime] = useState('');  
  const [customerDetails, setCustomerDetails] = useState({
    name: 'Aakarsh',
    contact: '+91 7602430642',
    location: 'sector 25, Chandigarh',
  });

  const handleAdd = () => {
    alert(`Customer added at ${selectedTime || 'default time'}!`);
  };

  const handleAssignDeliveries = () => {
    alert(`Deliveries assigned to ${customerDetails.name} at ${selectedTime || 'default time'}.`);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Delivery Assignment</h2>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Generate QR Code</h3>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <select
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setSelectedCustomer(e.target.value)}
          >
            <option>Select Customer</option>
            <option value="Customer 1">Customer 1</option>
            <option value="Customer 2">Customer 2</option>
          </select>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option>Time</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mb-6"
        >
          Add
        </button>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Selected Customer</h3>
        <div className="p-4 bg-gray-100 rounded-lg border border-gray-300 mb-4">
          <p className="text-sm text-gray-800"><strong>Name:</strong> {customerDetails.name}</p>
          <p className="text-sm text-gray-800"><strong>Contact details:</strong> {customerDetails.contact}</p>
          <p className="text-sm text-gray-800"><strong>Location:</strong> {customerDetails.location}</p>
        </div>
        <button
          onClick={handleAssignDeliveries}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
        >
          Assign Deliveries
        </button>
      </div>
    </div>
  );
};

export default DeliveryAssignment;
