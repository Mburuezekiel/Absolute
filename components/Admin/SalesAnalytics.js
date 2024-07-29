// src/components/SalesAnalytics.js
import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';

const SalesAnalytics = () => {
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
        data: [100, 200, 300, 400, 500, 600, 700],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="sales-analytics">
      <h2>Sales Analytics</h2>
      <div className="chart-container">
        <div className="chart">
          <h3>User Growth</h3>
          <Bar data={userGrowthData} />
        </div>
        <div className="chart">
          <h3>Revenue</h3>
          <Pie data={revenueData} />
        </div>
        <div className="chart">
          <h3>Active Users</h3>
          <Line data={activeUsersData} />
        </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;
