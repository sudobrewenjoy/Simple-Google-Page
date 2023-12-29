import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import YourImage from './img1.png';

const CreateAccount = () => {
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
  };
  

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={containerStyle}>
      <div style={flex1Style}>
        <img src={YourImage} alt="pro" style={imageStyle} />
      </div>
      <div style={flex2Style}>
        <br></br>
        <br></br>
        <br></br>
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800', fontSize: '24px' }}>
           Welcome to Google Store!
        </h1>

        <h5 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500', fontSize: '18px', color: '#BBBBBB' }}>
          Register your account
        </h5>
        <br></br>
        <br></br>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400', fontSize: '12px', color: '#98A0AC' }}>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              {...register('username', { required: true })}
            />
            {errors.username && <p className="text-danger">Username is required</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400', fontSize: '12px', color: '#98A0AC' }}>Email ID</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.email && (
              <p className="text-danger">
                {errors.email.type === 'required'
                  ? 'Email is required'
                  : 'Email is invalid'}
              </p>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400', fontSize: '12px', color: '#98A0AC' }}>Create Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              {...register('password', { required: true, minLength: 6 })}
            />
            {errors.password && (
              <p className="text-danger">
                {errors.password.type === 'required'
                  ? 'Password is required'
                  : 'Password must be at least 6 characters'}
              </p>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400', fontSize: '12px', color: '#98A0AC' }}>Retype Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password again"
              {...register('retypePassword', {
                required: true,
                validate: (value) =>
                  value === register('password').ref.current.value,
              })}
            />
            {errors.retypePassword && (
              <p className="text-danger">
                {errors.retypePassword.type === 'required'
                  ? 'Retype password is required'
                  : 'Passwords do not match'}
              </p>
            )}
          </Form.Group>
          <Button
  variant="primary"
  type="submit"
  style={{
    /* Layout Properties */
    top: '613px',
    left: '743px',
    width: '563px',
    height: '49px',
    /* UI Properties */
    background: '#219EBC',
    boxShadow: '0px 6px 10px #00000014',
    borderRadius: '4px',
    opacity: '1',
    /* Other Button Styles */
    color: '#FFFFFF', // Text color
    fontSize: '16px',
    fontWeight: 'bold',
    // Add other styles as needed
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
