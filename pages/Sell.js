import React, { useState } from 'react';

const Sell = () => {
  const [product_name, setProduct_name] = useState('');
  const [product_description, setProduct_description] = useState('');
  const [product_price, setProduct_price] = useState('');
  const [product_images, setProduct_images] = useState([]);
  const [product_location, setProduct_location] = useState('');
  const [product_category, setProduct_category] = useState('');
  const [product_quantity, setProduct_quantity] = useState('');
  const [product_status, setProduct_status] = useState('new');
  const [reason_for_sale, setReason_for_sale] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const productData = {
      product_name,
      product_description,
      product_price: Number(product_price),
      product_images,
      product_location,
      product_category,
      product_quantity: Number(product_quantity),
      product_status,
      reason_for_sale,
    };

    try {
      const response = await fetch('http://localhost:5000/api/products/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        setLoading(false);
        setSuccess(true);
        // Reset form fields after successful submission
        setProduct_name('');
        setProduct_description('');
        setProduct_price('');
        setProduct_images([]);
        setProduct_location('');
        setProduct_category('');
        setProduct_quantity('');
        setProduct_status('new');
        setReason_for_sale('');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add product');
      }
    } catch (error) {
      console.error('Failed to add product:', error);
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sell a Product</h2>
      {loading && <p>Loading...</p>}
      {success && <p>Product added successfully!</p>}
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={product_name}
          onChange={(e) => setProduct_name(e.target.value)}
          required
        />
        <textarea
          placeholder="Product Description"
          value={product_description}
          onChange={(e) => setProduct_description(e.target.value)}
          required
        ></textarea>
        <input
          type="number"
          placeholder="Product Price"
          value={product_price}
          onChange={(e) => setProduct_price(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Product Location"
          value={product_location}
          onChange={(e) => setProduct_location(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Product Category"
          value={product_category}
          onChange={(e) => setProduct_category(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Product Quantity"
          value={product_quantity}
          onChange={(e) => setProduct_quantity(e.target.value)}
          required
        />
        <select
          value={product_status}
          onChange={(e) => setProduct_status(e.target.value)}
        >
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
        <textarea
          placeholder="Reason for Sale"
          value={reason_for_sale}
          onChange={(e) => setReason_for_sale(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Sell;
