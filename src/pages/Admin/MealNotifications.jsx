import React,{useState} from "react";
import bellIcon from '../../assets/notifications_unread.png'
import axios from "axios";
import api from '../../services/api';
const DailyMenu = () => {
  const mealHistory = [
    // {
    //   mealType: "Lunch",
    //   date: "11/02/2025",
    //   rotiType: "Gehu, Jawar, Bajra",
    //   sabjiType: "Pithla, Bharit, Soyabin, Methi",
    //   dalRice: "Dal Tadka, Jeera rice, Masala rice",
    // },
    // {
    //   mealType: "Lunch",
    //   date: "11/02/2025",
    //   rotiType: "Gehu, Jawar, Bajra",
    //   sabjiType: "Pithla, Bharit, Soyabin, Methi",
    //   dalRice: "Dal Tadka, Jeera rice, Masala rice",
    // },
    // {
    //   mealType: "Dinner",
    //   date: "11/02/2025",
    //   rotiType: "Gehu, Jawar, Bajra",
    //   sabjiType: "Pithla, Bharit, Soyabin, Methi",
    //   dalRice: "Dal Tadka, Jeera rice, Masala rice",
    // },
  ];
  const [message, setMessage] = useState("");

  const sendNotiication = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("No authentication token found! Login again!");
        return;
      }
      console.log("")

      const response = await api.post(
        'https://tiffin-wala-backend.vercel.app/send-meal-notification',
        { message },
      );
      alert('Notification sent successfully!');

    } catch (error) {
      console.error('Error sending notification:', error);
      setNotificationStatus('Failed to send notification. Please try again.');
      alert('Error Sending Notification!');
    }
  };

  return (
    <div className="min-h-[calc(100vh-70px)] bg-white pl-4">
      <div className="min-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-600 mb-4 mt-8 ">Daily Menu</h1>

        {/* Menu Form */}
        <div className="rounded-l">
          <div className="flex items-center space-x-6 mb-4">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <span className="ml-2">Add menu for Lunch</span>
            </label>
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <span className="ml-2">Add menu for Dinner</span>
            </label>
          </div>
          <div className="relative w-full mt-8">
            <label className="absolute -top-2 left-3 bg-white px-1 text-gray-600 text-sm">
              Notify Meal
            </label>
            <textarea
              placeholder="Add Meal Menu"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-36 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none p-3 pt-6 text-gray-700"
            ></textarea>
          </div>
          <button className="px-12 mt-3 py-2 bg-blue-600 text-white rounded-md cursor-pointer" onClick={(e)=>sendNotiication(e)} >Notify User</button>
        </div>

        {/* Meal History */}
        {
          mealHistory.length ?
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Meal History
        </h2> : (
          <></>
        )
        }
        {/* <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Meal History
        </h2> */}

        {/* <div className="space-y-4">
          {mealHistory.map((plan, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#F8F8F8] border border-[#CDCDCD] p-4 rounded-lg"
            >
              <div className="text-lg text-gray-600 font-bold w-[40px]">
                  {plan.mealType}
              </div>

              <div className="w-[800px]">
              <div className="text-sm text-gray-600">{plan.date}</div>
              <div className="text-sm text-gray-600"> <span className="font-medium">Roti type:</span>: {plan.rotiType} | <span className="font-medium">Sabji type:</span>: {plan.sabjiType} | <span className="font-medium">Dal Rice:</span>: {plan.dalRice} </div>
              </div>
              <button className="px-4 py-2 text-red-500 border border-red-500 rounded-md hover:bg-red-100 cursor-pointer">
                Delete Plan
              </button>
            </div>
          ))}
        </div> */}
        <div className="space-y-4">
          {mealHistory.map((plan, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#F8F8F8] border border-[#CDCDCD] p-4 rounded-lg"
            >
              <div>
                <div className="text-lg text-gray-600 font-bold w-[40px] flex items-baseline gap-2">
                    <div>{plan.mealType}</div> <div className="text-sm text-gray-600 font-semibold">{plan.date}</div>
                </div>

                {/* <div className="w-[800px]"> */}
                <div className="text-sm text-gray-600"> <span className="font-medium">Roti type:</span> {plan.rotiType} | <span className="font-medium">Sabji type:</span> {plan.sabjiType} | <span className="font-medium">Dal Rice:</span> {plan.dalRice} </div>
                {/* </div> */}
              </div>

              <button className="px-4 py-2 text-red-500 border border-red-500 rounded-md hover:bg-red-100 cursor-pointer">
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DailyMenu;
