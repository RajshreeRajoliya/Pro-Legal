import React from 'react';
import "./styles/nav.css"
const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src="https://www.prolegalserve.com/wp-content/uploads/2023/02/Pro-Legal-Serve-Logo.png" alt="Company Logo" className="company-logo" />
      </div>
      <div className="navbar-right">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmag3cBmYqrweGwrsL5h4RL5UqpSi9z275w&usqp=CAU" alt="Notification Bell" className="notification-bell" />
        <div className="user-profile">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Q3DfDE-53xq34AdBRXdK8YNJwLexzKQVRA&usqp=CAU" alt="User" className="user-image" />
          <span className="user-name">John Deo</span>
          <div className="user-status">
            <img src = "https://cdn-icons-png.flaticon.com/512/25/25623.png" className="user-status-text"></img>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className="user-status-icon"
            >
              <path
                fill="#000000"
                d="M6 8.5a.5.5 0 0 1-.354-.853l2.646-2.647a.5.5 0 1 1 .708.707L6.354 8.354A.498.498 0 0 1 6 8.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

