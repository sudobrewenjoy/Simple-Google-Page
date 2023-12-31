import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductWindow = ({ productName, price, imageUrl, rating }) => {
    const navigate = useNavigate()

    const openPaymentWindow = () => {
        
        navigate('/payment'); 
      };
 
  

  return (
    <div style={{ flex: '1', position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
 
  
    {/* Image with specified dimensions and position */}
    <img
      src={imageUrl}
      alt={productName}
      style={{
        width: '210px',
        height: '264px',
        margin: '95px 0 325px 108px',
        objectFit: 'cover', 
      }}
    />
  
  
  
  

      <div style={{ flex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'  }}>
        {/* Product Name, Price, and Rating */}
        <div style={{ marginLeft: '118px',marginTop:"96px" }}>
          <h2>{productName}</h2>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
        </div>

        <div style={{ position: 'absolute', bottom: '20px', right: '48.5px',top:'126px' }}>
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
        onClick={openPaymentWindow}
        >
        Buy Now
        </button>
        </div>

        {/* Product Details Table */}
        <table style={{ width: '100%', marginTop: '244px', marginLeft: '118px', borderSpacing: '0' }}>
            <tbody>
                <tr>
                <td style={{ padding: '5px', textAlign: 'center', width: '25%' }}>Color</td>
                <td style={{ padding: '5px', textAlign: 'left', width: '75%' }}>
                    White Back Blue
                </td>
                </tr>
                <tr>
                <td style={{ padding: '5px', textAlign: 'center' }}>Display</td>
                <td style={{ padding: '5px', textAlign: 'left' }}>
                    <ul>
                    <li>OLED, HDR</li>
                    <li>6.1 inches, 90.7 cm2 (~83.0% screen-to-body ratio)</li>
                    <li>1080 x 2400 pixels, 20:9 ratio (~429 ppi density)</li>
                    <li>Corning Gorilla Glass 3</li>
                    <li>Always-on display</li>
                    </ul>
                </td>
                </tr>
            </tbody>
            </table>


      </div>
    </div>
  );
};


export default ProductWindow;
