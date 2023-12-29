import React from 'react';
import Navbar from '../../navBar/navbar';

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

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: '20px',
    gap: '16px',
  };

  const cardStyle = {
    width: '299px',
    height: '239px',
   
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    padding: '16px',
    backgroundColor: '#f9f9f9',
    marginBottom: '65px',
    boxSizing: 'border-box',
  };

  const renderStars = (rating) => {
    const starsTotal = 5;
    const filledStars = Math.floor(rating);
    const starArray = [];

    for (let i = 0; i < starsTotal; i++) {
      if (i < filledStars) {
        starArray.push(<span key={i} style={{ color: '#FFB703', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: '600' }}>&#9733;</span>);
      } else {
        starArray.push(<span key={i} style={{ color: '##FFB703', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: '600' }}>&#9734;</span>);
      }
    }
    return starArray;
  };

  const cards = [
    {
      productName: 'Nothing',
      price: '$999',
      ratings: '4.5',
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mi.com%2Fin%2Fphone%2F&psig=AOvVaw1x9b5JUDe_pnpm startKw5LWmP7r0B&ust=1703945690200000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJD3hsDqtIMDFQAAAAAdAAAAABAK', // Replace with actual image URL
      color:'#E3F7F4'
    },
    {
      productName: 'OPPO',
      price: '$149',
      ratings: '4.8',
      imageUrl: 'https://via.placeholder.com/300x240.png', // Replace with actual image URL
      color:'#EBF5F3'
    },
    {
      productName: 'Redmi ',
      price: '$149',
      ratings: '4.8',
      imageUrl: 'https://via.placeholder.com/300x240.png', // Replace with actual image URL
      color: '#F7F7ED'
    },
    {
      productName: 'Vivo X90',
      price: '$149',
      ratings: '4.8',
      imageUrl: 'https://via.placeholder.com/300x240.png', // Replace with actual image URL
      color: '#F7F7ED'
    },
    {
      productName: 'Realme',
      price: '$149',
      ratings: '4.8',
      imageUrl: 'https://via.placeholder.com/300x240.png', // Replace with actual image URL
      color: '#F7F7ED'
    },
    {
      productName: 'Oneplus 11R',
      price: '$149',
      ratings: '4.8',
      imageUrl: 'https://via.placeholder.com/300x240.png', // Replace with actual image URL
      color: '#F7F7ED'
    },
    {
      productName: 'Pixel 8A',
      price: '$149',
      ratings: '4.8',
      imageUrl: 'https://via.placeholder.com/300x240.png', // Replace with actual image URL
      color: '#F7F7ED'
    },
    {
      productName: 'samsung S23',
      price: '$149',
      ratings: '4.8',
      imageUrl: 'https://via.placeholder.com/300x240.png', // Replace with actual image URL
      color: '#F7F7ED'
    },
    {
      productName: 'Iphone 15 Pro',
      price: '$149',
      ratings: '4.8',
      imageUrl: 'https://via.placeholder.com/300x240.png', // Replace with actual image URL
      color: '#F7F7ED'
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <div style={leftColumnStyle}>
          <div>
            <input type="checkbox" id="phones" style={checkboxStyle} />
            <label htmlFor="phones">Phones</label>
          </div>
          <div>
            <input type="checkbox" id="headphones" style={checkboxStyle} />
            <label htmlFor="headphones">Headphones</label>
          </div>
          <div>
            <input type="checkbox" id="accessories" style={checkboxStyle} />
            <label htmlFor="accessories">Accessories</label>
          </div>
        </div>
        <div style={rightColumnStyle}>
          <div style={cardContainerStyle}>
            {cards.map((card, index) => (
              <div key={index} style={{ ...cardStyle, display: 'flex', flexDirection: 'column', backgroundColor: card.color }}>
                <img
                  src={card.imageUrl}
                  alt={card.productName}
                  style={{ width: '125px', height: '157px', objectFit: 'cover', marginLeft: '93px', marginRight: '81px' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '130px' }}>
                  <div style={{ flex: '1', marginLeft: '5px', top: '366px', left: '377px', width: '60px', height: '22px', textAlign: 'left', font: 'normal normal 600 18px/22px Montserrat', letterSpacing: '0px', color: '#023047', opacity: '1' }}>
                    <h3>{card.productName}</h3>
                    <div style={{ top: '396px', left: '377px', width: '147px', height: '15px', textAlign: 'left', font: 'normal normal normal 12px/15px Montserrat', letterSpacing: '0px', color: '#B3C1C8', opacity: '1' }}>
                      Your text field here
                    </div>
                  </div>
                  <div style={{ top: '366px', left: '626px', width: '50px', height: '22px', textAlign: 'right', font: 'normal normal medium 18px/22px Montserrat', letterSpacing: '0px', color: '#023047', opacity: '1' }}>
                    <p>{card.price}</p>
                  </div>
                  <div style={{ top: '396px', left: '598px', width: '78px', height: '15px', opacity: '1' }}>
                    {renderStars(parseFloat(card.ratings))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
