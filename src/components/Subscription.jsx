// SubscriptionPage.js
import React from 'react';
import SubscriptionPlan from '../components/SubscriptionPlan';

const About = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: 99.99,
      features: ['Real-time stock data', 'Basic technical analysis', 'Limited historical data access']
    },
    {
      name: 'Standard Plan',
      price: 149.99,
      features: ['Real-time stock data', 'Advanced technical analysis', 'Full historical data access', 'Customizable alerts']
    },
    {
      name: 'Premium Plan',
      price: 199.99,
      features: ['Real-time stock data', 'All premium features', 'API access', 'Dedicated support', 'Custom solutions']
    }
  ];

  return (
    <div className="bg-gray-100 py-8">
    <div className="container mx-auto relative">
      <div className="absolute inset-0 bg-gray-800 opacity-25 blur-lg"></div>
      <div className="px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl text-center font-semibold mb-8">Choose a Subscription Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <SubscriptionPlan key={index} name={plan.name} price={plan.price} features={plan.features} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue hover:bg-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  


  );
};

export default About;
