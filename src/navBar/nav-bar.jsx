import React from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './googlelogo.png';
import './navbar.css'; 
import logo from './pf.png';
import { AllRoutes } from '../router/router';

function NavbarNew() {
  const location = useLocation();
  const loggedInUser = location?.state?.loggedInUser;
  const navigate = useNavigate();


  const handleLogout = () => {
    // Perform any necessary logout or state clearing actions here

    // Navigate to the home page
    navigate('/');
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
                to="/producthome"
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
            {loggedInUser && (
              <div className="ml-2 text-center" style={{marginTop:'15px'}}>
                <span>Welcome, {loggedInUser}!</span>
              </div>
            )}
            <img src={logo} alt="Profile Logo" className="profile-logo" style={{ width: '60px', height: 'auto' }} />
            <button
              className="btn btn-link"
              onClick={handleLogout}
              style={{ color: 'blue', textDecoration: 'underline' }}
            >
              Logout
            </button>
        </div>


      </div>
    </nav>
  );
}

export default NavbarNew;