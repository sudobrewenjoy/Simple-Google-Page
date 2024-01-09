import { useState, useEffect } from 'react';
import './home.css';
import Navbar from '../../navBar/navbar';

import ProductWindow from '../productwindow/productWindow';
import PaymentPage from '../payment/payment';
import { Modal, ModalBody} from 'react-bootstrap';
import discount from './discount.png';
import deals from './deals.png';



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
        starArray.push(<span key={i} style={{ color: '#FFB703', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: '600' }}>&#9734;</span>);
      }
    }
    return starArray;
  };
  
  

  const [cards, setCards] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('https://657fb88b6ae0629a3f538d87.mockapi.io/project');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCards(data);
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching cards:', error);
        setLoading(false); // Ensure loading is set to false on error too
      }
    };
  
    fetchCards();
  }, []);


  

  const [showPhones, setShowPhones] = useState(true);
  const [showHeadphones, setShowHeadphones] = useState(false);
  const [showaccessories, setShowaccessories] = useState(false);
 
  const handleTogglePhones = () => {
    setShowPhones(!showPhones);
    setShowHeadphones(false);
    setShowaccessories(false);
    
  };

  const handleToggleHeadphones = () => {
    setShowHeadphones(!showHeadphones);
    setShowPhones(false);
    setShowaccessories(false);
    
  };
  const handleToggleaccessories = () => {
    setShowaccessories(!showaccessories);
    setShowPhones(false);
    setShowHeadphones(false);
  };
  

  const [showProductModal, setShowProductModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [paymentModalContent, setPaymentModalContent] = useState(null);
 
  const openPaymentWindow = (productName, price, imageUrl, actualamount) => {
    const modalStyles = {
      top: '113px',
      bottom: '113px',
      height: '849px',
      marginTop: '10px'
    };
  
    setPaymentModalContent(
      <Modal.Body style={{ ...modalStyles }}>
        <PaymentPage
          productName={productName}
          price={price}
          imageUrl={imageUrl}
          actualamount={actualamount}
        />
      </Modal.Body>
    );
  
    setShowProductModal(false);
    setShowPaymentModal(true);
  };
  
  
  
  const openProductWindow = (productName, price, imageUrl, rating) => {
    const modalStyles = {
      top: '113px',
      bottom: '113px',
      marginTop: '10px',
      height: 'auto',
    };
  
    setModalContent(
      <ModalBody style={modalStyles}>
        <ProductWindow
          productName={productName}
          price={price}
          imageUrl={imageUrl}
          rating={rating}
          onClose={handleCloseModal}
          setShowProductModal={setShowProductModal}
          openPaymentWindow={openPaymentWindow} 
        />
      </ModalBody>
    );
  
  
    setShowPaymentModal(false);
    setShowProductModal(true);

    // Clear content for payment modal when product modal is opened
   // setPaymentModalContent(null);
  };
 
  const handleCloseModal = () => {
    setShowPaymentModal(false);
    setShowProductModal(false);
    setModalContent(null);
    setPaymentModalContent(null);
  };

  
    
  const [showBuyNow, setShowBuyNow] = useState(Array(cards.length).fill(false));
  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <div style={leftColumnStyle}>
        <div style={{marginLeft:'62px'}}>
            <input type="checkbox" id="phones" style={checkboxStyle}  onChange={handleTogglePhones}   checked={showPhones}/>
            <label htmlFor="phones">Phones</label>
          </div>
          <div style={{marginLeft:'62px'}}>
            <input type="checkbox" id="headphones" style={checkboxStyle}  onChange={handleToggleHeadphones}
              checked={showHeadphones}/>
            <label htmlFor="headphones">Headphones</label>
          </div>
          <div style={{marginLeft:'62px'}}> 
            <input type="checkbox" id="accessories" style={checkboxStyle} onChange={ handleToggleaccessories}/>
            <label htmlFor="accessories">Accessories</label>
          </div>
          <div>
            <img src={discount} alt='discount'style={{marginLeft:'62px',marginTop:'90px'}} />
            <br />
            <br />
            <br />
            <div className="discount-text" style={{marginLeft:'32px'}}>
              <span>Get </span>
              <span className="discount-percentage">10% </span>
              <span>off on all products!</span>
            </div>
            <br />
            <br />
            <img src={deals} alt='deals ' style={{marginLeft:'32px'}}></img>
          </div>
          

        </div>
        <div style={rightColumnStyle}>
        <div style={cardContainerStyle}>
  {cards.map((card, index) => {
    const isPhone = showPhones && card.type === 'phone';
    const isHeadphone = showHeadphones && card.type === 'headphone';
    const isaccessories = showaccessories && card.type === 'accessories';

    if (isPhone || isHeadphone || isaccessories) {
      return (
        <div
          key={index}
          style={{
            ...cardStyle,
            backgroundColor: card.color,
            position: 'relative',
          }}
          className="cardStyle"
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
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
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', width: '100%' }}>
          <div style={{ flex: '1', textAlign: 'left', position: 'relative', marginLeft: '-20px', marginTop: '20px' }}>
          <h3 style={{ fontSize: '18px', fontFamily: 'Montserrat', fontWeight: '600', color: '#023047' }}>
            {card.productName}
          </h3>
          <div style={{ fontSize: '12px', fontFamily: 'Montserrat', color: '#B3C1C8' }}>
            <span
              className="text"
              style={{ pointerEvents: showBuyNow[index] ? 'none' : 'auto', marginLeft: '-10px' }}
            >
              Smart, Powerful
            </span>
                <button
                  onMouseEnter={() => {
                    const spanToDisable = document.querySelector(`.disableHover${showBuyNow[index] ? '.active' : ''}`);
                    if (spanToDisable) {
                      spanToDisable.style.pointerEvents = 'none';
                    }
                  }}
                  onMouseLeave={() => {
                    const spanToEnable = document.querySelector(`.disableHover${showBuyNow[index] ? '.active' : ''}`);
                    if (spanToEnable) {
                      spanToEnable.style.pointerEvents = 'auto';
                    }
                  }}
                  onClick={(e) => {
                    openProductWindow(card.productName, card.price, card.imageUrl, card.ratings);
                  }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-20px',
                    backgroundColor: 'white',
                    border: 'none',
                    padding: '4px 16px',
                    //borderRadius: '4px',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    fontSize: '12px',
                    fontFamily: 'Montserrat',
                    color: '#219EBC',
                    transition: 'opacity 0.3s', 
                    display: showBuyNow[index] ? 'block' : 'none',
                  }}
                  className="productButton"
                >
                  View Product
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '-53px', 
              width: '100%',
              textAlign: 'right',
              left: '0px'
            }}
            className="priceRating"
          >
            <p style={{ marginBottom: '1px'  }}>{card.price}</p>
            <div style={{ marginTop: '-5px' }}>{renderStars(parseFloat(card.ratings))}</div>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '-35px',
              right: '10px',
              backgroundColor: '#219EBC',
              padding: '4px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
              fontFamily: 'Montserrat',
              color: '#fff',
              transition: 'opacity 0.3s', 
              opacity: showBuyNow[index] ? '1' : '0',
            }}
            className="buyNowButton"
            onClick={() =>
              openPaymentWindow(
                card.productName,
                card.price,
                card.imageUrl,
                card.actualamount
              )
            }
          >
            Buy Now
          </div>
        </div>
      );
    }
    return null; // Return null for non-matching cards
  })}
</div>

          <Modal size="xl" show={showProductModal || showPaymentModal} onHide={handleCloseModal} aria-labelledby="example-modal-sizes-title-xl">
          <Modal.Header>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
          </Modal.Header>
          <Modal.Body style={{ paddingTop: '0', paddingBottom: '0' }}>
            {showProductModal && modalContent /* Render the modal content based on showProductModal */}
            {showPaymentModal && paymentModalContent /* Render payment modal content */}
          </Modal.Body>
        </Modal>

        </div>
      </div>
    </div>
  );
  
} 


export default Home;