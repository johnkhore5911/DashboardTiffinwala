import React, { useState } from 'react';

const DailyMeal = () => {
  const [meal, setMeal] = useState('');
  const [isLunchChecked, setIsLunchChecked] = useState(false);
  const [isDinnerChecked, setIsDinnerChecked] = useState(false);

  const handleMealChange = (e) => {
    setMeal(e.target.value);
  };

  const handleNotify = () => {
    alert('Meal notification sent successfully!');
    setMeal('');
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Daily Menu</h2>
        <div className="flex gap-4">
          <label className="flex items-center text-gray-600 text-sm">
            <input
              type="checkbox"
              checked={isLunchChecked}
              onChange={() => setIsLunchChecked(!isLunchChecked)}
              className="mr-2"
            />
            Add menu for Lunch
          </label>
          <label className="flex items-center text-gray-600 text-sm">
            <input
              type="checkbox"
              checked={isDinnerChecked}
              onChange={() => setIsDinnerChecked(!isDinnerChecked)}
              className="mr-2"
            />
            Add menu for Dinner
          </label>
        </div>
      </div>
      <textarea
        placeholder="Add Meal Menu"
        value={meal}
        onChange={handleMealChange}
        className="w-full h-24 p-3 border border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
      />
      <button
        onClick={handleNotify}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mb-6"
      >
        Notify User
      </button>
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Meal History</h3>
      <div className="space-y-4">
        {['Lunch', 'Dinner', 'Lunch'].map((mealType, index) => (
          <div
            className="flex justify-between items-center p-4 border border-gray-300 rounded-lg bg-white"
            key={index}
          >
            <div>
              <strong className="text-lg text-gray-800">{mealType} 11/02/2025</strong>
              <p className="text-sm text-gray-600">
                Roti type: Gehu, Jawar, Bajra &nbsp;|&nbsp; Sabji type: Pithla, Bharit, Soyabin
                &nbsp;|&nbsp; Dal Rice: Dal Tadka, Jeera rice, Masala rice
              </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded-lg">
              Repeat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyMeal;
