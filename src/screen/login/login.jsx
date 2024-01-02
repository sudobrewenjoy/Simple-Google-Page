import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import YourImage from './img1.png';
import googleLogo from './googlelogo.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    if (data.username === 'root' && data.password === '12345678') {
      localStorage.setItem('authToken', 'yourAuthTokenHere');
      navigate('/producthome');
    } else if (data.username === 'admin' && data.password === '87654321') {
      localStorage.setItem('authToken', 'yourOtherAuthTokenHere');
      navigate('/admin');
    }
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

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

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                {...register('username', { required: true })}
              />
              {errors.username && <p className="text-danger">Username is required</p>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                {...register('password', { required: true, minLength: 8 })}
              />
              {errors.password && (
                <p className="text-danger">
                  {errors.password.type === 'required'
                    ? 'Password is required'
                    : 'Password must be at least 8 characters'}
                </p>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100" style={{background: '#219EBC'}}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
