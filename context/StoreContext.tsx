"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type CartItem = {
  id: number;
  title: string;
  brand: string;
  price: number;
  images: string[];
  alt: string;
  size: string;
  quantity: number;
};

type Product = {
  id: number;
  title: string;
  brand: string;
  price: number;
  images: string[];
  alt: string;
  sizes: string[];
  units: Record<string, number>;
  trending?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  category: string;
  contentBreakdown?: Record<string, string | number>;
};

type StoreContextType = {
  products: Product[];
  categories: any[];
  reviews: any[];

  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;

  handleAddToCart: (
    product: Product,
    quantities: Record<string, number>,
  ) => void;

  handleRemoveFromCart: (productId: number, size: string) => void;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

type StoreProviderProps = {
  children: ReactNode;
  value: {
    products: Product[];
    categories: any[];
    reviews: any[];
  };
};

export function StoreProvider({ children, value }: StoreProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (
    product: Product,
    quantities: Record<string, number>,
  ) => {
    const selectedItems: CartItem[] = Object.entries(quantities)
      .filter(([_, quantity]) => quantity > 0)
      .map(([size, quantity]) => ({
        id: product.id,
        title: product.title,
        brand: product.brand,
        price: product.price,
        images: product.images,
        alt: product.alt,
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

  const handleRemoveFromCart = (productId: number, size: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === productId && item.size === size)),
    );
  };

  return (
    <StoreContext.Provider
      value={{
        ...value,
        cart,
        setCart,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore(): StoreContextType {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }

  return context;
}
