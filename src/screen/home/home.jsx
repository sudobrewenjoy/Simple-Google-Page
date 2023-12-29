import React from 'react';
import Navbar from '../../navBar/navbar';
import Card from './cards';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  };

  const leftColumnStyle = {
    flex: '30%',
    backgroundColor: 'white',
    padding: '20px',
  };

  const rightColumnStyle = {
    flex: '70%',
    backgroundColor: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
  };

  const checkboxStyle = {
    marginRight: '8px',
  };

  const cardContents = [
    // Your card data here...
    {
      backgroundColor: '#E3F7F4',
      image: 'path_to_image_1.jpg',
      productName: 'Product 1',
      price: '$99.99',
      ratings: '4.5',
    },
    // ... other card data
  ];

  const cardStyle = {
    position: 'relative',
    width: '299px',
    height: '239px',
    backgroundColor: 'lightblue',
    margin: '8px', // Gap between cards
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const detailsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: '-8px',
    marginRight: '-8px',
  };

  const detailsStyle = {
    width: '33.33%',
    padding: '8px',
    boxSizing: 'border-box',
  };

  const productNameStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const priceStyle = {
    fontSize: '16px',
    marginBottom: '8px',
  };

  const ratingsStyle = {
    fontSize: '14px',
    color: 'gray',
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
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginLeft: '-16px' }}>
            {cardContents.map((content, index) => (
              <div key={index} style={{ ...cardStyle, marginLeft: '16px' }}>
                <Card content={content} />
              </div>
            ))}
          </div>
          <div style={detailsContainerStyle}>
            {cardContents.map((content, index) => (
              <div key={index} style={detailsStyle}>
                <div style={productNameStyle}>{content.productName}</div>
                <div style={priceStyle}>{content.price}</div>
                <div style={ratingsStyle}>Rating: {content.ratings}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
