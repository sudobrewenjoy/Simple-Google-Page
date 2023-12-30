import React from 'react';

const PaymentPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ position: 'absolute', top: '91px', left: '32px', width: '545px', height: '88px', background: '#FFFFFF', border: '2px solid #E9ECEF', borderRadius: '4px', opacity: 1 }}>
        {/* Content for flex1 */}
      </div>
  
      <div style={{ flex: 2, marginTop: '312px', marginLeft: '32px', marginRight: '317px', width: '300px', height: '311px', background: '#FFFFFF', border: '3px solid #E9ECEF', borderRadius: '4px', opacity: 1, position: 'relative' }}>
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
            {/* Add options for countries */}
            <option value="country1">Country 1</option>
            <option value="country2">Country 2</option>
            {/* Add more countries as needed */}
          </select>
        </div>
      </div>
      <div style={{ position: 'absolute', top: '91px', left: '690px', width: '270px', height: '257px', background: '#FFFFFF', border: '3px solid #E9ECEF', borderRadius: '4px', opacity: 1 }}>
        {/* Content for flex3 */}
      </div>
    </div>
  );
  

};

export default PaymentPage;
