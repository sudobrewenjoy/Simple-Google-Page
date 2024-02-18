import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Form, Button, Container, Row, Col} from 'react-bootstrap';
import YourImage from './img1.png';
import googleLogo from './googlelogo.png';
import { sendPasswordResetEmail } from 'firebase/auth';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
 
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

     
      console.log('Logged in successfully:', user);

      
      if (email.toLowerCase() === 'admin@gmail.com') {
        navigate('/admin');
      } else {
        navigate('/');
      }

    } catch (error) {
      
      console.error('Login error:', error);
      setError('Invalid email or password.');
    }
  };
  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setError('Password reset email sent. Check your inbox.');
    } catch (error) {
      console.error('Forgot password error:', error);
      setError('Error sending password reset email.');
    }
  };

  return (
    <Container fluid>
    <Row>
      <Col xs={12} md={6} className="p-0">
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <img src={googleLogo} alt="Google Logo" style={{ position: 'absolute', top: '20px', left: '20px' }} />
          <img src={YourImage} alt="pro" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </Col>
      <Col xs={12} md={6} className="p-5">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800', fontSize: '24px' }}>Welcome to Google Store!</h1>
        <h5 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500', fontSize: '18px', color: '#BBBBBB' }}>Login to your account</h5>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
         
            <Form.Control
              type='password'
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
 
          
        </Form.Group>
         


          {error && <p className="text-danger">{error}</p>}
          <Button variant="link" onClick={handleForgotPassword} className="forgot-password-link">
            Forgot Password?
          </Button>

          <Button variant="primary" type="submit" className="w-100" style={{ background: '#219EBC' }}>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);
};

export default LoginPage;
