import React from 'react';
import { Link } from 'react-router-dom';
import { Bar, Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto';
//import './PlatformStatistics.css'; // Ensure you have this CSS file

const PlatformStatistics = () => {
  // Sample data for charts
  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'User Growth',
        data: [50, 100, 150, 200, 250, 300],
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  const revenueData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [3000, 4000, 5000, 6000],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const activeUsersData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Active Users',
        data: [200, 300, 400, 500, 600, 700, 800],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="cardbody">
      {/* <header className="header">
        <h1>Platform Statistics</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">My Profile</Link>
          <Link to="/Platform Statistics" className="active">Platform Statistics</Link>
        </nav>
      </header> */}
      <main>
      <h1 className="navbar navbar-expand-lg navbar-light bg-warning" style={{ textAlign: 'center' }}>Platform Statistics</h1>
        <div className="chart-row">
          <section className="statistic-section">
            <h2>User Growth</h2>
            <Bar data={userGrowthData} />
          </section>
          {/* <section className="statistic-section">
            <h2>Revenue</h2>
            <Pie data={revenueData} />
          </section> */}
        
        
          <section className="statistic-section">
            <h2>Active Users</h2>
            <Line data={activeUsersData} />
          </section>
          
     
          </div>
        <section className="statistic-section">
          <h2>Additional Metrics</h2>
          <ul>
            <li>Total Users: 5000</li>
            <li>Total Products: 1200</li>
            <li>New Signups This Month: 200</li>
            <li>Average Session Duration: 5 mins</li>
          </ul>
        </section>
      
      </main>
    </div>
  );
};

export default PlatformStatistics;
