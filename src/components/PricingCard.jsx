// src/components/PricingCard.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import './PricingCard.css';

const PricingCard = ({plan}) => {
    return (
        <div className="card">
            <h5>{plan.name}</h5>
            <h1>{plan.price}</h1>
            <ul>
                {plan.features.map((feature,index) => (
                    <li key={index} className= {feature.isAvailable ? 'available' : 'unavailable'}>
                        {feature.isAvailable ? '✔️' : '❌'} {feature.name}
                    </li> 
                ))}
            </ul>
            <button>{plan.buttonText}</button>
        </div>
    );
};

PricingCard.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        isAvailable: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default PricingCard;
