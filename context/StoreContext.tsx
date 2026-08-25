"use client";

import { createContext, useContext, useState } from "react";

const StoreContext = createContext(null);

export function StoreProvider({ children, value }) {
  const [cart, setCart] = useState([]);

  return (
    <StoreContext.Provider value={{ ...value, cart, setCart }}>
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
