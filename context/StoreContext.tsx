"use client";

import { createContext, useContext, useState } from "react";

const StoreContext = createContext(null);

export function StoreProvider({ children, value }) {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantities) => {
    const selectedItems = Object.entries(quantities)
      .filter(([_, quantity]) => quantity > 0)
      .map(([size, quantity]) => ({
        id: product.id,
        title: product.title,
        brand: product.brand,
        price: product.price,
        images: product.images,
        size,
        quantity,
      }));

    setCart((currentCart) => {
      const updatedCart = [...currentCart];

      selectedItems.forEach((newItem) => {
        const existingIndex = updatedCart.findIndex(
          (item) => item.id === newItem.id && item.size === newItem.size,
        );

        if (existingIndex !== -1) {
          updatedCart[existingIndex] = newItem;
        } else {
          updatedCart.push(newItem);
        }
      });

      return updatedCart;
    });
  };

  return (
    <StoreContext.Provider value={{ ...value, cart, setCart, handleAddToCart }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }

  return context;
}
