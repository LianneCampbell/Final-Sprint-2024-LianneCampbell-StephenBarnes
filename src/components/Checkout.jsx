// Import necessary modules and components
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation
import { useShoppingCart } from '../context/ShoppingCartContext'; // Import custom hook for accessing shopping cart context
import '../App.css'; // Import CSS file for styling

// Functional component for checkout page
const Checkout = () => {
  // Access cart items from shopping cart context
  const { cartItems } = useShoppingCart();

  // State to manage payment information
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Function to calculate total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Handler for input change in payment form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logging payment information (this can be replaced with actual payment processing)
    console.log(paymentInfo);
    // Redirecting user after payment submission (for example, to the homepage)
    window.location.href = '/';
  };

  return (
    <div className="product-border">
      <h2>Checkout</h2>
      <div className="shopping-cart">
        <h3>Order Summary</h3>
        <ul>
          {/* Displaying each item in the cart */}
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
        {/* Display total price of items in the cart */}
        <p>Total Price: ${calculateTotalPrice()}</p>
      </div>
      <div className="payment">
        <h3>Payment Information</h3>
        {/* Payment form */}
        <form onSubmit={handleSubmit}>
          <label>
            Name on Card:
            <br />
            <input type="text" name="name" value={paymentInfo.name} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Card Number:
            <br />
            <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Expiry Date:
            <br />
            <input type="text" name="expiryDate" value={paymentInfo.expiryDate} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            CVV:
            <br />
            <input type="text" name="cvv" value={paymentInfo.cvv} onChange={handleInputChange} />
          </label>
          <br />
          {/* Button to submit payment */}
          <button type="submit" className="add-to-cart">Submit Payment</button>
        </form>
      </div>
      <br />
      {/* Link to navigate back to all products */}
      <Link to="/" className="add-to-cart">Back to All Products</Link>
    </div>
  );
};

// Exporting the component
export default Checkout;