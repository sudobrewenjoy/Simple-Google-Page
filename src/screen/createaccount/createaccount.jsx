/* eslint-disable no-undef */
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import YourImage from './img1.png';
import googleLogo from './googlelogo.png';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/login'); // Replace '/' with the route of your home page
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  };

  const flex1Style = {
    flex: '0 0 650px',
    height: '768px',
    backgroundColor: 'white',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const flex2Style = {
    flex: '1',
    backgroundColor: 'white',
    padding: '20px',
    width: '683px',
    height: '768px',
    marginLeft: '60px',
    marginRight: '60px',
  };

  return (
    <div style={containerStyle}>
      <div style={flex1Style}>
        <img src={googleLogo} alt="Google Logo" style={{ position: 'absolute', top: '20px', left: '20px' }} />
        <img src={YourImage} alt="pro" style={imageStyle} />
      </div>
      <div style={flex2Style}>
        <br />
        <br />
        <br />
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800', fontSize: '24px' }}>
          Welcome to Google Store!
        </h1>

        <h5 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500', fontSize: '18px', color: '#BBBBBB' }}>
          Register your account
        </h5>
        <br />

        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email ID</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Create Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Retype Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password again" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{
              /* Button styles */
              width: '563px',
              height: '49px',
              background: '#219EBC',
              marginLeft:'60px'
            }}
          >
            Create Account
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAccount;
