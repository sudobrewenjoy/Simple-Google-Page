import { useState } from 'react';
import './home.css';
import Navbar from '../../navBar/navbar';
import nothingPhoneImage from './images/nothing-phone2_.jpg';
import oppophone from './images/oppo-phone.jpeg';
import iphone15 from './images/iphone15pro.jpeg';
import oneplus from './images/oneplus11r.jpeg';
import redmi from './images/redmi.jpeg';
import realme from './images/ralme.png';
import vivo from './images/vivox90.jpeg';
import samsung from './images/samsungs23.jpeg';
import pixel from './images/pixel8a.jpg';
import iphone14 from './images/iphone14.jpeg';
import moto from './images/moto g22.jpeg';
import techno from './images/techno camon 20.jpeg'
import ProductWindow from '../productwindow/productWindow';
import PaymentPage from '../payment/payment';
import { Modal, ModalBody} from 'react-bootstrap';
import discount from './discount.png';
import deals from './deals.png'

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

  const cards = [
    {
      productName: 'Nothing',
      price: '$999',
      ratings: '4.5',
      imageUrl: nothingPhoneImage,
      color:'#E3F7F4',
      actualamount:'$1009'
    },
    {
      productName: 'OPPO',
      price: '$179',
      ratings: '4.3',
      imageUrl: oppophone,
      color:'#EBF5F3',
      actualamount:'$189'
    },
    {
      productName: 'Redmi ',
      price: '$199',
      ratings: '3.8',
      imageUrl: redmi,
      color: '#F7F7ED',
      actualamount:'$209'
    },
    {
      productName: 'Vivo X90',
      price: '$299',
      ratings: '4.4',
      imageUrl: vivo,
      color: '#EBF5F3',
      actualamount:'$309'
    },
    {
      productName: 'Realme',
      price: '$149',
      ratings: '3.8',
      imageUrl: realme,
      color: '#E3F7F4',
      actualamount:'$159'
    },
    {
      productName: 'Oneplus 11R',
      price: '$159',
      ratings: '4.4',
      imageUrl: oneplus,
      color: '#F7F7ED',
      actualamount:'$169'
    },
    {
      productName: 'Pixel 8A',
      price: '$649',
      ratings: '4.6',
      imageUrl: pixel,
      color: '#F7F7ED',
      actualamount:'$659'
    },
    {
      productName: 'samsung S23',
      price: '$749',
      ratings: '4.9',
      imageUrl: samsung,
      color: '#E3F7F4',
      actualamount:'$759'
    },
    {
      productName: 'Iphone 15 Pro',
      price: '$849',
      ratings: '4.8',
      imageUrl: iphone15,
      color: '#F7F7ED',
      actualamount:'$859'
    },
    {
      productName: 'Iphone 14 pro ',
      price: '$549',
      ratings: '4.2',
      imageUrl: iphone14,
      color: '#E3F7F4',
      actualamount:'$559'
    },
    {
      productName: 'Moto g22',
      price: '$249',
      ratings: '3.8',
      imageUrl: moto,
      color: '#EBF5F3',
      actualamount:'$349'
    },
    {
      productName: 'Techo 20',
      price: '129',
      ratings: '3.4',
      imageUrl: techno,
      color: '#F7F7ED',
      actualamount:'$139'

    },
  ];
 
  const openPaymentWindow = (productName, price, imageUrl,actualamount) => {
    const modalStyles = {
      top: '113px',
      bottom: '113px',
      height: '849px',
    }; 
  
    setModalContent(
      <Modal 
        size="xl" 
        show={true} 
        onHide={handleCloseModal}  
        aria-labelledby="example-modal-sizes-title-xl"
      >
        <Modal.Body style={{  ...modalStyles }}> 
          <PaymentPage
            productName={productName}
            price={price}
            imageUrl={imageUrl}
            actualamount={actualamount}
            onClose={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    );
    setShowModal(true);
  };
  
  

  const openProductWindow = (productName, price, imageUrl, rating) => {
    const modalStyles = {
      top: '113px',
      bottom: '113px',
 
      height: '849px',
     
    };
  
   
    setModalContent(
      <Modal 
        size="xl" 
        show={true} 
        onHide={handleCloseModal}  
        aria-labelledby="example-modal-sizes-title-xl"
      >
      
    
    
      <ModalBody style={modalStyles}>
      <ProductWindow
        productName={productName}
        price={price}
        imageUrl={imageUrl}
        rating={rating}
        onClose={handleCloseModal}
      />
      </ModalBody>
      </Modal>
    );
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  
    
  const [showBuyNow, setShowBuyNow] = useState(Array(cards.length).fill(false));
  return (
    <div>
      <Navbar />
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
                    <button
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
                    </button>

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
                          bottom: '5px', 
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
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Modal show={showModal} onHide={handleCloseModal} >
      

            <Modal.Body>{modalContent}</Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
  
  
}  

export default Home;

