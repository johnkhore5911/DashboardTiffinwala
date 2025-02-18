import React, { useState,useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import totalUser from '../../assets/totaluser.png'
import planUser from '../../assets/planuser.png'
import silveruser from '../../assets/silveruser.png'
import platinum from '../../assets/platinum.png'
import api from '../../services/api';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

const Card = ({ children, className }) => (
  <div className={`shadow-lg rounded-lg p-6 ${className} transition-transform duration-300 transform hover:translate-y-[-10px] cursor-pointer`}>
    {children}
  </div>
);

const CardNormal = ({ children, className }) => (
  <div className={`shadow-lg rounded-lg p-6 ${className} cursor-pointer`}>
    {children}
  </div>
);

const Button = ({ children, className, disabled }) => (
  <button
    className={`px-4 py-1 font-semibold rounded-lg transition-colors ${disabled ? "bg-blue-100 text-gray-600 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"} ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

const images = [totalUser, planUser, silveruser, platinum];
const lowerStatsImages = [planUser, silveruser, platinum];
const lowerStatsColor = ["bg-red-100", "bg-blue-100","bg-green-100"];
const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState("July");
  
  const mealData = [
    { week: "1 Week", dineIn: 30, tiffin: 10 },
    { week: "2 Week", dineIn: 60, tiffin: 50 },
    { week: "3 Week", dineIn: 40, tiffin: 60 },
    { week: "4 Week", dineIn: 50, tiffin: 70 },
    { week: "5 Week", dineIn: 70, tiffin: 50 },
  ];

  const [data, setData] = useState([]);
  const [deliveryPartners, setDeliveryPartners] = useState([]);
  const [upperStats, setUpperStats] = useState([{
    "title": "Loading...",
    "value": 0
}]);
  const [lowerStats, setLowerStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/userRoutes/DashboardController");
        console.log("Data fetched:", response.data);
        setData(response.data);
        setDeliveryPartners(response.data.DeliveryPartners);

        setUpperStats([{ title: "Total Customers", value: response.data.totalCustomer }]);
        const lowerStatsArray = Object.entries(response.data.lowerStats).map(([key, value], index) => ({
          title: key,
          value: value.totalCustomers,
          color: lowerStatsColor[index % lowerStatsColor.length] // Assign color from predefined array
        }));
        setLowerStats(lowerStatsArray);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const notifyUser = async (fcmtoken) => {
    console.log("fcmtoken",fcmtoken)
    try {
      const response = await axios.post(
        'https://tiffin-wala-backend.vercel.app/send-notification-to-user',
        { message:"Meal Plan Credit running Low, Kindly renew you Plan!",fcmToken:fcmtoken },
      );
      alert('Notification sent successfully!');
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  console.log("Upper Stats: ",upperStats);
  console.log("Lower Stats: ",lowerStats);


  return (
    <div className="p-6 space-y-6 bg-white-100">

    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 whitespace-nowrap flex-wrap pt-3 pb-2">
        {upperStats.map((stat, index) => (
          <Card key={index} className={`p-4 rounded-xl bg-blue-100 min-w-[350px]`}>
            <img src={images[index % images.length]} alt={stat.title} />
            <h3 className="text-lg font-semibold">{stat.title}</h3>
            <p className="text-3xl font-bold">{stat.value}</p>
            <span className="text-sm">12% Than last month</span>
          </Card>
        ))}

        {lowerStats.map((stat, index) => (
          <Card key={index} className={`p-4 rounded-xl ${lowerStatsColor[index % lowerStats.length]} || "bg-gray-100"} min-w-[350px]`}>
            <img src={lowerStatsImages[index % lowerStats.length]} alt={stat.title} />
            <h3 className="text-lg font-semibold">{stat.title}</h3>
            <p className="text-3xl font-bold">{stat.value}</p>
            <span className="text-sm">12% Than last month</span>
          </Card>
        ))}
      </div>
    </div>

      <div className="grid grid-cols-3 gap-6">
        <CardNormal className="col-span-2 p-4 border-[1px] border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Total Meal Users</h3>
            <select
              className="border px-3 py-1 rounded-md shadow-sm border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option className="text-gray-500">July</option>
              <option className="text-gray-500">August</option>
              <option className="text-gray-500">September</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mealData} barGap={6}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
              <XAxis dataKey="week" tick={{ fill: "#555" }} />
              <YAxis tick={{ fill: "#555" }} domain={[0, 100]} />
              <Tooltip />
              <Legend
                align="left"
                verticalAlign="top"
                wrapperStyle={{ marginBottom: '20px' }} 
                itemStyle={{ marginBottom: '10px' }} 
                itemGap={10} 
              />
              <Bar
                dataKey="dineIn"
                fill="#e74c3c"
                radius={[5, 5, 0, 0]}
                barSize={20}
              />
              <Bar
                dataKey="tiffin"
                fill="#3498db"
                radius={[5, 5, 0, 0]}
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>


        </CardNormal>

        <CardNormal className="p-4 border-[1px] border-gray-300 bg-[#F9F9F9] h-102 overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <h3 className="text-xl font-semibold mb-4">Delivery Partner Data</h3>
        {deliveryPartners.map((partner, index) => (
          <div key={index} className="flex justify-between items-center p-2 bg-white rounded-md mb-2">
            <div>
              <p className="font-semibold">{partner.name}</p>
              <p className="text-sm text-gray-500">{partner.address}</p>
            </div>
            <Button className={partner.status === "Available" ? "bg-gray-300" : "bg-blue-500"}>
              Available
            </Button>
          </div>
        ))}
      </CardNormal>
      </div>

      <div className="flex-grow bg-[#F9F9F9] border rounded-md border-gray-300 p-5">
      <h3 className="text-lg font-semibold text-gray-700">Plan Purchased Users</h3>
        <table className="w-full mt-2 border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
            <th className="p-2 text-gray-600 font-semibold">Sr</th>
              <th className="p-2 text-gray-600 font-semibold">Customer Name</th>
              <th className="text-gray-600 font-semibold">Contact</th>
              <th className="text-gray-600 font-semibold">Plan</th>
              <th className="text-gray-600 font-semibold">Date</th>
              <th className="text-gray-600 font-semibold">Expiry</th>
              <th className="text-gray-600 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
          {data.PlanPurchasedUser && data.PlanPurchasedUser.length > 0 ? (
            data.PlanPurchasedUser.map((user, index) => (
              <tr key={index} className="border-b border-gray-300 text-center text-gray-500">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{user.name}</td>
                <td>{user.contact}</td>
                <td>{user.Plan}</td>
                <td>{user.Date}</td>
                <td>{user.Expiry}</td>
                <td>
                  <button className="bg-blue-500 px-4 cursor-pointer text-white py-1 rounded-md" onClick={()=>notifyUser(user.fcmtoken)}>
                  Notify
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No users found.</td>
            </tr>
          )}

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;
