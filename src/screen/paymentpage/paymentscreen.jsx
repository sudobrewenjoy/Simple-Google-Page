import React, { useState, useRef } from 'react';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import {app,db} from './firebaseconfig';
import { addDoc, collection } from 'firebase/firestore';


const useStyles = {
  paper: {
    padding: '16px',
    maxWidth: '600px',
    margin: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  button: {
    marginTop: '16px',
  },
  paymentOptionSelect: {
    marginBottom: '16px',
  },
};

const PaymentPageScreen = () => {
  const location = useLocation();
  const { productName, price, name, contactNumber, address, city, state,imageUrl } = location.state || {};

  const [paymentOption, setPaymentOption] = useState('card');
  const [shippingAddress, setShippingAddress] = useState('');
  const [processing, setProcessing] = useState(false);
  const paymentFormRef = useRef(null);
  const [email, setEmail] = useState('');

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
    setShippingAddress('');
  };
  console.log(db)

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      setProcessing(true);
  
      // Validation (add your validation logic here)
      if (!productName || !price || !name || !contactNumber || !address || !city || !state || !email) {
        throw new Error('Please fill in all required fields.');
      }
  
      // Send product and user information to Firebase using addDoc
      const ordersCollection = collection(db, 'orders');
      await addDoc(ordersCollection, {
        productName,
        price,
        name,
        contactNumber,
        address,
        city,
        state,
        email,
        // Add other data you want to store in the Firestore document
      });
  
      console.log('Data sent successfully!');
  
      // Reset form fields after successful submission
    
    } catch (error) {
      console.error('Error sending data to Firebase:', error.message);
      // Handle the error or notify the user
    } finally {
      setProcessing(false);
    }
  };
  
  

  return (
    <Paper style={useStyles.paper}>
      <Grid container spacing={2}>
        {/* Display image on the left side */}
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <img src={imageUrl} alt="Product" style={{ width: '100%' }} />
          <Typography variant="h6" style={{ marginTop: '8px' }}>
            {productName}
          </Typography>
          <Typography variant="h6" style={{ color: '#219EBC', fontWeight: 'bold', marginBottom: '8px' }}>
            Delivery Address
          </Typography>
          <Typography variant="body1">
            {`Name: ${name}`}
          </Typography>
          <Typography variant="body1">
            {`Contact Number: ${contactNumber}`}
          </Typography>
          <Typography variant="body1">
            {`Address: ${address}`}
          </Typography>
          <Typography variant="body1">
            {` City,  state: ${city}, ${state}`}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h5" gutterBottom>
            Payment Details
          </Typography>
          <form
            style={useStyles.form}
            ref={paymentFormRef}
            onSubmit={handleSubmit}
          >
            <FormControl
              style={useStyles.paymentOptionSelect}
            >
              <InputLabel>Payment Option</InputLabel>
              <Select
                value={paymentOption}
                onChange={handlePaymentOptionChange}
                required
              >
                {/* ... existing code for payment options */}
              </Select>
            </FormControl>
            {/* ... existing code for rendering payment fields */}
            <TextField
              label="Shipping Address"
              value={shippingAddress}
              onChange={(event) => setShippingAddress(event.target.value)}
              required
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={useStyles.button}
              disabled={processing}
            >
              {processing ? 'Processing...' : `Submit Order`}
            </Button>
          </form>
        </Grid>
      </Grid>
      {/* Display price */}
    </Paper>
  );
};

export default PaymentPageScreen;
