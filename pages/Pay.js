import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Pay.css"; // Import a CSS file for custom styles
import poster1 from "../assets/poster1.png";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/intro_img.jpg";
import poster4 from "../assets/poster4.png";

const Pay = () => {
  const tillNumber = 4134440;
  const [currentAd, setCurrentAd] = useState(0);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const product_id = queryParams.get("product_id");
  const product_name = queryParams.get("product_name");
  const product_price = queryParams.get("product_price");
  const product_description = queryParams.get("product_description");
  const product_image = queryParams.get("product_image");

  const ads = [
    { text: "Great discounts on our products!", image: poster1 },
    { text: "Free shipping on orders over KSh 1000!", image: poster2 },
    { text: "New arrivals in store now!", image: poster3 },
    {
      text: "Find Great Deals on Second-Hand Items. Explore a wide range of pre-loved goods at affordable prices!",
      image: poster4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % ads.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="main-container">
      <h1
        className="navbar navbar-expand-lg navbar-light bg-warning"
        style={{ textAlign: "center" }}
      >
        Payment
      </h1>

      <div className="content">
        <div className="zigzag-description">
          <div className="address-info">
            <div className="section-title">
              <strong>Customer Address</strong>
            </div>
            <div>Name:</div>
            <div>Phone number:</div>
            <div>Email:</div>
          </div>
          <div className="product-info">
            <div className="section-title">
              <strong>Product Details</strong>
            </div>
            <img
              src={product_image}
              alt={product_name}
              className="product-img"
            />
            <h3>{product_name}</h3>
            <p>
              <strong>Description:</strong> {product_description}
            </p>
            <p>
              <strong>Price:</strong> {product_price}
            </p>
          </div>

          <div className="delivery-details">
            <div className="section-title">
              <strong>Delivery Details</strong>
            </div>
            <div>(from KSh 159), Nairobi</div>
            <div>Delivery takes 2-3 days</div>
          </div>

          <div>
            <label htmlFor="pickup-station">
              <strong>Pick-up Station:</strong>
            </label>
            <select id="pickup-station" name="pickup-station"></select>
          </div>

          <div>
            Direct payments are directed to Till Number:{" "}
            <strong>{tillNumber}</strong>
          </div>

          <div className="confirm-btn">
            <button className="btn">Check Out KSh {product_price}</button> </div>
            <div>
              By proceeding, you are automatically accepting the{" "}
              <a href="conditions.php">Terms & Conditions</a>
           
          </div>

          <div>Thank you for shopping with us. We value you.</div>
          <div>
            <b>
              <i>
                <span style={{ color: "orange" }}>ABSO</span>
                <span style={{ color: "red" }}>LUTE</span> C.E.O, Ezekiel
                Njuguna Mburu
              </i>
            </b>
          </div>
        </div>
      </div>

      {/* <div className="ad-container">
        <div className="ad-content" style={{ transform: `translateX(-${currentAd * 100}%)` }}>
          {ads.map((ad, index) => (
            <div key={index} className="ad">
              <img src={ad.image} alt={`Poster ${index + 1}`} className="poster-image" />
              <div>{ad.text}</div>
            </div>
          ))}
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
      </div> */}
    </div>
  );
};

export default Pay;
