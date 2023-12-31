import { useState } from 'react';
import './home.css';
import NavbarNew from '../../navBar/nav-bar'


const ProductHome = () => {
 
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
        starArray.push(<span key={i} style={{ color: '#FFB703', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: '600' }}>&#9734;</span>);
      }
    }
    return starArray;
  };

  const cards = [
    {
      productName: 'Nothing',
      price: '$999',
      ratings: '4.5',
      imageUrl: 'https://via.placeholder.com/300x240.png',
      color:'#E3F7F4'
    },
    {
      productName: 'OPPO',
      price: '$179',
      ratings: '4.8',
      imageUrl: 'https://via.placeholder.com/300x240.png', // Replace with actual image URL
      color:'#EBF5F3'
    },
    {
      productName: 'Redmi ',
      price: '$199',
      ratings: '4.8',
      imageUrl: 'https://via.placeholder.com/300x240.png', // Replace with actual image URL
      color: '#F7F7ED'
    },
    {
      productName: 'Vivo X90',
      price: '$299',
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
      price: '$159',
      ratings: '4.8',
      imageUrl: 'https://via.placeholder.com/300x240.png', // Replace with actual image URL
      color: '#F7F7ED'
    },
    {
      productName: 'Pixel 8A',
      price: '$649',
      ratings: '4.8',
      imageUrl: 'https://via.placeholder.com/300x240.png', // Replace with actual image URL
      color: '#F7F7ED'
    },
    {
      productName: 'samsung S23',
      price: '$749',
      ratings: '4.8',
      imageUrl: 'https://via.placeholder.com/300x240.png', // Replace with actual image URL
      color: '#F7F7ED'
    },
    {
      productName: 'Iphone 15 Pro',
      price: '$849',
      ratings: '4.8',
      imageUrl: 'https://via.placeholder.com/300x240.png', // Replace with actual image URL
      color: '#F7F7ED'
    },
  ];
  const openPaymentWindow = (productName, price,imageUrl) => {
    const width = 894;
    const height = 542;
    const marginLeft = 50;
    const marginRight = 50;
  
    const leftPosition = window.screen.width / 2 - (width + marginLeft + marginRight) / 2 + 245;
    const rightPosition = window.screen.width - leftPosition - width;
  
    const topPosition = window.screen.height / 2 - height / 2 + 113;
  
    const paymentUrl = `/payment?productName=${productName}&price=${price}&imageUrl=${imageUrl}`;
  
    window.open(
      paymentUrl,
      '_blank',
      `width=${width + marginLeft + marginRight},height=${height},left=${leftPosition},right=${rightPosition},top=${topPosition}`
    );
  };


  const openProductWindow = (productName, price, imageUrl, rating) => {
    const width = 896;
    const height = 684;
  
    const leftPosition = window.screen.width / 2 - width / 2;
    const topPosition = window.screen.height / 2 - height / 2;
  
    const productUrl = `/productwindow?productName=${encodeURIComponent(productName)}&price=${encodeURIComponent(price)}&rating=${encodeURIComponent(rating)}`;
  
    window.open(
      productUrl,
      '_blank',
      `width=${width},height=${height},left=${leftPosition},top=${topPosition}`
    );
  };
    
  
  

  const [showBuyNow, setShowBuyNow] = useState(Array(cards.length).fill(false));
  return (
    <div>
      <NavbarNew />
      <div style={containerStyle}>
        <div style={leftColumnStyle}>
          <div style={{marginLeft:'62px'}}>
            <input type="checkbox" id="phones" style={checkboxStyle} />
            <label htmlFor="phones">Phones</label>
          </div>
          <div style={{marginLeft:'62px'}}>
            <input type="checkbox" id="headphones" style={checkboxStyle} />
            <label htmlFor="headphones">Headphones</label>
          </div>
          <div style={{marginLeft:'62px'}}>
            <input type="checkbox" id="accessories" style={checkboxStyle} />
            <label htmlFor="accessories">Accessories</label>
          </div>
        </div>
        <div style={rightColumnStyle}>
          <div style={cardContainerStyle}>
            {cards.map((card, index) => (
              <div
                key={index}
                style={{
                  ...cardStyle,
                  backgroundColor: card.color,
                  position: 'relative',
                }}
                onMouseEnter={() => {
                  const newShowBuyNow = [...showBuyNow];
                  newShowBuyNow[index] = true;
                  setShowBuyNow(newShowBuyNow);
                }}
                onMouseLeave={() => {
                  const newShowBuyNow = [...showBuyNow];
                  newShowBuyNow[index] = false;
                  setShowBuyNow(newShowBuyNow);
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    src={card.imageUrl}
                    alt={card.productName}
                    style={{
                      width: '125px',
                      height: '157px',
                      objectFit: 'cover',
                      marginBottom: '10px',
                      marginTop: '41px',
                    }}
                  />
                  <br></br>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', width: '100%' }}>
                  <div style={{ flex: '1', textAlign: 'left', position: 'relative' }}>
                  <h3 style={{ fontSize: '18px', fontFamily: 'Montserrat', fontWeight: '600', color: '#023047' }}>
                    {card.productName}
                  </h3>
                  <div style={{ fontSize: '12px', fontFamily: 'Montserrat', color: '#B3C1C8', pointerEvents: 'none' }}>
                    <span>Smart,Powerful</span>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        openProductWindow(card.productName, card.price, card.imageUrl, card.ratings);
                      }}
                    
                      style={{
                        
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        zIndex: '1',
                        pointerEvents: 'auto',
                        backgroundColor: '#fff',
                        padding: '4px',
                        borderRadius: '4px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        display: showBuyNow[index] ? 'block' : 'none',
                      }}
                    >
                      View Product
                    </a>
                  </div>
                </div>

                    <div style={{ marginBottom: '5px' }}>
                      <p
                        style={{
                          fontSize: '18px',
                          fontFamily: 'Montserrat',
                          fontWeight: '500',
                          color: '#023047',
                          marginBottom: '0',
                          marginLeft: '5px',
                        }}
                      >
                        {card.price}
                      </p>
                      <div style={{ marginTop: '-10px', marginLeft: '15px' }}>
                        {renderStars(parseFloat(card.ratings))}
                      </div>
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '5px', // Adjusted bottom value
                          right: '10px',
                          backgroundColor: '#219EBC',
                          padding: '4px 16px',
                          borderRadius: '4px',
                          display: showBuyNow[index] ? 'block' : 'none',
                          zIndex: '1',
                          cursor: 'pointer',
                          fontSize: '12px',
                          fontFamily: 'Montserrat',
                          color: '#fff',
                        }}
                        onClick={() => openPaymentWindow(card.productName, card.price)}
                      >
                        Buy Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
  
}  

export default ProductHome;

