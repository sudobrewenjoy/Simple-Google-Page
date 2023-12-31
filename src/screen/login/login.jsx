import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
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
      navigate('/database');
    }
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

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
    marginRight: '60px'
  };

  const inputStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '400',
    fontSize: '12px',
    color: '#98A0AC',
    
  };

    // Media query for responsiveness
    const mediaQuery = `@media (min-width: 768px) {
      display: flex;
      flex-direction: row;
    }`;

  const buttonStyle = {
    width: '563px',
    height: '49px',
    background: '#219EBC',
    marginLeft:'60px'
  
  };

  return (
    <div style={containerStyle}>
      <div style={flex1Style}>
        <img src={googleLogo} alt="Google Logo" style={{ position: 'absolute', top: '20px', left: '20px' }} />
        <img src={YourImage} alt="pro" style={imageStyle} />
      </div>
      <div style={flex2Style}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800', fontSize: '24px' }}>
          Welcome to Google Store!
        </h1>

        <h5 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500', fontSize: '18px', color: '#BBBBBB' }}>
          Login to your account
        </h5>
        <br></br>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label style={inputStyle}>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              {...register('username', { required: true })}
              style={inputStyle}
            />
            {errors.username && <p className="text-danger">Username is required</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={inputStyle}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              {...register('password', { required: true, minLength: 8 })}
              style={inputStyle}
            />
            {errors.password && (
              <p className="text-danger">
                {errors.password.type === 'required'
                  ? 'Password is required'
                  : 'Password must be at least 8 characters'}
              </p>
            )}
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={buttonStyle}
          >
            Login
          </Button>
        </Form>
      </div>
      <style>{mediaQuery}</style>
    </div>
  );
};

export default LoginPage;
