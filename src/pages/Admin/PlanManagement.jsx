import React, { useState,useEffect } from "react";
import api from '../../services/api'
import axios from "axios";
const PlanManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const MealPlanModal = ({ isOpen, onClose }) => {
    const [mealPlan, setMealPlan] = useState({
      name: "",
      type:"",
      description: "",
      credits: "",
      price: "",
      validity: "",
      planType: "",
    });
  
    if (!isOpen) return null;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const token = localStorage.getItem("authToken");
  
        const response = await api.post(
          "/mealPlanRoutes/meal-plans",
          {
            ...mealPlan,
            credits: Number(mealPlan.credits),
            price: Number(mealPlan.price),
            validity: Number(mealPlan.validity),
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
  
        fetchMealPlans();
        alert("Meal Plan Created Successfully");
        onClose();
      } catch (error) {
        console.error("Error creating meal plan:", error);
        alert("Failed to create meal plan");
      }
    };
  



  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0"></div>

        {/* Modal Content */}
        <div className="relative bg-white rounded-2xl border border-gray-400 w-[700px] p-6 z-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Add New Meal Plan</h2>
            <button onClick={onClose} className="text-gray-500 text-3xl cursor-pointer">&times;</button>
          </div>


  
          <div className="space-y-4">
            <div>
              <div className="relative w-full mb-7">
                <label className="absolute -top-2 left-3 bg-white px-1 text-gray-600 text-sm">
                  Plan Type
                </label>
                <select
                  className="w-full border border-gray-400 rounded-md p-3  text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  // value={mealPlanType}
                  // value={mealPlan.name}
                  value={mealPlan.type}
                  // onChange={(e) => setMealPlanType(e.target.value)}
                  // onChange={(e) => setMealPlan({ ...mealPlan, name: e.target.value })}
                  onChange={(e) => setMealPlan({ ...mealPlan, type: e.target.value })}
                >
                  <option value="">Select preference</option>
                  <option value="QR">QR</option>
                  <option value="Tiffin System">Tiffin System</option>
                </select>
              </div>

              <div className="mb-6">
                <div className="relative w-full">
                  <label className="absolute -top-2 left-3 bg-white px-1 text-gray-600 text-sm">
                    Name:
                  </label>
                  <input
                    // type="number"
                    className="w-full border border-gray-400 rounded-md p-2 pt-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    placeholder="Enter Plan Name"
                    value={mealPlan.name}
                    onChange={(e) => setMealPlan({ ...mealPlan, name: e.target.value })}
                  />
                </div>
              </div>
          </div>
  
            <div className="relative w-full">
               <label className="absolute -top-2 left-3 bg-white px-1 text-gray-600 text-sm">
                 Description
               </label>
               <textarea
                 className="w-full border border-gray-400 rounded-md p-3 pt-6 text-gray-700 h-24 focus:outline-none focus:ring-1 focus:ring-gray-500"
                 placeholder="Enter description"
                //  value={description}
                // value={mealPlan.description}
                //  onChange={(e) => setDescription(e.target.value)}
                // onChange={(e) => setMealPlan({ ...mealPlan, description: e.target.value })}
                value={mealPlan.description}
              onChange={(e) => setMealPlan({ ...mealPlan, description: e.target.value })}
               ></textarea>
              </div>

  
            <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="relative w-full">
            <label className="absolute -top-2 left-3 bg-white px-1 text-gray-600 text-sm">
              Credits
            </label>
            <input
              type="number"
              className="w-full border border-gray-400 rounded-md p-2 pt-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Enter credits"
              // value={credits}
              // value={mealPlan.credits}
              // onChange={(e) => setCredits(e.target.value)}
              // onChange={(e) => setMealPlan({ ...mealPlan, credits: e.target.value })}
              // onChange={(e) => setMealPlan({ ...mealPlan, credits: Number(e.target.value) })}
              value={mealPlan.credits}
              onChange={(e) => setMealPlan({ ...mealPlan, credits: Number(e.target.value) })}
            />
          </div>


              <div className="relative w-full">
                <label className="absolute -top-2 left-3 bg-white px-1 text-gray-600 text-sm">
                Price
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-400 rounded-md p-2 pt-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  placeholder="Enter price"
                  // value={price}
                  // value={mealPlan.price}
                  // onChange={(e) => setPrice(e.target.value)}
                  // onChange={(e) => setMealPlan({ ...mealPlan, price: e.target.value })}
                  // onChange={(e) => setMealPlan({ ...mealPlan, price: Number(e.target.value) })}
                  value={mealPlan.price}
              onChange={(e) => setMealPlan({ ...mealPlan, price: Number(e.target.value) })}

                />
              </div>

            </div>
  
            <div className="grid grid-cols-2 gap-4 mb-8">

              <div className="relative w-full">
                <label className="absolute -top-2 left-3 bg-white px-1 text-gray-600 text-sm">
                Validity
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-400 rounded-md p-2 pt-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  placeholder="Enter validity"
                  // value={validity}
                  // value={mealPlan.validity}
                  // onChange={(e) => setValidity(e.target.value)}
                  // onChange={(e) => setMealPlan({ ...mealPlan, validity: e.target.value })}
                  // onChange={(e) => setMealPlan({ ...mealPlan, validity: Number(e.target.value) })}
                  value={mealPlan.validity}
              onChange={(e) => setMealPlan({ ...mealPlan, validity: Number(e.target.value) })}

                />
              </div>

              <div className="relative w-full">
                <label className="absolute -top-2 left-3 bg-white px-1 text-gray-600 text-sm">
                Meal Plan Type
                </label>
                <select
                  className="w-full border border-gray-400 h-13 rounded-md p-2 text-gray-700 focus:ring-gray-500"
                  // value={planType}
                  // value={mealPlan.planType}
                  // onChange={(e) => setPlanType(e.target.value)}
                  // onChange={(e) => setMealPlan({ ...mealPlan, planType: e.target.value })}
                  value={mealPlan.planType}
                  onChange={(e) => setMealPlan({ ...mealPlan, planType: e.target.value })}
                >
                  <option value="">Select meal plan</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

            </div>
  
            <div className="flex justify-end space-x-4 mt-4">
              <button onClick={onClose} className="px-4 py-2 border rounded-md text-gray-600 cursor-pointer">Cancel</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer"  onClick={(e)=>handleSubmit(e)}>Save Meal Plan</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  



  
  const [mealPlans, setMealPlans] = useState([]);

  const fetchMealPlans = async () => {
    try {
      const response = await api.get('/mealPlanRoutes/meal-plans');

      console.log("Meal plans:", response.data.data);
      // Update state with fetched meal plans
      if (response.data.success) {
        setMealPlans(response.data.data);
      } else {
        setMealPlans([]);
      }
    } catch (error) {
      console.error("Error fetching meal plans:", error);
      setMealPlans([]);
    }
  };
  useEffect(() => {
    fetchMealPlans();
  }, []);




  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/mealPlanRoutes/meal-plans/${id}`);
      console.log("Delete meal plan response:", response.data);
      if (response.data.success) {
        fetchMealPlans();
        alert('Meal Plan Deleted Successfully');
      } else {
        alert('Failed to delete meal plan');
      }
    } catch (error) {
      console.error("Error deleting meal plan:", error);
      alert('Failed to delete meal plan');
    }
  };

  return (
    <div className="min-h-[calc(100vh-70px)] bg-white p-6">
      <div className="min-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-600 mb-8">
        Plan & Credit Management
      </h1>


        {/* Add New Meal Plan Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-10 py-2 bg-[#3F62FF] text-white font-medium rounded-md hover:bg-blue-600 mb-8 cursor-pointer"
        >
          Add New Meal Plan
        </button>

        {/* Existing Plans Section */}
        <h2 className="text-xl font-semibold  text-gray-600  mb-4">
          Existing Plans
        </h2>
        <div className="space-y-4">
          {mealPlans.map((plan, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#F8F8F8] border border-[#CDCDCD] p-4 rounded-lg"
            >
              <div className="text-lg text-gray-600 font-bold w-[150px]">
                  {plan.name} ({plan.type})
              </div>

              <div className="w-[800px]">
              <div className="text-2xl font-semibold text-gray-600">{plan.price}/-</div>
              <div className="text-sm text-gray-600">{plan.description}</div>
              <div className="text-sm text-gray-600"> Credits: {plan.credits} | Validity: {plan.validity} | Type: {plan.planType} </div>
              </div>
              <button className="px-4 py-2 text-red-500 border border-red-500 rounded-md hover:bg-red-100 cursor-pointer" onClick={() => handleDelete(plan._id)}>
                Delete Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <MealPlanModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}

    </div>
  );
};

export default PlanManagement;
