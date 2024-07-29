import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css'; // Import the CSS file

const Logout = () => {
  const [confirmLogout, setConfirmLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session/state (e.g., from localStorage or context)
    localStorage.removeItem('user'); // Remove user data from localStorage

    // Redirect to the login page after logout
    navigate('/login');
  };

  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleConfirm = () => {
    setConfirmLogout(true);
  };

  return (
    <div className="logout-container">
      {!confirmLogout ? (
        <div className="logout-content">
          <p>Are you sure you want to log out?</p>
          <button onClick={handleConfirm} className="btn btn-danger">Yes</button>
          <button onClick={handleCancel} className="btn btn-secondary">No</button>
        </div>
      ) : (
        <div className="logout-content">
          <p>Logging out...</p>
          {handleLogout()}
        </div>
      )}
    </div>
  );
};

export default Logout;
