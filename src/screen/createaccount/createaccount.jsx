import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import YourImage from './img1.png';
import googleLogo from './googlelogo.png';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

   
      console.log('Registered successfully:', user);

      
      navigate('/login'); 

    } catch (error) {
      
      console.error('Registration error:', error);
      setError('Registration failed. Please try again.');
    }
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
          <h5 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500', fontSize: '18px', color: '#BBBBBB' }}>Create Account</h5>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Create Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              style={{ background: '#219EBC' }}
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
