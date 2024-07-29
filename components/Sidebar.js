import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import "./Sidebar.css"; // Ensure you have a CSS file for styling

function Sidebar() {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const [menu, setMenu] = useState("");

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
  };

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      {collapsed && (
        <button className="burger-btn" onClick={toggleSidebar}>
          <i className={`bi ${collapsed ? "bi-list" : "bi-x"}`}></i>
        </button>
      )}
      <aside className={collapsed ? "collapsed" : ""}>
        {!collapsed && (
          <button className="close-btn" onClick={toggleSidebar}>
            <i className="bi bi-x"></i>
          </button>
        )}
        <h5 className="sidebar-header orange-background">
          {!collapsed && (
            <b>
              <i className="bi bi-grid-fill bi-icon"></i> Dashboard
            </b>
          )}
        </h5>
        <ul className="list-unstyled">
          <Link style={{ textDecoration: "none" }} to="/" onClick={handleLinkClick}>
            <li
              onClick={() => {
                setMenu("home");
              }}
            >
              <i className="bi bi-house-door"></i> {!collapsed && "Home"}
              {menu === "home" ? <hr /> : <></>}
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/shop/products" onClick={handleLinkClick}>
            <li
              onClick={() => {
                setMenu("shop");
              }}
            >
              <i className="bi bi-cart4"></i> {!collapsed && "Shop"}
              {menu === "shop" ? <hr /> : <></>}
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/sellindex" onClick={handleLinkClick}>
            <li
              onClick={() => {
                setMenu("sell");
              }}
            >
              <i className="bi bi-plus-circle"></i> {!collapsed && "Sell"}
              {menu === "sell" ? <hr /> : <></>}
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about" onClick={handleLinkClick}>
            <li
              onClick={() => {
                setMenu("about");
              }}
            >
              <i className="bi bi-person-lines-fill"></i> {!collapsed && "About"}
              {menu === "about" ? <hr /> : <></>}
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="helpcenter/contact" onClick={handleLinkClick}>
            <li
              onClick={() => {
                setMenu("contact");
              }}
            >
              <i className="bi bi-chat-right-dots"></i> {!collapsed && "Contact"}
              {menu === "contact" ? <hr /> : <></>}
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/help" onClick={handleLinkClick}>
            <li
              onClick={() => {
                setMenu("Help");
              }}
            >
              <i className="bi bi-question-circle"></i> {!collapsed && "Help"}
              {menu === "Help" ? <hr /> : <></>}
            </li>
          </Link>
          <ThemeSwitcher />
        </ul>
       
        <h5 className="sidebar-header orange-background">
          {!collapsed && (
            <b>
              <i className="bi bi-bar-chart-line-fill"></i> Stats
            </b>
          )}
        </h5>

        <ul className="list-unstyled">
          <Link style={{ textDecoration: "none" }} to="/offers" onClick={handleLinkClick}>
            <li
              onClick={() => {
                setMenu("Offers");
              }}
            >
              <i className="bi bi-lightning"></i> {!collapsed && "Top Offers"}
              {menu === "Offers" ? <hr /> : <></>}
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/recently-added" onClick={handleLinkClick}>
            <li
              onClick={() => {
                setMenu("Added");
              }}
            >
              <i className="bi bi-plus-square"></i> {!collapsed && "Recently Added"}
              {menu === "Added" ? <hr /> : <></>}
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/saved" onClick={handleLinkClick}>
            <li
              onClick={() => {
                setMenu("History");
              }}
            >
              <i className="bi bi-clock-history"></i> {!collapsed && "Order History"}
              {menu === "History" ? <hr /> : <></>}
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/platform-statistics" onClick={handleLinkClick}>
            <li
              onClick={() => {
                setMenu("Statistics");
              }}
            >
              <i className="bi bi-graph-up"></i> {!collapsed && "Platform Statistics"}
              {menu === "Statistics" ? <hr /> : <></>}
            </li>
          </Link>
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
