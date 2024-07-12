// src/components/PricingPlans.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PricingCard from './PricingCard';

const plans = [
  {
    name: 'FREE',
    price: '$0/month',
    buttonText: 'BUTTON',
    features: [
      { name: 'Single User', isAvailable: true },
      { name: '50GB Storage', isAvailable: true },
      { name: 'Unlimited Public Projects', isAvailable: true },
      { name: 'Community Access', isAvailable: true },
      { name: 'Unlimited Private Projects', isAvailable: false },
      { name: 'Dedicated Phone Support', isAvailable: false },
      { name: 'Free Subdomain', isAvailable: false },
      { name: 'Monthly Status Reports', isAvailable: false },
    ],
  },
  {
    name: 'PLUS',
    price: '$9/month',
    buttonText: 'BUTTON',
    features: [
      { name: '5 Users', isAvailable: true },
      { name: '50GB Storage', isAvailable: true },
      { name: 'Unlimited Public Projects', isAvailable: true },
      { name: 'Community Access', isAvailable: true },
      { name: 'Unlimited Private Projects', isAvailable: true },
      { name: 'Dedicated Phone Support', isAvailable: true },
      { name: 'Free Subdomain', isAvailable: true },
      { name: 'Monthly Status Reports', isAvailable: false },
    ],
  },
  {
    name: 'PRO',
    price: '$49/month',
    buttonText: 'BUTTON',
    features: [
      { name: 'Unlimited Users', isAvailable: true },
      { name: '50GB Storage', isAvailable: true },
      { name: 'Unlimited Public Projects', isAvailable: true },
      { name: 'Community Access', isAvailable: true },
      { name: 'Unlimited Private Projects', isAvailable: true },
      { name: 'Dedicated Phone Support', isAvailable: true },
      { name: 'Free Subdomain', isAvailable: true },
      { name: 'Monthly Status Reports', isAvailable: true },
    ],
  },
];

const PricingPlans = () => {
  return (
    <div className="pricing-plans">
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};


export default PricingPlans;
