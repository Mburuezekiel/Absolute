import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from "../assets/logo1.jpg"; // Ensure the correct path to your logo

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const user = { email, password };

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          window.location.reload(); // Refresh the page
        }, 1000);
      } else {
        setError(data.error || 'Login failed');
        setLoading(false);
      }
    } catch (err) {
      setError('Failed to log in');
      setLoading(false);
    }
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <div className="register-container">
      {loading && <div className="loading-logo"></div>}
      {success && (
        <div className="success-message">
          <p>Login successful!</p>
          {/* <button onClick={handleNavigateHome}>I'm in</button> */}
        </div>
      )}
      {!success && (
        <form onSubmit={handleLogin}>
          <h2>
            <span style={{ color: "orange" }}>
              <img src={logo} alt="Second Hand Shop" className="logo" /> <br />
              Log
            </span>
            <span style={{ color: "red" }} className="logo">in</span>
          </h2>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn btn-get-started">Login</button>
          <span>New on Absolute Haven? <Link to="/register">Sign up</Link> </span>
        </form>
      )}
    </div>
  );
};

export default Login;
