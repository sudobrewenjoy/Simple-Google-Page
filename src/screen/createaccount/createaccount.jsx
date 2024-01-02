/* eslint-disable no-undef */
import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import YourImage from './img1.png';
import googleLogo from './googlelogo.png';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/login'); 
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6}>
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <img src={googleLogo} alt="Google Logo" style={{ position: 'absolute', top: '20px', left: '20px' }} />
            <img src={YourImage} alt="pro" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </Col>
        <Col xs={12} md={6} className="p-5">
          <br />
          <br />
          <br />
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800', fontSize: '24px' }}>Welcome to Google Store!</h1>
          <h5 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500', fontSize: '18px', color: '#BBBBBB' }}>Login to your account</h5>

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
              className="w-100"
              style={{background: '#219EBC'}}
            >
              Create Account
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateAccount;
