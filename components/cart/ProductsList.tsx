"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function ProductsList() {
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <section className="md:flex-1 p-8 md:p-12 flex flex-col gap-10">
      <header className="flex items-baseline-last gap-4">
        <div className="bg-[hsla(52,98%,53%,1)] h-5 w-5 rounded-full"></div>
        <h2 className="text-3xl font-bold">CART(1)</h2>
      </header>

      <ul className="flex flex-col gap-10 pb-4 border-b border-b-[hsla(52,98%,53%,1)] rounded-2xl">
        <li className="px-2 flex flex-col md:flex-row gap-6">
          <div className="relative h-100 w-full md:h-30 md:w-30 shrink-0 flex items-center justify-center">
            <Image
              src="/best-seller-1.png"
              fill
              className="object-contain"
              alt="Latest Collection"
            />
          </div>

          <div className="md:flex-1 flex flex-col gap-4">
            <h2 className="text-xl md:text-3xl font-bold">
              Heavyweight Nylon Trench
            </h2>
            <p className="flex-1 text-3xl font-bold">$320</p>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p>In stock</p>

              <div className="flex items-center justify-between">
                <div className="flex w-fit justify-between items-center gap-10">
                  <button
                    className="text-3xl flex items-center justify-center border-2 border-[hsla(52,98%,53%,0.5)] h-10 w-10 rounded-md cursor-pointer"
                    onClick={handleDecreaseQuantity}
                  >
                    <Minus />
                  </button>
                  <p className="text-xl md:text-2xl font-bold">{quantity}</p>
                  <button
                    className="text-3xl flex items-center justify-center border-2 border-[hsla(52,98%,53%,0.5)] h-10 w-10 rounded-md cursor-pointer"
                    onClick={handleIncreaseQuantity}
                  >
                    <Plus />
                  </button>
                </div>

                <button className="block md:hidden border-b-2 border-b-white w-fit cursor-pointer">
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
