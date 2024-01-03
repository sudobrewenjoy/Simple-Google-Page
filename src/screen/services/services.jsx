import React from 'react';
import Navbar from '../../navBar/navbar';
import './ServiceScreen.css';

const ServiceScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-content">
          <h2 className="service-title">Our Services</h2>
          <div className="service-details">
            <p>
              At OurStore, we pride ourselves on offering top-notch services to enhance your shopping experience.
              Check out the array of services we provide:
            </p>
            <ul>
              <li>🚚 Fast and Reliable Delivery</li>
              <li>💳 Secure Payment Options</li>
              <li>📞 24/7 Customer Support</li>
              <li>🔄 Hassle-free Returns and Refunds</li>
              <li>🔍 Personalized Recommendations</li>
              <li>🎁 Exclusive Deals and Discounts</li>
              <li>🌟 Quality Product Assurance</li>
            </ul>
            <p>
              Our goal is to make your shopping experience smooth and enjoyable. With our comprehensive
              services and dedicated team, we aim to provide you with the best possible service from start to finish.
              Your satisfaction is our priority!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceScreen;
