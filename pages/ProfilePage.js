// src/components/ProfilePage.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import './ProfilePage.css'; // Add your CSS file for styling

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user profile data
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/profile'); // Update with your API endpoint
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleEditProfile = () => {
    navigate('/account/profile/edit');
  };

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h2 className="profile-heading">My Profile</h2>
      <div className="profile-details">
        <img 
          src={user.profilePicture || 'default-profile.png'} 
          alt="Profile" 
          className="profile-img" 
        />
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Points Balance:</strong> {user.points} Points</p>
          <button onClick={handleEditProfile} className="edit-profile-button">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
