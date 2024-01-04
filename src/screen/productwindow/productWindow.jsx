import React from 'react';
//import { useNavigate } from 'react-router-dom';
import { Modal} from 'react-bootstrap';
import { useState } from 'react';
import PaymentPage from '../payment/payment';

const ProductWindow = ({ productName, price, imageUrl,rating,actualamount }) => {
  const openPaymentWindow = (productName, price, imageUrl,actualamount) => {
    const modalStyles = {
      top: '113px',
      bottom: '113px',
      height: '849px',
      marginTop: '10px'
    }; 

    setShowModal(false);
  
    setModalContent(
      /*<Modal 
        size="xl" 
        show={true} 
        onHide={handleCloseModal}  
        aria-labelledby="example-modal-sizes-title-xl"
      >*/
        <Modal.Body style={{  ...modalStyles }}> 
          <PaymentPage
            productName={productName}
            price={price}
            imageUrl={imageUrl}
            actualamount={actualamount}
           
          />
        </Modal.Body>
     
    );
    setShowModal(true);
   
  };
  
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);


  const renderStars = (rating) => {
    const starsTotal = 5;
    const filledStars = Math.floor(rating);
    const starArray = [];

    for (let i = 0; i < starsTotal; i++) {
      if (i < filledStars) {
        starArray.push(
          <span
            key={i}
            style={{
              color: '#FFB703',
              fontSize: '18px',
              fontFamily: 'Montserrat',
              fontWeight: '600'
            }}
          >
            &#9733;
          </span>
        );
      } else {
        starArray.push(
          <span
            key={i}
            style={{
              color: '#FFB703',
              fontSize: '18px',
              fontFamily: 'Montserrat',
              fontWeight: '600'
            }}
          >
            &#9734;
          </span>
        );
      }
    }
    return starArray;
  };

  return (
    <div style={{ flex: '1', position: 'relative', display: 'flex', justifyContent: 'space-between', marginTop: '10px'  }}>
      <h2 style={{marginLeft:'28px',marginTop:'32px'}}>{productName}</h2>
      
      <img
        src={imageUrl}
        alt={productName}
        style={{
          width: '210px',
          height: '264px',
          margin: '95px 0 ',
          objectFit: 'cover',
          marginRight:'135px'
          
        }}
      />

      <div style={{ flex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* Product Name, Price, and Rating */}
        <div style={{ marginRight: '128px', marginTop: '96px' }}>
          <h2>{productName}</h2>
          <p> {price}</p>
          <div>{renderStars(rating)}</div>
        </div>
        

        <div style={{ position: 'absolute', bottom: '20px', right: '48.5px', top: '126px' }}>
          <button
            style={{
              width: '92px',
              height: '47px',
              backgroundColor: '#219EBC',
              color: '#FFFFFF',
              fontFamily: 'Montserrat',
              fontWeight: '600',
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() =>
               openPaymentWindow(productName, price, imageUrl,actualamount)}
          >
            Buy Now
          </button>
        </div>

        {/* Product Details Table */}
        <table style={{ width: '100%', marginBottom: '244px', marginRight: '98px', borderSpacing: '0' }}>
          <tbody>
          <tr>
            <td style={{ padding: '5px', textAlign: 'center', width: '25%',color:'#023047',fontSize:'14px' }}>Color</td>
            <td style={{ padding: '5px', textAlign: 'left', width: '75%' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '24px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      marginRight: '5px',
                      backgroundColor: 'black', 
                      marginLeft: '15px'
                    }}
                  ></span>
                  <span style={{color:'#4E6E7E',fontSize:'12px'}}>Black</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '24px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      marginRight: '5px',
                      backgroundColor: 'white', 
                      border: '1px solid #000', 
                    }}
                  ></span>
                  <span style={{color:'#4E6E7E',fontSize:'12px'}}>White</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '24px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      marginRight: '5px',
                      backgroundColor: 'blue', 
                    }}
                  ></span>
                  <span style={{color:'#4E6E7E',fontSize:'12px'}}>Blue</span>
                </div>


              </div>
            </td>
          </tr>


            <tr>
              <td style={{ padding: '5px', textAlign: 'center',color:'#023047',fontSize:'14px' }}>Display</td>
              <td style={{ padding: '5px', textAlign: 'left',color:'#4E6E7E',fontSize:'12px' }}>
                <ul>
                  <li>OLED, HDR</li>
                  <li>6.1 inches, 90.7 cm2 (~83.0% screen-to-body ratio)</li>
                  <li>1080 x 2400 pixels, 20:9 ratio (~429 ppi density)</li>
                  <li>Corning Gorilla Glass 3</li>
                  <li>Always-on display</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '5px', textAlign: 'center',color:'#023047',fontSize:'14px' }}>Dimension and weight</td>
              <td style={{ padding: '5px', textAlign: 'left',color:'#4E6E7E',fontSize:'12px' }}>
                <ul>
                  <li>152.2 x 71.8 x 8.9 mm (5.99 x 2.83 x 0.35 in)</li>
                  <li>178 g (6.28 oz)</li>
                  <li>Glass front (Gorilla Glass 3), aluminum frame, plastic back</li>
                  <li>Nano-SIM and eSIM</li>
                  <li>IP67 dust/water resistant (up to 1m for 30 min)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '5px', textAlign: 'center',color:'#023047',fontSize:'14px' }}>Battery and Chanrging</td>
              <td style={{ padding: '5px', textAlign: 'left',color:'#4E6E7E',fontSize:'12px' }}>
                <ul>
                  <li>Li-Po 4410 mAh, non-removable</li>
                  <li>18W wired, PD3.0</li>

                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '5px', textAlign: 'center',color:'#023047',fontSize:'14px' }}>Memory</td>
              <td style={{ padding: '5px', textAlign: 'left',color:'#4E6E7E',fontSize:'12px' }}>
                <ul>
                  <li>128GB 6GB RAM</li>
                  <li>UFS 3.1</li>

                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '5px', textAlign: 'center',color:'#023047',fontSize:'14px' }}>Processor</td>
              <td style={{ padding: '5px', textAlign: 'left',color:'#4E6E7E',fontSize:'12px' }}>
                <ul>
                  <li>Google Tensor</li>
                  
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '5px', textAlign: 'center',color:'#023047',fontSize:'14px' }}>Camer</td>
              <td style={{ padding: '5px', textAlign: 'left',color:'#4E6E7E',fontSize:'12px' }}>
                <ul>
                  <li>12.2 MP, f/1.7, 27mm, (wide), 1/2.55", 1.4µm, dual pixel PDAF, OIS</li>
                  <li>12 MP, f/2.2, 17mm, 114˚ (ultrawide), 1.25µm</li>
                  <li>Dual-LED flash, Pixel Shift, Auto-HDR, panorama</li>
                  <li>Video: 4K@30/60fps, 1080p@30/60/120/240fps; gyro-EIS, OIS</li>
                  <li>Selfi: 8 MP, f/2.0, 24mm (wide), 1.12µm Auto-HDR, panorama</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default ProductWindow;