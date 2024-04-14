// Import necessary modules and components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import { ShoppingCartProvider } from "./context/ShoppingCartContext"; // Import the ShoppingCartProvider
import './App.css'; // Import CSS file for styling

// Main component of the application
function App() {
  return (
    <div>
      {/* Heading for the application */}
      <h1 className="App-header"><b>Shopping App</b></h1>
      {/* Wrap the application with ShoppingCartProvider to apply the context */}
      <ShoppingCartProvider>
        {/* Set up routing for different pages */}
        <Router>
          <Routes>
            {/* Route for the product list page */}
            <Route path="/" element={<ProductList />} />
            {/* Route for the product details page */}
            <Route path="/products/:id" element={<ProductDetails />} />
            {/* Route for the shopping cart page */}
            <Route path="/cart" element={<ShoppingCart />} />
            {/* Route for the checkout page */}
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShoppingCartProvider>
    </div>
  );
}

// Export the App component
export default App;