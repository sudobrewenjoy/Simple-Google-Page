import React,{ useState } from 'react';
//import { useLocation } from 'react-router-dom';

const PaymentPage = ({ productName, price, imageUrl,actualamount }) => {

    //const location = useLocation();
   // const searchParams = new URLSearchParams(location.search);
    //const productName = searchParams.get('productName');
    //const price = searchParams.get('price');
    //const imageUrl = searchParams.get('imageUrl');
    const [orderConfirmed, setOrderConfirmed] = useState(false);
   


  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Collect data from the inputs
    const formDataToSend = {
      name: document.getElementById('name').value,
      contactNumber: document.getElementById('contactNumber').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      country: document.getElementById('country').value,
      productName: productName || '',
      price: price || '',
    };
  
    fetch('https://658fe2b9cbf74b575eca3731.mockapi.io/project1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        
        console.log('Success:', data);
       
      })
      .catch((error) => {
        
        console.error('Error:', error);
       
      });

      setOrderConfirmed(true);

      
      setTimeout(() => {
        setOrderConfirmed(false);
      }, 5000);
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ position: 'absolute', top: '0', left: '0', width: '115px', height: '24px', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px', color: '#023047', margin: '20px' }}>Buy {productName}</div>
      <div style={{ position: 'absolute', top: '96px', left: '32px', width: '545px', height: '88px', background: '#FFFFFF', border: '2px solid #E9ECEF', borderRadius: '4px', opacity: '1', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '44px', height: '58px', margin: '25px 24px' }}>
           <img src={imageUrl} alt="Your Product" style={{ width: '100%', height: '100%' }} />

        </div>
        <div style={{ marginLeft: '11px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '40px' }}>
          <div style={{ width: '120px', height: '19px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '16px', color: '#023047', marginBottom: '10px' }}>{productName}</div>
          <div style={{ width: '120px', height: '55px', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', color: '#B3C1C8' }}>Text</div>
        </div>
        <div style={{ marginLeft: '10px', height: '55px', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', color: '#B3C1C8', marginTop: '40px' }}>Black|128</div>
        <div style={{ marginLeft: '50px', height: '55px', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', color: '#B3C1C8', marginTop: '40px' }}>1Qty</div>
        <div style={{ marginLeft: '90px', height: '55px', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', color: '#B3C1C8', marginTop: '40px' }}>{price}</div>
      </div>







  
  <div style={{ width: '545px', marginTop: '20px', height: '311px', background: '#FFFFFF', border: '3px solid #E9ECEF', borderRadius: '4px', opacity: 1, position: 'relative', marginRight: '520px' }}>
        {/* Add Address */}
        <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
          <p style={{ color: '#B3C1C8', fontSize: '12px', fontFamily: 'Montserrat', fontWeight: '600' }}>Add Address</p>
        </div>
        {/* Save Address */}
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <p style={{ color: '#219EBC', fontSize: '12px', fontFamily: 'Montserrat', fontWeight: 'bold' }}>Save Address</p>
        </div>
        {/* Label and input for Name */}
        <div style={{ position: 'absolute', top: '60px', left: '20px', width: '241px', height: '40px', background: '#FFFFFF', border: '2px solid #E9ECEF', borderRadius: '4px', opacity: 1 }}>
          <label htmlFor="name" style={{ color: '#4E6E7E', fontSize: '12px', fontFamily: 'Montserrat', marginBottom: '5px', position: 'absolute', top: '-15px', left: '5px' }}>Name</label>
          <input type="text" id="name" placeholder="Name" style={{ width: '100%', height: '100%', border: 'none', outline: 'none', padding: '5px' }} />
        </div>
        {/* Label and input for Contact Number */}
        <div style={{ position: 'absolute', top: '60px', left: '285px', width: '241px', height: '40px', background: '#FFFFFF', border: '1px solid #E9ECEF', borderRadius: '4px', opacity: 1 }}>
          <label htmlFor="contactNumber" style={{ color: '#4E6E7E', fontSize: '12px', fontFamily: 'Montserrat', marginBottom: '5px', position: 'absolute', top: '-15px', left: '5px' }}>Contact Number</label>
          <input type="text" id="contactNumber" placeholder="Contact Number" style={{ width: '100%', height: '100%', border: 'none', outline: 'none', padding: '5px' }} />
        </div>
        <br></br>
        {/* Label and input for Address */}
        <div style={{ position: 'absolute', top: '120px', left: '20px', width: '498px', height: '40px', background: '#FFFFFF', border: '1px solid #E9ECEF', borderRadius: '4px', opacity: 1 }}>
          <label htmlFor="address" style={{ color: '#4E6E7E', fontSize: '12px', fontFamily: 'Montserrat', marginBottom: '5px', position: 'absolute', top: '-15px', left: '5px' }}>Address</label>
          <input type="text" id="address" placeholder="Address" style={{ width: '100%', height: '100%', border: 'none', outline: 'none', padding: '5px' }} />
        </div>
        <br></br>
        {/* Label and input for City */}
        <div style={{ position: 'absolute', top: '200px', left: '20px', width: '241px', height: '40px', background: '#FFFFFF', border: '1px solid #E9ECEF', borderRadius: '4px', opacity: 1 }}>
          <label htmlFor="city" style={{ color: '#4E6E7E', fontSize: '12px', fontFamily: 'Montserrat', marginBottom: '5px', position: 'absolute', top: '-15px', left: '5px' }}>City</label>
          <input type="text" id="city" placeholder="City" style={{ width: '100%', height: '100%', border: 'none', outline: 'none', padding: '5px' }} />
        </div>
        {/* Label and input for Country */}
        <div style={{ position: 'absolute', top: '200px', left: '285px', width: '241px', height: '40px', background: '#FFFFFF', border: '1px solid #E9ECEF', borderRadius: '4px', opacity: 1 }}>
          <label htmlFor="country" style={{ color: '#4E6E7E', fontSize: '12px', fontFamily: 'Montserrat', marginBottom: '5px', position: 'absolute', top: '-15px', left: '5px' }}>Country</label>
          {/* Dropdown for Country */}
          <select id="country" style={{ width: '100%', height: '100%', background: '#FFFFFF', border: 'none', outline: 'none', fontFamily: 'Montserrat', fontSize: '12px', color: '#4E6E7E' }}>
            <option value="" disabled selected>Select country</option>
            <option value="India">India</option>
            <option value="Russia">Russia</option>
            <option value="USA">USA</option>
            <option value="China">China</option>
            <option value="Brazil">Brazil</option>
            <option value="Japan">Japan</option>
            <option value="Germany">Germany</option>
            <option value="Mexico">Mexico</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="South Korea">South Korea</option>
            <option value="France">France</option>
            <option value="Italy">Italy</option>
            <option value="Spain">Spain</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Argentina">Argentina</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="South Africa">South Africa</option>
            <option value="Nigeria">Nigeria</option>
            
          </select>
        </div>
      </div>
    <div style={{ position: 'absolute', top: '91px', left: '690px', width: '270px', height: '257px', background: '#FFFFFF', border: '3px solid #E9ECEF', borderRadius: '4px', opacity: 1}}>
    <h2 style={{ fontFamily: 'Montserrat', fontWeight: '600', fontSize: '12px', color: '#B3C1C8', margin: '10px 0', marginLeft: '24px' }}>Invoice summary</h2>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginLeft: '24px' }}>
        <p style={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '12px', color: '#B3C1C8', margin: '5px 0' }}>Actual Amount</p>
        <span style={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '12px', color: '#B3C1C8', margin: '5px 0',marginRight:'10px' }}>{actualamount}</span>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginLeft: '24px' }}>
        <p style={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '12px', color: '#B3C1C8', margin: '5px 0' }}>Discount</p>
        <span style={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '12px', color: '#B3C1C8', margin: '5px 0',marginRight:'10px' }}>$10</span>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginLeft: '24px' }}>
        <p style={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '12px', color: '#B3C1C8', margin: '5px 0' }}>Billing Amount</p>
        <span style={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '12px', color: '#B3C1C8', margin: '5px 0',marginRight:'10px' }}>{price}</span>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginLeft: '24px' }}>
        <p style={{ fontFamily: 'Montserrat', fontWeight: '600', fontSize: '12px', color: '#023047', margin: '5px 0' }}>Total Amount</p>
        <span style={{ fontFamily: 'Montserrat', fontWeight: '600', fontSize: '12px', color: '#023047', margin: '5px 0',marginRight:'10px' }}>{price}</span>
    </div>
    <button onClick={handleSubmit} style={{ width: '222px', height: '42px', backgroundColor: '#219EBC', color: '#FFFFFF', border: 'none', borderRadius: '4px', marginTop: '15px', marginLeft: '24px' }}>
        <span style={{ width: '92px', height: '18px', display: 'inline-block' }}>Pay {price}</span>
    </button>
    {orderConfirmed && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#219EBC',
            color: '#FFFFFF',
            padding: '20px',
            borderRadius: '8px',
            zIndex: 9999, // Ensures it's on top of everything
          }}
        >
          <p style={{ textAlign: 'center', margin: 0 }}>
            Order Confirmed - Payment Successful
          </p>
        </div>
        )}
  </div>

    </div>
  );
  

};

export default PaymentPage;
