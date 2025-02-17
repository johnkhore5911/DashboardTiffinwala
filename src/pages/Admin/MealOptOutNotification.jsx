import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const MealOptOutNotification = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedItems, setSelectedItems] = useState([]);

  const data = [
    { name: "Aakarsh", email: "aakarshpsd12@example.com", contact: "7602430642", date: "Jul 20, 2024" },
    { name: "John", email: "johnny@example.com", contact: "6685745258", date: "Jul 20, 2024" },
    { name: "Rohit", email: "rohit1233@example.com", contact: "9955685741", date: "Jul 20, 2024" },
    { name: "Aakarsh", email: "aakarshpsd12@example.com", contact: "7602430642", date: "Jul 20, 2024" },
    { name: "John", email: "johnny@example.com", contact: "8261459734", date: "Jul 20, 2024" },
    { name: "Aakarsh", email: "aakarshpsd12@example.com", contact: "7602430642", date: "Jul 20, 2024" },
    { name: "John", email: "johnny@example.com", contact: "9932614789", date: "Jul 20, 2024" },
    { name: "Aakarsh", email: "aakarshpsd12@example.com", contact: "7602430642", date: "Jul 20, 2024" },
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCheckboxChange = (index) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  const displayedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Meal Opt-Out Notification</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Type to search"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <FiSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
          <BsBell className="text-xl text-gray-500" />
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-2xl text-gray-500" />
            <span className="text-sm">Admin Name</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedItems(displayedData.map((_, index) => index));
                    } else {
                      setSelectedItems([]);
                    }
                  }}
                  checked={selectedItems.length === displayedData.length}
                />
              </th>
              <th className="py-2 px-4 border-b">Customer Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Contact</th>
              <th className="py-2 px-4 border-b">Date and Time</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.email}</td>
                <td className="py-2 px-4 border-b">{item.contact}</td>
                <td className="py-2 px-4 border-b">{item.date}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-blue-500 hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-sm">Results per page: 10</span>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border rounded-md ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealOptOutNotification;
