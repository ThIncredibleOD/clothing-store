"use client";

import Image from "next/image";
import { ShoppingCart, Flame } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function NewArrivals() {
  const { products } = useStore();

  const newArrivals = products.filter((product) => product.isNewArrival);

  return (
    <section className="p-8 md:p-12 flex flex-col gap-10">
      <header className="flex items-baseline-last gap-4">
        <div className="bg-[hsla(52,98%,53%,1)] h-5 w-5 rounded-full"></div>
        <h2 className="text-3xl font-bold">NEW ARRIVALS</h2>
      </header>

      <ul className="collections-scroll w-full flex justify-between gap-10 overflow-x-auto bg-re">
        {newArrivals.map((newArrival) => (
          <li
            key={newArrival.id}
            className="relative flex w-75 shrink-0 flex-col justify-between cursor-pointer"
          >
            {newArrival.trending && (
              <div className="absolute top-0 left-0 flex w-fit items-center gap-1 rounded-full bg-[hsla(52,98%,53%,1)] p-2">
                <div className="text-[hsla(0,83%,45%,1)]">
                  <Flame />
                </div>
                <p className="text-lg text-black">Trending</p>
              </div>
            )}

            <div className="flex justify-center">
              <Image
                src={newArrival.images[0]}
                height={250}
                width={250}
                alt={newArrival.alt}
              />
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-xl md:text-2xl font-bold">
                {newArrival.title}
              </h3>

              <div className="flex items-center justify-between">
                <p className="md:text-lg">${newArrival.price}</p>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsla(0,0%,100%,0.4)] border-solid cursor-pointer">
                  <ShoppingCart size="20" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
