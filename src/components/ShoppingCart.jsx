// Shopping App Project for Final Sprint
// Names: Lianne Campbell & Stephen Barnes
// Date Submitted: April 14th 2024


// Import necessary modules and components
import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext'; // Import the useShoppingCart hook
import '../App.css'; // Import CSS file for styling

// Functional component for displaying the shopping cart
const ShoppingCart = () => {
  // Access cartItems from shopping cart context using the useShoppingCart hook
  const { cartItems } = useShoppingCart();

  // Render the shopping cart
  return (
    <div>
      {/* Heading for the shopping cart */}
      <h2 className="shopping-cart">Shopping Cart</h2>
      {/* Display the list of items in the shopping cart */}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the component
export default ShoppingCart;