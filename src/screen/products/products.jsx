import React from 'react';
import Navbar from '../../navBar/navbar';
import './ProductScreen.css'

import redmi from './TB_Mob.jpg';
import redmi2 from './Mob_02.jpg';

const ProductScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="product-container">
      <h2 className="product-title">Explore Our Products</h2>
      <div class="image-container">
            <img src={redmi} alt='im1'/>
        </div>
        <div class="image-container">
            <img src={redmi2} alt='im2'/>
        </div>



        <div className="product-content">
          
          <div className="product-categories">{/* Categories content */}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
