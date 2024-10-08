import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // State to manage dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          {/* Airbnb Logo */}
          <div className="logo">
            <img src="airbnbLogo.png" alt="airbnb logo" />
          </div>

          {/* Navbar Links */}
          <div className="links">
            <div>
              <a href="#" className="nav-link">Stays</a>
            </div>
            <div>
              <a href="#" className="nav-link">Experiences</a>
            </div>
          </div>

          {/* Right Side of Navbar */}
          <div className="navbar-right">
            <a href="#" className="nav-link home" id="Main">Airbnb your home</a>
            <a href="#" className="nav-link">
              <img src="globeIcon.png" alt="language" width="24" height="24" />
            </a>

            {/* Profile and Hamburger Dropdown */}
            <div className="dropdown">
              <button className="profile-btn btn btn-outline-secondary dropdown-toggle" onClick={toggleDropdown}>
                <img src="hamburgerIcon.png" alt="menu" className="hamburger-icon" />
                <img src="awesome.png" alt="profile" className="profile-pic" />
              </button>

              {/* Dropdown Menu - Toggle on click */}
              {dropdownOpen && (
                <div className="dropdown-content">
                  <a href="#">Sign up</a>
                  <a href="#">Log in</a>
                  <hr />
                  <a href="#">Gift cards</a>
                  <a href="#">Airbnb your home</a>
                  <a href="#">Host an experience</a>
                  <a href="#">Help Center</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
