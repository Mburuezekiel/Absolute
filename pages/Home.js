import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import intro from "../assets/intro_img.jpg";
import sell from "../assets/sell.jpeg";
import seller from "../assets/seller.jpeg";
import poster1 from '../assets/poster1.png';
import poster2 from '../assets/poster2.jpg';
import poster3 from '../assets/intro_img.jpg';

function Home() {
  const [currentAd, setCurrentAd] = useState(0);
  const ads = [
    // { text: "Great discounts on our products!", image: poster1 },
    { text: "Free shipping on orders over KSh 1000!", image: poster2 },
    { text: "New arrivals in store!", image: poster3 },
  ];

  const topCategories = [
    { id: 1, name: "Smartphones", link: "/category/smartphones" },
    { id: 2, name: "Laptops", link: "/category/laptops" },
    { id: 3, name: "Tablets", link: "/category/tablets" },
    { id: 4, name: "Audio", link: "/category/audio" },
  ];

  const recentBlogs = [
    { id: 1, title: "10 Tips for Selling Your Items", link: "./blogs/tips-for-selling" },
    { id: 2, title: "Choosing the Best Laptop for You", link: "/blogs/best-laptop-guide" },
    { id: 3, title: "Smartphone Trends in 2024", link: "/blogs/smartphone-trends" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % ads.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="home-background">
      
      <div className="containererer">
        <div className="feed">
          <div className="feed-header">
          
          

          {/* Intro section */}
          <div className="intro">
            <div className="intro-text">
              <h1>Welcome to <span style={{ color: "orange" }}>ABSO</span><span style={{ color: "red" }}>LUTE</span> Haven</h1>
              </div>
              <p className="brand-description">Get More, Spend Less</p>
              <h3>Explore Our Marketplace</h3>
              <p>
                Discover unique treasures and embrace the charm of pre-loved goods.
                Monetize your unused items and reach potential buyers across the platform.
              </p>
              <Link to="/marketplace/shop/products" className="btn btn-get-started">Shop Now</Link>
            </div>
            <img src={intro} alt="Second Hand Shop" className="intro-img" />
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

          {/* Services section */}
          <div className="services">
            <div className="service">
              <img src={sell} alt="Sell Item 1" className="service-img" />
              <div className="service-text">
                <h2>Getting Started</h2>
                <p>Why settle for new when you can embrace the charm of pre-loved treasures?</p>
                <Link to="/marketplace/shop/products" className="btn btn-get-started">
                  <i className="bi bi-cart-plus"></i> Shop Now
                </Link>
              </div>
            </div>
            <div className="service">
              <img src={seller} alt="Sell Item 2" className="service-img" />
              <div className="service-text">
                <h2>Start Making Money</h2>
                <p>Sell your pre-loved items effortlessly with <span style={{ color: "orange" }}>ABSO</span><span style={{ color: "red" }}>LUTE</span> Haven.</p>
                <Link to="/sell" className="btn btn-get-started">
                  Start Selling
                </Link>
              </div>
            </div>
          </div>
          </div>

          <div className="ads">
  <div className="yellow-background-container" style={{ backgroundColor: 'yellow',fontSize:'bold', padding: '20px', marginBottom: '40px' }}>
  <strong> <h2 style={{ marginBottom: '20px' }}> <i className="bi bi-cart4 bi-icon"></i> Find Great Deals on
    Second-Hand Items</h2> </strong>
    <div className="slideshow-container">
      <div className="ad-container">
        <div className="ad-content" style={{ transform: `translateX(-${currentAd * 100}%)` }}>
          {ads.map((ad, index) => (
            <div key={index} className="ad">
              <img src={ad.image} alt={`Poster ${index + 1}`} className="poster-image" />
              <div>{ad.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="ad-indicators">
        {ads.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentAd === index ? "active" : ""}`}
            onClick={() => setCurrentAd(index)}
          ></button>
        ))}
      </div>
    </div>
  </div>
</div>


        

          {/* Additional Sections */}
          <div className="extra-section">
            <h2>Top Categories</h2>
            <div className="category-list">
              {topCategories.map((category) => (
                <Link key={category.id} to={category.link} className="category-item">
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="extra-section">
            <h2>Recent Blogs</h2>
            <div className="blog-list">
              {recentBlogs.map((blog) => (
                <Link key={blog.id} to={blog.link} className="blog-item">
                  {blog.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Testimonials section */}
          <div className="extra-section">
            <h2>Customer Testimonials</h2>
            <div className="testimonial-list">
              <div className="testimonial-item">
              <p>
      "<span style={{ color: 'orange' }}>ABSO</span><span style={{ color: 'red' }}>LUTE</span> Haven revolutionized my shopping experience. The range of second-hand items available is impressive, and the prices are unbeatable. I've found unique treasures here that I couldn't find anywhere else."
    </p>
                <strong>-  <b>Mitchell Muraya</b></strong> <br />
      Fashion Enthusiast
              </div>
              <div className="testimonial-item">
                <p>
      "I've been a loyal customer of <span style={{ color: 'orange' }}>ABSO</span><span style={{ color: 'red' }}>LUTE</span> Haven for years now. Not only do they offer great deals on second-hand goods, but their commitment to sustainability aligns with my values. It feels good to shop consciously and support local businesses."
    </p>
  
      <b>- Zack Smith</b>
      <br />
      Environmental Advocate
              </div>
              <div className="testimonial-item">
               <p>
      "<span style={{ color: 'orange' }}>ABSO</span><span style={{ color: 'red' }}>LUTE</span> Haven is my go-to destination for affordable, high-quality second-hand items. Whether I'm looking for clothing, electronics, or home decor, I always find something interesting. The ease of browsing and the variety of products keep me coming back for more."
    </p>
    <p className="testimonial-author">
      <b>- Eric Njuguna</b>
      <br />
      Thrifty Shopper
    </p>
              </div>
              
            </div>
          </div>

          {/* Contact section */}
          <div className="contact">
            <h2>Contact <span style={{ color: "orange" }}>ABSO</span><span style={{ color: "red" }}>LUTE</span></h2>
            <p>Address: <strong>Githunguri, Kiambu</strong></p>
            <p>
              Phone: <strong>0115 812700</strong> <br />
              Business Hours: <strong>24/7 services</strong><br />
              Email: <strong><a href="mailto:knightsavermall%40gmail.com">knightsavermall@gmail.com</a></strong> <br />
              <Link to="/about">About us</Link>
            </p>
          </div>
        </div>
      </div>
  
  );
}

export default Home;
