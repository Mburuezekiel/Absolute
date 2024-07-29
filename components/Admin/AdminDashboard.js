// src/components/AdminDashboard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      </header>
      <nav className="admin-nav">
        <ul>
          <li><Link to="/admin/users"><i className="bi bi-people"></i> Manage Users</Link></li>
          <li><Link to="/admin/products"><i className="bi bi-box"></i> Manage Products</Link></li>
          <li><Link to="/admin/orders"><i className="bi bi-cart"></i> Manage Orders</Link></li>
          <li><Link to="/admin/analytics"><i className="bi bi-bar-chart"></i> Sales Analytics</Link></li>
        </ul>
      </nav>
      <main className="admin-main">
        <h2>Welcome to the Admin Dashboard</h2>
        <p>Select an option from the menu to get started.</p>
      </main>
    </div>
  );
};

export default AdminDashboard;
