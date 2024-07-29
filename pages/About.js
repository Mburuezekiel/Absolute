import React from 'react';
import './About.css'; // Ensure you create this CSS file
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.jpg'; // Adjust the path if necessary
import ceoImage from '../assets/my pic.jpg'; // Adjust the path if necessary

function About() {
  return (
    <div className="about-container">
      {/* <div className="logo">
        <img src={logo} alt="Knight Saver Mall Logo" />
      </div> */}
      <strong className="brand-name">
              <h2>
                <span style={{ color: "orange" }}> ABSO</span>
                <span style={{ color: "red" }}>LUTE</span>
              </h2>
            </strong>

      {/* Vision Section */}
      <h3 className="vision-heading">Our Vision</h3>
      <div className="vision-container">
        <div className="vision-grid">
          <div className="vision-item">
            <i className="bi bi-arrow-repeat bi-icon"></i>
            <span>Promote sustainable living by offering high-quality second-hand items.</span>
          </div>
          <div className="vision-item">
            <i className="bi bi-people bi-icon"></i>
            <span>Build a community of like-minded individuals who value thrift and eco-consciousness.</span>
          </div>
          <div className="vision-item">
            <i className="bi bi-people bi-icon"></i>
            <span>Empower individuals to find affordable yet stylish options for their everyday needs.</span>
          </div>
        </div>
      </div>

      {/* Knight Saver Second Hand Shop Today Section */}
      <div className="jumia-today-container">
        <h3 className="jumia-heading">
          <span style={{ color: 'orange' }}>ABSO</span>
          <span style={{ color: 'red' }}>LUTE</span> Haven Today
        </h3>
        <div className="jumia-grid">
          <div className="jumia-item">
            <i className="bi bi-box bi-icon"></i> <strong>Products:</strong> 5,000,000
          </div>
          <div className="jumia-item">
            <i className="bi bi-globe2 bi-icon"></i> <strong>Branches in Kenya:</strong> 3
          </div>
          <div className="jumia-item">
            <i className="bi bi-shop bi-icon"></i> <strong>International & National Brands:</strong> 820
          </div>
          <div className="jumia-item">
            <i className="bi bi-people bi-icon"></i> <strong>Women Managers:</strong> 50%
          </div>
          <div className="jumia-item">
            <i className="bi bi-person-plus bi-icon"></i> <strong>Subscribers:</strong> 500,000
          </div>
          <div className="jumia-item">
            <i className="bi bi-people bi-icon"></i> <strong>Employees:</strong> 50
          </div>
          <div className="jumia-item">
            <i className="bi bi-eye bi-icon"></i> <strong>Monthly Visitors:</strong> 1,000
          </div>
          <div className="jumia-item">
            <i className="bi bi-cart4 bi-icon"></i> <strong>Orders Across Kenya:</strong> 50,000
          </div>
          <div className="item">
            <strong>Absolute Haven</strong> offers the widest assortment at an unbeatable price.
          </div>
        </div>
   
      <div class="feature-section">
      <div class="feature-box">
    <div class="icon-wrapper">
      <div class="icon-background">
        <i class="bi bi-truck"></i>
      </div>
    </div>
    <div class="feature-title">Free Shipping</div>
    <div class="feature-description">Free on orders over 2000</div>
  </div>
  <div class="feature-box">
    <div class="icon-wrapper">
      <div class="icon-background">
        <i class="bi bi-shield-lock"></i>
      </div>
    </div>
    <div class="feature-title">Security Payment</div>
    <div class="feature-description">100% security payment</div>
  </div>
  <div class="feature-box">
    <div class="icon-wrapper">
      <div class="icon-background">
        <i class="bi bi-arrow-repeat"></i>
      </div>
    </div>
    <div class="feature-title">7 Days Return Policy</div>
    <div class="feature-description">7-day money guarantee</div>
  </div>
  <div class="feature-box">
    <div class="icon-wrapper">
      <div class="icon-background">
        <i class="bi bi-telephone"></i>
      </div>
    </div>
    <div class="feature-title">24/7 Support</div>
    <div class="feature-description">Support every time fast</div>
  </div>
  </div>
  </div>
      {/* CEO Section */}
      <div className="vision-container">
        <h3 className="ceo-heading">Meet The CEO</h3>
        <div className="ceo-item">
          <div className="image-container">
            <img src={ceoImage} alt="Ezekiel Eric" className="ceo-image" />
          </div>
          <p className="ceo-description">
            Ezekiel Eric is a seasoned executive with over 5 years of experience in the thrift industry. As CEO of <span style={{ color: 'orange' }}>ABSO</span><span style={{ color: 'red' }}>LUTE</span> Haven, Eric is responsible for setting the overall direction and strategy of the company. He is committed to ensuring that Absolute Second-Hand Haven remains at the forefront of the industry, providing our customers with the best possible products and services.
          </p>
        </div>
        <div className="ceo-role">
          <i className="bi bi-briefcase bi-icon"></i> <strong>Founder/CEO</strong> 
        </div>

        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">Contact <strong><span style={{ color: 'orange' }}>ABSO</span><span style={{ color: 'red' }}>LUTE</span> Haven</strong></h2>
            <hr />
            <p>Address: <strong>Githunguri, Kiambu</strong></p>
            <p>Phone: <strong>0115 812700</strong> <br />Business Hours: <strong>24/7 services</strong><br /><strong><a href="mailto:knightsavermall%40gmail.com">knightsavermall@gmail.com</a> <br /><a href="about.php">About us</a></strong></p>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
