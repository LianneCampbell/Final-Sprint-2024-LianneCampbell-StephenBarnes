// Shopping App Project for Final Sprint
// Names: Lianne Campbell & Stephen Barnes
// Date Submitted: April 14th 2024


// Import necessary modules and components
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation
import { useShoppingCart } from '../context/ShoppingCartContext'; // Import the useShoppingCart hook

// Functional component for displaying details of a single product
function ProductListItem({ product }) {
  // Access addCartItem function from shopping cart context using the useShoppingCart hook
  const { addCartItem } = useShoppingCart();

  // Handler for adding the current product to the cart
  const handleAddToCartClick = () => {
    addCartItem(product);
  };

  // Render product details and buttons
  return (
    <div>
      {/* Link to navigate to product details page */}
      <Link to={`/products/${product.id}`}>
        <button className="product-details-button">View Product Details</button>
      </Link>
      {/* Button to add product to cart */}
      <button className="add-to-cart" onClick={handleAddToCartClick}>Add to Cart</button>
    </div>
  );
}

// Export the component
export default ProductListItem;