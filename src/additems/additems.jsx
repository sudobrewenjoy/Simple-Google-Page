import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './additems.css';

const AddItemForm = () => {
  const [productDetails, setProductDetails] = useState({
    productName: '',
    price: '',
    ratings: '',
    imageUrl: '',
    color: '',
    actualAmount: '',
    type: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate admin authentication (replace with your actual authentication logic)
    const isAdmin = true;

    if (isAdmin) {
      try {
        const response = await fetch('https://657fb88b6ae0629a3f538d87.mockapi.io/project', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productDetails),
        });

        if (response.ok) {
          console.log('Item added successfully!');
          // You may want to redirect or perform other actions after successful submission.
        } else {
          console.error('Failed to add item.');
        }
      } catch (error) {
        console.error('Error adding item:', error);
      }
    } else {
      console.error('Only admins can add items.');
      // You may want to display an error message or redirect to a login page.
    }
  };

  const handleNavigateHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Admin - Add Item</h2>
      <div className="alert alert-info">
        <p className="mb-0">
          <strong>Welcome, Administrator.</strong> Accessing exclusive content reserved for admins.
          This section is exclusively accessible to administrators for authorized access.
        </p>
      </div>
      <button onClick={handleNavigateHome} className="btn btn-info mb-3">Go to Home</button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name:</label>
          <input type="text" name="productName" value={productDetails.productName} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="text" name="price" value={productDetails.price} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Ratings:</label>
          <input type="text" name="ratings" value={productDetails.ratings} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input type="text" name="imageUrl" value={productDetails.imageUrl} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Color:</label>
          <input type="text" name="color" value={productDetails.color} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Actual Amount:</label>
          <input type="text" name="actualAmount" value={productDetails.actualAmount} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Type:</label>
          <input type="text" name="type" value={productDetails.type} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemForm;
