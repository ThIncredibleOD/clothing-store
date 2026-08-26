"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";

export default function ProductVariation({
  product,
  cart,
  setCart,
  handleAddToCart,
  setDisplayVariation,
}) {
  const [quantities, setQuantities] = useState(() =>
    Object.fromEntries(
      product.sizes.map((size) => {
        const cartItem = cart.find(
          (item) => item.id === product.id && item.size === size,
        );

        return [size, cartItem ? cartItem.quantity : 0];
      }),
    ),
  );

  const handleIncrease = (size) => {
    setQuantities((current) => ({
      ...current,
      [size]: Math.min(current[size] + 1, product.units[size]),
    }));
  };

  const handleDecrease = (size) => {
    setQuantities((current) => ({
      ...current,
      [size]: Math.max(current[size] - 1, 0),
    }));
  };

  return (
    <dialog
      open
      className="fixed inset-0 z-50 m-0 h-full w-full max-w-none bg-transparent p-0"
    >
      <div
        className="flex h-full w-full items-center justify-center bg-black/50"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setDisplayVariation(null);
          }
        }}
      >
        <div className="flex flex-col gap-8 rounded-md bg-[hsla(0,0%,7%,1)] p-8 text-white">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Select a Variation</h3>
            <button
              className="text-[hsla(0,0%,100%,0.3)] cursor-pointer"
              onClick={() => setDisplayVariation(null)}
            >
              <X size={20} />
            </button>
          </div>

          <ul className="flex flex-col gap-6">
            {product.sizes.map((size) => {
              const availableUnits = product.units[size];
              const quantity = quantities[size];

              return (
                <li
                  key={size}
                  className="flex items-center justify-between gap-15"
                >
                  <div>
                    {size} - {availableUnits} available
                  </div>

                  <div className="flex w-fit items-center justify-between gap-4">
                    <button
                      onClick={() => handleDecrease(size)}
                      disabled={quantity === 0}
                      className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-[hsla(52,98%,53%,0.5)] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                    >
                      <Minus size={18} />
                    </button>

                    <p className="w-8 text-center font-bold md:text-2xl">
                      {quantity}
                    </p>

                    <button
                      onClick={() => handleIncrease(size)}
                      disabled={quantity === availableUnits}
                      className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-[hsla(52,98%,53%,0.5)] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </li>
              );
            })}
            <button
              className="bg-[hsla(52,98%,53%,1)] text-black font-bold flex items-center justify-center gap-2 p-2 rounded-md cursor-pointer"
              onClick={() => {
                handleAddToCart(product, quantities);
                setDisplayVariation(null);
              }}
            >
              <ShoppingCart fill="black" />
              ADD TO CART
            </button>
          </ul>
        </div>
      </div>
    </dialog>
  );
}
