import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './googlelogo.png';
import './navbar.css'; 
import { AllRoutes } from '../router/router';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    
    navigate('/createaccount');
  };
 


  const createAccountStyle = {
    backgroundColor: 'white',
    borderColor: '#219EBC',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '4px',
    padding: '8px 16px', 
    color: '#219EBC',
    cursor: 'pointer',
  };


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
                to={AllRoutes.products}
                className={`nav-link${location.pathname === AllRoutes.products ? ' active' : ''}`}
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={AllRoutes.service} 
                className={`nav-link${location.pathname === AllRoutes.service ? ' active' : ''}`}
              > 
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={AllRoutes.contact} 
                className={`nav-link${location.pathname === AllRoutes.contact ? ' active' : ''}`}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex">
        <div className="ml-2 text-center" style={{marginTop:'15px'}}>
                <span>Hello, valued visitor!</span>
              </div>
        <button className="btn" style={createAccountStyle} onClick={handleRegisterClick}>
            Create Account
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;