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
// Assume you have appropriate functions for each payment option:
import {
  handleCardPayment,
  handleNetbankingPayment,
  handleQrCodePayment,
  handleUpiPayment,
  handleCashOnDelivery,
} from './payment-handlers';

const useStyles = {
  paper: {
    padding: '16px',
    maxWidth: '600px', // Increased width to accommodate image and details
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
  const { imageUrl, price, productName, name, contactNumber, address, city,  state } = location.state || {};

  
  const [paymentOption, setPaymentOption] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [netbankingBank, setNetbankingBank] = useState('');
  const [qrCodeData, setQrCodeData] = useState('');
  const [upiId, setUpiId] = useState('');
  // eslint-disable-next-line
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const [shippingAddress, setShippingAddress] = useState('');
  const [processing, setProcessing] = useState(false);
  const paymentFormRef = useRef(null);

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
    // Clear any previously entered payment details for other options
    setCardNumber('');
    setCardName('');
    setExpiryDate('');
    setCvv('');
    setNetbankingBank('');
    setQrCodeData('');
    setUpiId('');
    setCashOnDelivery(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setProcessing(true);

      switch (paymentOption) {
        case 'card':
          await handleCardPayment(
            {
              cardNumber,
              cardName,
              expiryDate,
              cvv,
            },
            shippingAddress
          );
          // Handle successful card payment
          break;
        case 'netbanking':
          await handleNetbankingPayment(netbankingBank, shippingAddress);
          // Handle successful netbanking payment
          break;
        case 'qrcode':
          await handleQrCodePayment(qrCodeData, shippingAddress);
          // Handle successful QR code payment
          break;
        case 'upi':
          await handleUpiPayment(upiId, shippingAddress);
          // Handle successful UPI payment
          break;
        case 'cashondelivery':
          await handleCashOnDelivery(shippingAddress);
          // Handle successful cash on delivery
          break;
        default:
          console.error('Invalid payment option');
      }
    } catch (error) {
      // Handle payment error
      console.error('Payment error:', error);
    } finally {
      setProcessing(false);
    }
  };

  const renderPaymentFields = () => {
    switch (paymentOption) {
      case 'card':
        return (
          <>
            <TextField
              label="Card Number"
              value={cardNumber}
              onChange={(event) => setCardNumber(event.target.value)}
              required
            />
            <TextField
              label="Cardholder Name"
              value={cardName}
              onChange={(event) => setCardName(event.target.value)}
              required
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Expiry Date"
                  value={expiryDate}
                  onChange={(event) => setExpiryDate(event.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="CVV"
                  value={cvv}
                  onChange={(event) => setCvv(event.target.value)}
                  required
                />
              </Grid>
            </Grid>
          </>
        );
      case 'netbanking':
        return (
          <FormControl>
            <InputLabel>Netbanking Bank</InputLabel>
            <Select
              value={netbankingBank}
              onChange={(event) => setNetbankingBank(event.target.value)}
              required
            >
              {/* Add MenuItem options for each bank */}
              <MenuItem value="bank1">Bank 1</MenuItem>
              <MenuItem value="bank2">Bank 2</MenuItem>
              {/* Add more banks as needed */}
            </Select>
          </FormControl>
        );
      case 'qrcode':
        return (
          <TextField
            label="QR Code Data"
            value={qrCodeData}
            onChange={(event) => setQrCodeData(event.target.value)}
            required
          />
        );
      case 'upi':
        return (
          <TextField
            label="UPI ID"
            value={upiId}
            onChange={(event) => setUpiId(event.target.value)}
            required
          />
        );
      case 'cashondelivery':
        return (
          <TextField
            label="Shipping Address"
            value={shippingAddress}
            onChange={(event) => setShippingAddress(event.target.value)}
            required
          />
        );
      default:
        return null;
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
            {` City,  state: ${ city}, ${ state}`}
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
                <MenuItem value="card">Credit/Debit Card</MenuItem>
                <MenuItem value="netbanking">Netbanking</MenuItem>
                <MenuItem value="qrcode">QR Code</MenuItem>
                <MenuItem value="upi">UPI</MenuItem>
                <MenuItem value="cashondelivery">Cash on Delivery</MenuItem>
              </Select>
            </FormControl>
            {renderPaymentFields()}
            <TextField
              label="Shipping Address"
              value={shippingAddress}
              onChange={(event) => setShippingAddress(event.target.value)}
              required
            />
           <Button
            type="submit"
            variant="contained"
            color="primary"
            style={useStyles.button}
            disabled={processing}
          >
            {processing ? 'Processing...' : `Pay ${price}`}
          </Button>

          </form>
        </Grid>
      </Grid>
      {/* Display price */}
     
    </Paper>
  );
};

export default PaymentPageScreen;
