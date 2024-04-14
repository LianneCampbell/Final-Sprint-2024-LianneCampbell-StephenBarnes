// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import useParams and Link components from react-router-dom for accessing URL parameters and navigation
import { useShoppingCart } from '../context/ShoppingCartContext'; // Import custom hook for accessing shopping cart context

// Functional component for displaying product details
function ProductDetails() {
  // Extract product ID from URL parameters
  const { id } = useParams();
  // State to store product details
  const [product, setProduct] = useState(null);
  // Access addCartItem function from shopping cart context
  const { addCartItem } = useShoppingCart();

  // Fetch product details from API when component mounts or ID changes
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch(error => console.error(`Error fetching product ${id}:`, error));
  }, [id]);

  // If product details are not yet fetched, display loading message
  if (!product) {
    return <div>Loading...</div>;
  }

  // Handler for adding the current product to the cart
  const handleAddToCart = () => {
    addCartItem(product);
  };

  // Render product details
  return (
    <div className="product-border">
      <h2>{product.title}</h2>
      {/* Display product image */}
      <img src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
      {/* Display product description */}
      <p>{product.description}</p>
      {/* Display product price */}
      <p>Price: ${product.price}</p>
      {/* Display product category */}
      <p>Category: {product.category}</p>
      {/* Display product rating and reviews */}
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      {/* Button to add product to cart */}
      <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      <br />
      <br />
      {/* Link to navigate back to all products */}
      <Link to="/" className="add-to-cart">Back to All Products</Link>
    </div>
  );
}

// Export the component
export default ProductDetails;