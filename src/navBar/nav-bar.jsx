import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './googlelogo.png';
import './navbar.css'; 
import logo from './pf.png'

function NavbarNew() {
  const location = useLocation();
 


  


  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ width: '50px', marginRight: '20px',marginLeft:'62px' }} />
        </Link>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link${location.pathname === '/' ? ' active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/product"
                className={`nav-link${location.pathname === '/product' ? ' active' : ''}`}
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/service"
                className={`nav-link${location.pathname === '/service' ? ' active' : ''}`}
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link${location.pathname === '/about' ? ' active' : ''}`}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex">
            <img src={logo} alt="Profile Logo" className="profile-logo" style={{ width: '60px', height: 'auto' }} />
        </div>


      </div>
    </nav>
  );
}

export default NavbarNew;