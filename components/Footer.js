import React from 'react';
import { Link } from 'react-router-dom';
//import './Footer.css'; // Make sure to create and import a CSS file for custom styles

const categories = [
  "Home & Office",
  "Electronics",
  "Phones & Accessories",
  "Computing",
  "TVs & Audio Systems",
  "Clothes & Fashion",
  "Appliances",
  "Sports",
  "Gaming",
  "Baby Toys",
  "Garden & Outdoor",
  "Automotive"
];

function Footer() {
  return (
    <footer className="footer">
      <div className="containerfoot">
        <div className="row">
          <div className="col-md-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Shop</Link></li>
              <li><Link to="/sell">Sell</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Product Categories</h5>
            <ul className="list-unstyled">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link to={`/category/${category}`} className="category-link">{category}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow us:</h5>
            <a href="#"><i className="bi bi-facebook"></i></a> |
            <a href="#"><i className="bi bi-twitter"></i></a> |
            <a href="#"><i className="bi bi-instagram"></i></a>
            <br />
            <form action="/subscribe" method="post">
              <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <button type="submit" className="btn btn-get-started">Subscribe</button>
            </form>
          </div>
          <div className="col-md-4" style={{ color: 'black' }}>
            <p><Link to="/conditions">Privacy Policy</Link> | <Link to="/conditions">Terms & Conditions</Link></p>
          </div>
        </div>
        <div className="text-center">
          <p>© {new Date().getFullYear()} <span style={{ color: 'orange' }}>ABSO</span><span style={{ color: 'red' }}>LUTE</span> Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
