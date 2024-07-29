import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProfileSection = () => {
  const [user, setUser] = useState({ isLoggedIn: false, name: '', profilePic: '' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser({ isLoggedIn: true, name: storedUser.name, profilePic: storedUser.profilePic });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser({ isLoggedIn: false, name: '', profilePic: '' });
    navigate('/logout');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="profile-section">
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-toggle" type="button">
          <div className="profile-pic-container">
            {user.isLoggedIn && user.profilePic ? (
              <img src={`/uploads/${user.profilePic}`} alt="Profile" className="profile-pic" />
            ) : (
              <i className="bi bi-person-circle default-icon"></i>
            )}
          </div>
          {user.isLoggedIn ? `Hi, ${user.name}` : 'Hello, Guest'}
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            {user.isLoggedIn ? (
              <>
                <Link to="/account/profile/" className="dropdown-item">My Profile</Link>
                <Link to="/favourites" className="dropdown-item">Favourites</Link>
                <button onClick={handleLogout} className="dropdown-item">Log Out</button>
              </>
            ) : (
              <Link to="/login" className="dropdown-item">Log In</Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;