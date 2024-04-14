// Shopping App Project for Final Sprint
// Names: Lianne Campbell & Stephen Barnes
// Date Submitted: April 14th 2024


// Import necessary modules and components
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation

// Functional component for displaying a button to view product details
function ProductButton({ productId }) {
  // Render the button
  return (
    <div>
      {/* Link to ProductDetails component with specific product ID */}
      <Link to={`/products/${productId}`}>
        <button className="product-details-button">View Product Details</button>
      </Link>
    </div>
  );
}

// Export the component
export default ProductButton;