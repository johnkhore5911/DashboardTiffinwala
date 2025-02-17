import React from 'react';

const PlanCreditManagement = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Plan & Credit Management</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
          Add New Meal Plan
        </button>
      </div>

      {/* Current Plans Section */}
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Current Plans</h3>
      <div className="space-y-4">
        <PlanCard
          planName="Gold Plan"
          price="3200/-"
          description="Plan includes 30 days of lunch and dinner meal"
          buttonLabel="Delete Plan"
        />
      </div>

      {/* Existing Plans Section */}
      <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">Existing Plans</h3>
      <div className="space-y-4">
        <PlanCard
          planName="Gold Plan"
          price="3200/-"
          description="Plan includes 30 days of lunch and dinner meal"
          buttonLabel="Renew Plan"
        />
        <PlanCard
          planName="Platinum Plan"
          price="1200/-"
          description="Plan includes 30 days of lunch."
          buttonLabel="Renew Plan"
        />
      </div>
    </div>
  );
};

const PlanCard = ({ planName, price, description, buttonLabel }) => {
  return (
    <div className="flex justify-between items-center p-4 border border-gray-300 rounded-lg bg-white">
      <div>
        <strong className="text-lg text-gray-800">{planName}</strong>
        <p className="text-xl font-bold text-gray-900">{price}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded-lg">
        {buttonLabel}
      </button>
    </div>
  );
};

export default PlanCreditManagement;
