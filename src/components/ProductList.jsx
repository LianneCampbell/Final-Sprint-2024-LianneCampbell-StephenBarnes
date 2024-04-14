// Shopping App Project for Final Sprint
// Names: Lianne Campbell & Stephen Barnes
// Date Submitted: April 14th 2024


// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import ProductListItem from './ProductListItem'; // Import ProductListItem component
import { useShoppingCart } from '../context/ShoppingCartContext'; // Import custom hook for accessing shopping cart context
import { FaTimes } from 'react-icons/fa'; // Import FaTimes icon from react-icons/fa
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation
import '../App.css'; // Import CSS file for styling

// Functional component for displaying a list of products
function ProductList() {
  // State to store list of products
  const [products, setProducts] = useState([]);
  // Access addCartItem, cartItems, and deleteCartItem functions from shopping cart context
  const { addCartItem, cartItems, deleteCartItem } = useShoppingCart();

  // Fetch list of products from API when component mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Handler for removing item from cart
  const handleRemoveFromCart = async (id) => {
    try {
      // Update the local state by deleting item from cart
      deleteCartItem(id);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  // Render product list
  return (
    <div className="product-border">
      <h1><dfn title="A list of all available items, You can view details, or Add to cart.">Product List</dfn></h1>
      <div className="shopping-cart">
        <h2><dfn title="Items that you select with add to cart will appear here, Press checkout to continue.">Shopping Cart</dfn></h2>
        <ul>
          {/* Render shopping cart items */}
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} - ${item.price}
              {/* Button to remove item from cart */}
              <FaTimes
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => handleRemoveFromCart(item.id)}
              />
            </li>
          ))}
          {/* Link to navigate to checkout page */}
          <Link to="/checkout">
            <button className="check-out-button">Check-out</button>
          </Link>
        </ul>
      </div>
      {/* Render product list */}
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id}>
            <div className="product">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">Price: ${product.price}</p>
              {/* Display product image */}
              <img src={product.image} alt={product.title} style={{ maxWidth: '200px', maxHeight: '200px' }} />
              {/* Pass product and addToCart function as props to ProductListItem */}
              <ProductListItem product={product} addToCart={addCartItem} />
              <br />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export the component
export default ProductList;