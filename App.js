import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Sell from "./pages/Sell";
import PlatformStatistics from "./pages/PlatformStatistics";
import About from "./pages/About";
import ProfileSection from "./pages/ProfileSection";
import Sellindex from "./components/Sellindex";
import Login from "./pages/Login";
import Pay from "./pages/Pay";
import ProfilePage from "./pages/ProfilePage";
import Logout from "./pages/Logout";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Header from "./components/Header";
import RecentlyAdded from "./components/RecentlyAdded";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Notifications from "./components/Notifications";
import AddProduct from "./components/AddProduct";
import CategoryProducts from "./components/CategoryProducts";
import ProtectedRoute from "./components/Admin/ProtectedRoute";
import ManageUsers from "./components/Admin/ManageUsers";
import ManageProducts from "./components/Admin/ManageProducts";
import ManageOrders from "./components/Admin/ManageOrders";
import SalesAnalytics from "./components/Admin/SalesAnalytics";
import Cart from "./pages/Cart";
import OrderDetails from "./pages/OrderDetails";
import TipsForSelling from "./blogs/TipsForSelling";
import Choose from "./blogs/Choose";
import Blog3 from "./blogs/Blog3";
import CreateBlog from "./pages/CreateBlog";
import BottomNavBar from "./components/BottomNavBar";
import "./App.css";
import "./index.css";
import { UserProvider } from "./UserContext";
import Register from "./components/Register";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the backend
    fetch("/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));

    // Fetch products from the backend
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <Router>
      <UserProvider>
        <div className="App">
          <Header />
          <div className="app-background">
            <main style={{ overflowY: "scroll" }}>
              <Routes>
                <Route path="/" element={<PageWrapper component={Home} title="Second Hand Shop" />} />
                <Route
                  path="/marketplace/shop/products/"
                  element={<PageWrapper component={Products} title="Products" products={products} addToCart={addToCart} />}
                />
                <Route path="/sell/" element={<PageWrapper component={Sell} title="Sell" />} />
                <Route path="/about/" element={<PageWrapper component={About} title="About" />} />
                <Route path="/sellindex/" element={<PageWrapper component={Sellindex} title="Sell Index" />} />
                <Route path="/account/notifications/inbox/" element={<PageWrapper component={Notifications} title="Notifications" />} />
                <Route path="/payment/" element={<PageWrapper component={Pay} title="Payment" />} />
                <Route path="/account/profile/" element={<PageWrapper component={ProfilePage} title="Account" />} />
                <Route path="/marketplace/shop/products/recently-added" element={<PageWrapper component={RecentlyAdded} title="Recently Added" />} />
                <Route path="helpcenter/contact/" element={<PageWrapper component={Contact} title="Contact" />} />
                <Route path="/product-page/" element={<PageWrapper component={AddProduct} title="Add Product" />} />
                <Route path="/login" element={<PageWrapper component={Login} title="Sign In" />} />
                <Route path="/order/details" element={<PageWrapper component={OrderDetails} title="Order Details" />} />
                <Route path="/profile" element={<PageWrapper component={ProfileSection} title="Profile" />} />
                <Route path="/blogs/tips-for-selling" element={<PageWrapper component={TipsForSelling} title="Blogs" />} />
                <Route path="/blogs/best-laptop-guide" element={<PageWrapper component={Choose} title="Blogs" />} />
                <Route path="/blogs/smartphone-trends" element={<PageWrapper component={Blog3} title="Blogs" />} />
                <Route path="/blogs" element={<PageWrapper component={CreateBlog} title="Blogs" />} />
                <Route path="/register" element={<PageWrapper component={Register} title="Sign Up" />} />
                <Route
                  path="/category/:categoryName"
                  element={<PageWrapper component={CategoryProducts} title="Category Products" />}
                />
                <Route path="/logout" element={<PageWrapper component={Logout} title="Logout" />} />
                <Route path="/help/" element={<PageWrapper component={Help} title="Help" />} />
                <Route path="/admin/login" element={<PageWrapper component={AdminLogin} title="Admin Login" />} />
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute>
                      <PageWrapper component={AdminDashboard} title="Admin Dashboard" />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/platform-statistics"
                  element={<PageWrapper component={PlatformStatistics} title="Platform Statistics" />}
                />
                <Route
                  path="/cart"
                  element={<PageWrapper component={Cart} title="Cart" cart={cart} removeFromCart={removeFromCart} />}
                />
                <Route
                  path="/admin/users"
                  element={
                    <ProtectedRoute>
                      <PageWrapper component={ManageUsers} title="Manage Users" />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/products"
                  element={
                    <ProtectedRoute>
                      <PageWrapper component={ManageProducts} title="Manage Products" />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/orders"
                  element={
                    <ProtectedRoute>
                      <PageWrapper component={ManageOrders} title="Manage Orders" />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/analytics"
                  element={
                    <ProtectedRoute>
                      <PageWrapper component={SalesAnalytics} title="Sales Analytics" />
                    </ProtectedRoute>
                  }
                />
              </Routes>
              <BottomNavBar /> {/* Add BottomNavBar here */}
            </main>
          </div>
        </div>
      </UserProvider>
    </Router>
  );
}

const PageWrapper = ({ component: Component, title, ...props }) => {
  useEffect(() => {
    document.title = `Absolute | ${title}`;
  }, [title]);

  return <Component {...props} />;
};

export default App;
