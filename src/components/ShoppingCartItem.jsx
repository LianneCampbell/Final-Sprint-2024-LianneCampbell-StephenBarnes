// Shopping App Project for Final Sprint
// Names: Lianne Campbell & Stephen Barnes
// Date Submitted: April 14th 2024


// Import necessary modules and components
import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext'; // Import the useShoppingCart hook

// Functional component for displaying a single item in the shopping cart
const ShoppingCartItem = ({ item }) => {
  // Access deleteCartItem function from shopping cart context using the useShoppingCart hook
  const { deleteCartItem } = useShoppingCart();

  // Handler for deleting the current item from the cart
  const handleDeleteItem = () => {
    deleteCartItem(item.id);
  };

  // Render the shopping cart item
  return (
    <div>
      {/* Display item details */}
      <p>{item.title} - ${item.price}</p>
      {/* Button to delete the item from the cart */}
      <button onClick={handleDeleteItem}>Delete</button>
    </div>
  );
};

// Export the component
export default ShoppingCartItem;