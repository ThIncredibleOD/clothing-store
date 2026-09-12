"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function ProductsList() {
  const { cart, setCart, handleRemoveFromCart } = useStore();

  const handleDecreaseQuantity = (productId, size) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.size === size
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
  };

  const handleIncreaseQuantity = (productId, size) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  return (
    <section className="md:flex-1 p-8 md:p-12 flex flex-col gap-10">
      <header className="flex items-baseline-last gap-4">
        <div className="bg-[hsla(52,98%,53%,1)] h-5 w-5 rounded-full" />
        <h2 className="font-syne text-3xl font-bold">CART({cart.length})</h2>
      </header>

      <ul className="flex flex-col gap-10">
        {cart.map((product) => (
          <li
            key={`${product.id}-${product.size}`}
            className="px-2 flex flex-col md:flex-row gap-6 pb-4 border-b border-b-[hsla(52,98%,53%,1)] rounded-2xl"
          >
            <div className="relative h-100 w-full md:h-30 md:w-30 shrink-0 flex items-center justify-center">
              <Image
                src={product.images[0]}
                fill
                className="object-contain"
                alt={product.alt}
              />
            </div>

            <div className="md:flex-1 flex flex-col gap-4">
              <div className="flex  items-center justify-between">
                <h2 className="font-syne text-xl md:text-3xl font-bold">
                  {product.title}
                </h2>

                <button
                  className="hidden md:block border-b-2 border-b-white w-fit cursor-pointer"
                  onClick={() => handleRemoveFromCart(product.id, product.size)}
                >
                  REMOVE
                </button>
              </div>

              <p className="font-syne flex-1 text-3xl font-bold">
                ${product.price}
              </p>

              <p>
                Size:{" "}
                <span className="font-syne text-xl font-bold">
                  {product.size}
                </span>
              </p>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <p>In stock</p>

                <div className="flex items-center justify-between">
                  <div className="flex w-fit justify-between items-center gap-10">
                    <button
                      className="text-3xl flex items-center justify-center border-2 border-[hsla(52,98%,53%,0.5)] h-10 w-10 rounded-md cursor-pointer"
                      onClick={() =>
                        handleDecreaseQuantity(product.id, product.size)
                      }
                    >
                      <Minus />
                    </button>

                    <p className="font-syne text-xl md:text-2xl font-bold">
                      {product.quantity}
                    </p>

                    <button
                      className="text-3xl flex items-center justify-center border-2 border-[hsla(52,98%,53%,0.5)] h-10 w-10 rounded-md cursor-pointer"
                      onClick={() =>
                        handleIncreaseQuantity(product.id, product.size)
                      }
                    >
                      <Plus />
                    </button>
                  </div>

                  <button
                    className="block md:hidden border-b-2 border-b-white w-fit cursor-pointer"
                    onClick={() =>
                      handleRemoveFromCart(product.id, product.size)
                    }
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
