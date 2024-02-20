import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteItemScreen = () => {
  const [productName, setProductName] = useState('');
  
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all items when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8083/findproduct');
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleChangeProductName = (e) => {
    setProductName(e.target.value);
  };



  const handleDelete = async (e) => {
    e.preventDefault();

    // Simulate admin authentication (replace with your actual authentication logic)
    const isAdmin = true;

    if (isAdmin) {
      try {
        // Find items to delete based on productName and type matching
        const itemsToDelete = data.filter(item => item.productName === productName );

        // Delete each matching item
        const deletePromises = itemsToDelete.map(async (item) => {
          const deleteResponse = await fetch(`http://localhost:8083/deleteproduct/${item.productName}`, {
            method: 'DELETE',
          });

          if (!deleteResponse.ok) {
            console.error(`Failed to delete item with productName ${item.productName}.`);
          }
        });

        // Wait for all delete requests to complete
        await Promise.all(deletePromises);

        console.log('Items deleted successfully!');
        // You may want to redirect or perform other actions after successful deletion.
      } catch (error) {
        console.error('Error deleting items:', error);
      }
    } else {
      console.error('Only admins can delete items.');
      // You may want to display an error message or redirect to a login page.
    }
  };

  const handleNavigateHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Admin - Delete Items</h2>
      <div className="alert alert-info">
        <p className="mb-0">
          <strong>Welcome, Administrator.</strong> Accessing exclusive content reserved for admins.
          This section is exclusively accessible to administrators for authorized access.
        </p>
      </div>
      <button onClick={handleNavigateHome} className="btn btn-info mb-3">Go to Home</button>
      <form onSubmit={handleDelete}>
        <div className="form-group">
          <label>Product Name:</label>
          <input type="text" value={productName} onChange={handleChangeProductName} className="form-control" required />
        </div>

        <button type="submit" className="btn btn-danger">Delete Items</button>
      </form>
    </div>
  );
};

export default DeleteItemScreen;
