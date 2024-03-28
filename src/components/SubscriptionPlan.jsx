// SubscriptionPlan.js
import React from 'react';

const SubscriptionPlan = ({ name, price, features }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="">
        <div className="md:flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 bg-blue text-white rounded-md">
            SMA
          </div>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
          <div className="mt-2">
            <div className="text-3xl font-bold">₹{price}</div>
            <div className="text-gray-500">/ month</div>
          </div>
          <div className="mt-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3 text-sm text-gray-700">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
