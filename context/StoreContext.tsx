"use client";

import { createContext, useContext } from "react";

const StoreContext = createContext(null);

export function StoreProvider({ children, value }) {
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }

  return context;
}
