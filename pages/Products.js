import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import Categories from "./Categories";
import "./Products.css";
import logo from "../assets/logo1.jpg";
import { useNavigate } from "react-router-dom";
import poster1 from "../assets/poster1.png";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/intro_img.jpg";

function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [currentAd, setCurrentAd] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const ads = [
    { text: "Free shipping on orders over KSh 1000!", image: poster2 },
    { text: "New arrivals in store!", image: poster3 },
    {
      text: "Find Great Deals on Second-Hand Items. Explore a wide range of pre-loved goods at affordable prices!",
      image: poster1,
    },
    { text: "Check Out our Latest deals!", image: poster3 },
  ];

  const handleSearch = () => {
    // Trigger a re-render with the updated filtered results
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products"); // Replace with your backend URL
        if (response && Array.isArray(response.data)) {
          setProducts(
            response.data.sort(
              (a, b) => new Date(b.time_added) - new Date(a.time_added)
            )
          );
        } else {
          console.error("API response is not an array", response);
          setProducts([]);
        }
      } catch (error) {
        console.error("Failed to fetch products", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    
    // Refresh data every 30 seconds
    const refreshInterval = setInterval(fetchProducts, 30000); // 30 seconds

    // Clear the interval on component unmount
    return () => clearInterval(refreshInterval);
  }, []);

  useEffect(() => {
    const adInterval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % ads.length);
    }, 3000);
    return () => clearInterval(adInterval);
  }, [ads.length]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const filterProductsByCategory = (products) => {
    return selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.product_category === selectedCategory
        );
  };

  const filterProductsByPrice = (products) => {
    if (selectedPriceRange === "All") {
      return products;
    }

    const [min, max] = selectedPriceRange.split("-").map(Number);
    return products.filter(
      (product) =>
        (min ? product.product_price >= min : true) &&
        (max ? product.product_price <= max : true)
    );
  };

  const convertPriceToKsh = (price) => {
    if (typeof price === "string" && price.startsWith("$")) {
      const usdPrice = parseFloat(price.substring(1));
      const kshPrice = usdPrice * 110; // Assume 1 USD = 110 KSh for conversion
      return `KSh ${kshPrice.toFixed(2)}`;
    }
    return `KSh ${price}`;
  };

  const filteredProducts = filterProductsByPrice(
    filterProductsByCategory(products)
  ).filter((product) =>
    [product.product_name, product.product_description, product.product_location, product.product_category, product.product_status, product.reason_for_sale]
      .filter(field => field)  // Filter out undefined or null fields
      .some(field => field.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  

  const uniqueCategories = [
    "All",
    ...new Set(products.map((product) => product.product_category)),
  ];
  const priceRanges = [
    "All",
    "1-100",
    "101-200",
    "201-300",
    "301-400",
    "401-500",
    "501-1000",
    "1001-2000",
    "2001-3000",
    "3001-4000",
    "4001-5000",
    "Above 5000",
  ];

  const handlePurchase = (product) => {
    const queryParams = new URLSearchParams({
      product_id: product._id,
      product_name: product.product_name,
      product_price: product.product_price,
      product_description: product.product_description,
      product_image: product.product_image,
    }).toString();
    navigate(`/payment?${queryParams}`);
  };

  const handleContactSeller = (product) => {
    const message =
      `Hi, I am interested in your product: *${encodeURIComponent(
        product.product_name
      )}*.\n` +
      `Price: *${convertPriceToKsh(product.product_price)}*.\n` +
      `More details at: *${encodeURIComponent(
        `https://knight.businesscareerconsulting.co.ke/shop/products?product?item_id=${product._id}`
      )}*`;
    const whatsappURL = `https://wa.me/254714487081?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date) ? "Invalid Date" : date.toLocaleString();
  };

  if (loading) {
    return (
      <div className="loading">
        <img src={logo} alt="Loading" className="loading-logo" />
        <br />
        <strong>Loading...</strong>
      </div>
    );
  }

  return (
    
    <div className="products-container">
      <h2 className="products-heading">
        <strong>Products</strong>
      </h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products, categories, and product descriptions..."
          className="search-input"
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          className="btn2 btn-primary search-button"
          onClick={handleSearch}
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div className="filter-row">
        <div className="filter-group">
          <label htmlFor="categorySelect" className="filter-label">
            Category:
          </label>
          <select
            id="categorySelect"
            className="filter-select"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="priceRangeSelect" className="filter-label">
            Price Range:
          </label>
          <select
            id="priceRangeSelect"
            className="filter-select"
            value={selectedPriceRange}
            onChange={handlePriceRangeChange}
          >
            {priceRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>
      <h5 className="products-heading2">
        <strong>Products Categories</strong>
      </h5>
      <Categories
        categories={uniqueCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="popup-ad">
        <div className="ad-text">{ads[currentAd].text}</div>
      </div>
      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <img src={logo} alt="No Products Found" className="no-products-logo" />
          <strong>No products found.</strong>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product._id}>
              <img
                src={product.product_image}
                alt={product.product_name}
                className="product-img"
              />
              <div className="badge">
                {product.product_status ? product.product_status : 'Used'}
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.product_name}</h3>
                <p className="product-category">
                  <strong>Category:</strong> {product.product_category}
                </p>
                <p className="product-description">
                  <strong>Description:</strong> {product.product_description}
                </p>
                <p className="product-location">
                  <strong>Location:</strong> {product.product_location}
                </p>
                <p className="product-price">
                  <strong>Price:</strong>{" "}
                  {convertPriceToKsh(product.product_price)}
                </p>
                <p className="product-time">
                  <strong>Added:</strong>{" "}
                  {formatDate(product.time_added)}
                </p>
                <div className="product-buttons">
                  <button
                    onClick={() => handlePurchase(product)}
                    className="buy-button"
                  >
                    <i className="bi bi-cash-coin"></i> Buy Now
                  </button>
                  <button
                    onClick={() => handleContactSeller(product)}
                    className="contact-button"
                  >
                    <i className="bi bi-whatsapp"></i> Contact Seller
                  </button>
                  <button className="wishlist-button">
                    <FaHeart className="wishlist-icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
