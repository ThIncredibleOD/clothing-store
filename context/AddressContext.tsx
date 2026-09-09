"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

type ShippingAddress = {
  firstName: string;
  lastName: string;
  email: string;
  state: string;
  city: string;
  district: string;
  streetAddress: string;
  phone: string;
};

type AddressContextType = {
  shippingAddress: ShippingAddress;
  setShippingAddress: Dispatch<SetStateAction<ShippingAddress>>;
  updateShippingAddress: (field: keyof ShippingAddress, value: string) => void;
};

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export function AddressProvider({ children }: { children: ReactNode }) {
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
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
    field: keyof ShippingAddress,
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

export function useAddress(): AddressContextType {
  const context = useContext(AddressContext);

  if (!context) {
    throw new Error("useAddress must be used inside AddressProvider");
  }

  return context;
}
