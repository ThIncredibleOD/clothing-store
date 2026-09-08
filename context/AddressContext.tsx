"use client";

import { createContext, useContext, useState } from "react";

const AddressContext = createContext(null);

export function AddressProvider({ children }: { children: React.ReactNode }) {
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    city: "",
    district: "",
    streetAddress: "",
    phone: "",
  });

  const updateShippingAddress = (
    field: keyof typeof shippingAddress,
    value: string,
  ) => {
    setShippingAddress((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <AddressContext.Provider
      value={{
        shippingAddress,
        setShippingAddress,
        updateShippingAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export function useAddress() {
  const context = useContext(AddressContext);

  if (!context) {
    throw new Error("useStore must be used inside StoreProvider");
  }

  return context;
}
