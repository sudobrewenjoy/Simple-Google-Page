import React from 'react';
import Navbar from '../../navBar/navbar';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh', 
  };

  const leftColumnStyle = {
    flex: '20%',
    backgroundColor: 'white',
    padding: '20px',
  };

  const rightColumnStyle = {
    flex: '80%',
    backgroundColor: 'white',
    padding: '20px',
  };

  const checkboxStyle = {
    marginRight: '8px',
  };

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
      
        <div style={leftColumnStyle}>
          <div>
            <input type="checkbox" style={checkboxStyle} />
            <label htmlFor="phones">Phones</label>
          </div>
          <div>
            <input type="checkbox" style={checkboxStyle} />
            <label htmlFor="headphones">Headphones</label>
          </div>
          <div>
            <input type="checkbox" style={checkboxStyle} />
            <label htmlFor="accessories">Accessories</label>
          </div>
        </div>
        <div style={rightColumnStyle}>
          {/* Content for the right column */}
          Right Column (80%)
        </div>
      </div>
    </div>
  );
};

export default Home;
