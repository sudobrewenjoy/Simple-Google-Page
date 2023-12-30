import React from 'react';

const Flex1 = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const flexContainerStyle = {
    position: 'absolute',
    top: '91px',
    left: '32px',
    width: '545px',
    height: '88px',
    background: '#FFFFFF',
    border: '2px solid #E9ECEF',
    borderRadius: '4px',
    opacity: 1,
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '24px',
    height: '31px',
    margin: '25px 24px',
    backgroundImage: 'url("path_to_your_image.jpg")',
  };

  const productNameStyle = {
    width: '55px',
    height: '19px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#023047',
    marginBottom: '8px',
  };

  const textAreaContentStyle = {
    width: '73px',
    height: '55px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '12px',
    color: '#B3C1C8',
  };

  const textArea1Style = {
    marginLeft: '61px',
    width: '81px',
    height: '15px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'medium',
    fontSize: '12px',
    color: '#B3C1C8',
    marginTop: '37px',
    marginBottom: '36px',
  };

  const textArea2Style = {
    marginLeft: '15px',
    width: '20px',
    height: '15px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'medium',
    fontSize: '12px',
    color: '#B3C1C8',
    marginTop: '37px',
    marginBottom: '36px',
  };

  return (
    <div style={containerStyle}>
      <div style={flexContainerStyle}>
        <div style={imageStyle}></div>
        <div>
          <div style={productNameStyle}>Product Name</div>
          <div style={textAreaContentStyle}>Text area content goes here</div>
          <div>
            <div style={textArea1Style}>Text area 1</div>
            <div style={textArea2Style}>Text area 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flex1;
