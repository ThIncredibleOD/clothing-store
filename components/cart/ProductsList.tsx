"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function ProductsList() {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="p-8 md:p-12 flex flex-col gap-10">
      <header className="flex items-baseline-last gap-4">
        <div className="bg-[hsla(52,98%,53%,1)] h-5 w-5 rounded-full"></div>
        <h2 className="text-3xl font-bold">CART(1)</h2>
      </header>

      <ul className="flex flex-col gap-10 pb-8 border-b border-b-[hsla(52,98%,53%,1)] rounded-2xl">
        <li className="px-2 flex flex-col gap-6">
          <div className="relative h-100 w-full shrink-0 flex items-center justify-center">
            <Image
              src="/best-seller-1.png"
              fill
              // sizes="(max-width: 767px) 100vw, (max-width: 1023px) 400px, 500px"
              className="object-contain"
              alt="Latest Collection"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Heavyweight Nylon Trench</h2>
            <p className="text-3xl font-bold">$320</p>
            <p>In stock</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex w-fit justify-between items-center gap-10">
              <button
                className="text-3xl flex items-center justify-center border-2 border-[hsla(52,98%,53%,0.5)] h-10 w-10 rounded-md cursor-pointer"
                // onClick={handleDecreaseQuantity}
              >
                <Minus />
              </button>
              <p className="text-xl md:text-2xl font-bold">{quantity}</p>
              <button
                className="text-3xl flex items-center justify-center border-2 border-[hsla(52,98%,53%,0.5)] h-10 w-10 rounded-md cursor-pointer"
                // onClick={handleIncreaseQuantity}
              >
                <Plus />
              </button>
            </div>

            <button className="border-b-2 border-b-white w-fit cursor-pointer">
              REMOVE
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
}
