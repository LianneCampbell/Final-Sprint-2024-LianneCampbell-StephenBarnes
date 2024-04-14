// Shopping App Project for Final Sprint
// Names: Lianne Campbell & Stephen Barnes
// Date Submitted: April 14th 2024


// Import necessary modules and components
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for shopping cart
const ShoppingCartContext = createContext();

// Provider component for shopping cart context
export const ShoppingCartProvider = ({ children }) => {
  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from server when component mounts
  useEffect(() => {
    const getCartItems = async () => {
      const cartItemsFromServer = await fetchCartItems();
      setCartItems(cartItemsFromServer);
    };
    getCartItems();
  }, []);

  // Function to fetch cart items from server
  const fetchCartItems = async () => {
    const res = await fetch("http://localhost:5000/cartItems");
    const data = await res.json();
    return data;
  };

  // Function to delete a cart item
  const deleteCartItem = async (id) => {
    try {
      await fetch(`http://localhost:5000/cartItems/${id}`, {
        method: "DELETE",
      });

      // If the request is successful, update the local state
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  // Function to add a cart item
  const addCartItem = async (cartItem) => {
    const res = await fetch("http://localhost:5000/cartItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    });

    const data = await res.json();
    setCartItems([...cartItems, data]);
  };

  // Provide cart items and functions to children components
  return (
    <ShoppingCartContext.Provider value={{ cartItems, addCartItem, deleteCartItem }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Custom hook to access shopping cart context
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};