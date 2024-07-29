import React, { useState, useEffect } from "react";


const OrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Fetch order details from your backend or API
    // For now, we will use a mock object
    const mockOrder = {
      orderId: "367237368",
      placedDate: "29-06-2024",
      total: 15868,
      items: [
        {
          name: "Galaxy A15, Display 6.5\" //128GB Storage + 4GB RAM //Dual SIM //5000mAh //50MP Camera /Ksly -LB",
          qty: 1,
          price: 15799,
          originalPrice: 30000,
          deliveryFees: 69,
        },
      ],
      paymentMethod: "Pay on delivery with Mobile Money and Bank Cards",
      deliveryMethod: "Pick-up Station",
      pickupStation: {
        name: "Lakoches Githunguri Station",
        address: "Neema house opposite Guthunguri Main Stage 1st floor room 109",
        area: "Guthunguri/Ndumberi, Kiambu",
        openingHours: "Mon-Fri (08:00-18:00); Sat-09:00-13:00 - Sun- Closed",
      },
      shippingDetails: {
        fulfilledBy: "Kingsly",
        deliveryDate: "between 02 July and 03 July",
      },
    };

    setOrderDetails(mockOrder);
  }, []);

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="order-details">
      <h1>Order Details</h1>
      <div className="order-summary">
        <p><strong>Order nº:</strong> {orderDetails.orderId}</p>
        <p><strong>Placed on:</strong> {orderDetails.placedDate}</p>
        <p><strong>Total:</strong> KSh {orderDetails.total}</p>
      </div>
      <h2>Items in your order</h2>
      <div className="order-items">
        {orderDetails.items.map((item, index) => (
          <div key={index} className="order-item">
            <p>{item.name}</p>
            <p><strong>QTY:</strong> {item.qty}</p>
            <p><strong>Price:</strong> KSh {item.price} <span className="original-price">KSh {item.originalPrice}</span></p>
          </div>
        ))}
      </div>
      <h2>Delivery Information</h2>
      <div className="delivery-info">
        <p><strong>Delivery Method:</strong> {orderDetails.deliveryMethod}</p>
        <p><strong>Pick-up Station:</strong> {orderDetails.pickupStation.name}</p>
        <p>{orderDetails.pickupStation.address}</p>
        <p>{orderDetails.pickupStation.area}</p>
        <p><strong>Opening Hours:</strong> {orderDetails.pickupStation.openingHours}</p>
        <p><strong>Delivery by:</strong> {orderDetails.shippingDetails.fulfilledBy}</p>
        <p><strong>Delivery Date:</strong> {orderDetails.shippingDetails.deliveryDate}</p>
      </div>
      <h2>Payment Information</h2>
      <div className="payment-info">
        <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
        <p><strong>Items total:</strong> KSh {orderDetails.items.reduce((total, item) => total + item.price, 0)}</p>
        <p><strong>Delivery Fees:</strong> KSh {orderDetails.items.reduce((total, item) => total + item.deliveryFees, 0)}</p>
        <p><strong>Total:</strong> KSh {orderDetails.total}</p>
      </div>
      <button className="track-item-btn">Track My Item</button>
    </div>
  );
};

export default OrderDetails;
