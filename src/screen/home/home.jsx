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
import deals from './deals.png';
import apple1 from './images/airpod apple.jpeg';
import sony from './images/sony airpod.jpeg';
import samsungbuds from './images/samsung airpod.jpeg';
import mi from './images/mi airpods.jpeg';
import boat from './images/boat airpod.jpeg';
import oneplusbuds from './images/oneplus nord buds.jpeg';
import jbl from './images/jbl airpod.jpeg';
import nothingbuds from './images/nothing airpod.jpeg';
import vivobuds from './images/vivo tws.jpeg';


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
      actualamount:'$1009',
      type: 'phone',
    },
    {
      productName: 'OPPO',
      price: '$179',
      ratings: '4.3',
      imageUrl: oppophone,
      color:'#EBF5F3',
      actualamount:'$189',
      type: 'phone',
    },
    {
      productName: 'Redmi ',
      price: '$199',
      ratings: '3.8',
      imageUrl: redmi,
      color: '#F7F7ED',
      actualamount:'$209',
      type: 'phone',
    },
    {
      productName: 'Vivo X90',
      price: '$299',
      ratings: '4.4',
      imageUrl: vivo,
      color: '#EBF5F3',
      actualamount:'$309',
      type: 'phone',
    },
    {
      productName: 'Realme',
      price: '$149',
      ratings: '3.8',
      imageUrl: realme,
      color: '#E3F7F4',
      actualamount:'$159',
      type: 'phone',
    },
    {
      productName: 'Oneplus 11R',
      price: '$159',
      ratings: '4.4',
      imageUrl: oneplus,
      color: '#F7F7ED',
      actualamount:'$169',
      type: 'phone',
    },
    {
      productName: 'Pixel 8A',
      price: '$649',
      ratings: '4.6',
      imageUrl: pixel,
      color: '#F7F7ED',
      actualamount:'$659',
      type: 'phone',
    },
    {
      productName: 'samsung S23',
      price: '$749',
      ratings: '4.9',
      imageUrl: samsung,
      color: '#E3F7F4',
      actualamount:'$759',
      type: 'phone',
    },
    {
      productName: 'Iphone 15 Pro',
      price: '$849',
      ratings: '4.8',
      imageUrl: iphone15,
      color: '#F7F7ED',
      actualamount:'$859',
      type: 'phone',
    },
    {
      productName: 'Iphone 14 pro ',
      price: '$549',
      ratings: '4.2',
      imageUrl: iphone14,
      color: '#E3F7F4',
      actualamount:'$559',
      type: 'phone',
    },
    {
      productName: 'Moto g22',
      price: '$249',
      ratings: '3.8',
      imageUrl: moto,
      color: '#EBF5F3',
      actualamount:'$349',
      type: 'phone',
    },
    {
      productName: 'Techo 20',
      price: '$129',
      ratings: '3.4',
      imageUrl: techno,
      color: '#F7F7ED',
      actualamount:'$139',
      type: 'phone'

    },
    {
      productName: 'Airpod Pro',
      price: '$200',
      ratings: '4.9',
      imageUrl: apple1,
      color: '#F7F7ED',
      actualamount:'$210',
      type: 'headphone'

    },
    {
      productName: 'Samsung Buds',
      price: '$180',
      ratings: '4.6',
      imageUrl: samsungbuds,
      color: '#F7F7ED',
      actualamount:'$190',
      type: 'headphone'

    },
    {
      productName: 'Sony Buds',
      price: '$200',
      ratings: '4.5',
      imageUrl: sony,
      color: '#F7F7ED',
      actualamount:'$210',
      type: 'headphone'

    },
    {
      productName: 'Nothing buds',
      price: '$160',
      ratings: '4.2',
      imageUrl: nothingbuds,
      color: '#F7F7ED',
      actualamount:'$170',
      type: 'headphone'

    },
    {
      productName: 'Boat',
      price: '$100',
      ratings: '4.4',
      imageUrl: boat,
      color: '#F7F7ED',
      actualamount:'$110',
      type: 'headphone'

    },
    {
      productName: 'JBL buds',
      price: '$120',
      ratings: '4.3',
      imageUrl: jbl,
      color: '#F7F7ED',
      actualamount:'$130',
      type: 'headphone'

    },
    {
      productName: 'Oneplus Buds Pro',
      price: '$155',
      ratings: '4.6',
      imageUrl: oneplusbuds,
      color: '#F7F7ED',
      actualamount:'$165',
      type: 'headphone'

    },
    {
      productName: 'Mi Buds',
      price: '$105',
      ratings: '4.0',
      imageUrl: mi,
      color: '#F7F7ED',
      actualamount:'$115',
      type: 'headphone'

    },
    {
      productName: 'Vivo Buds',
      price: '$90',
      ratings: '3.8',
      imageUrl: vivobuds,
      color: '#F7F7ED',
      actualamount:'$100',
      type: 'headphone'

    },
  ];

  

  const [showPhones, setShowPhones] = useState(false);
  const [showHeadphones, setShowHeadphones] = useState(false);
 
  const handleTogglePhones = () => {
    setShowPhones(!showPhones);
    setShowHeadphones(false);
    
  };

  const handleToggleHeadphones = () => {
    setShowHeadphones(!showHeadphones);
    setShowPhones(false);
    // ... handle other categories if needed
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
  {cards.map((card, index) => {
    const isPhone = showPhones && card.type === 'phone';
    const isHeadphone = showHeadphones && card.type === 'headphone';

    if (isPhone || isHeadphone) {
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
            <div style={{ flex: '1', textAlign: 'left', position: 'relative', marginLeft: '0px', marginTop: '20px' }}>
              <h3 style={{ fontSize: '18px', fontFamily: 'Montserrat', fontWeight: '600', color: '#023047' }}>
                {card.productName}
              </h3>
              <div style={{ fontSize: '12px', fontFamily: 'Montserrat', color: '#B3C1C8' }}>
                <span
                  className="text"
                  style={{ pointerEvents: showBuyNow[index] ? 'none' : 'auto' }}
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
                    backgroundColor: '#219EBC',
                    padding: '4px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontFamily: 'Montserrat',
                    color: '#fff',
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
              bottom: '-65px', 
              width: '100%',
              textAlign: 'right',
              left: '0px'
            }}
            className="priceRating"
          >
            <p style={{ /* Price styles */ }}>{card.price}</p>
            <div style={{ marginTop: '-10px' }}>{renderStars(parseFloat(card.ratings))}</div>
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