"use client";

import Image from "next/image";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import Link from "next/link";
import { useState } from "react";
import ProductVariation from "../ui/ProductVariation";

export default function FullCollection() {
  const { products, cart, setCart, handleAddToCart } = useStore();
  const [displayVariation, setDisplayVariation] = useState(null);

  const fullCollections = products;

  return (
    <section className="p-8 md:p-12 flex flex-col gap-10">
      <header className="flex items-baseline-last gap-4">
        <div className="bg-[hsla(52,98%,53%,1)] h-5 w-5 rounded-full"></div>
        <h2 className="text-3xl font-bold">The Full Collection</h2>
      </header>

      <ul className="flex w-full flex-col items-center gap-10 md:flex-row md:flex-wrap md:items-stretch">
        {fullCollections.map((collection) => {
          const totalQuantity = cart
            .filter((item) => item.id === collection.id)
            .reduce((total, item) => total + item.quantity, 0);

          return (
            <li
              key={collection.id}
              className="relative flex w-full shrink-0 flex-col gap-6 justify-between md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.667rem)]"
            >
              {displayVariation === collection.id && (
                <ProductVariation
                  cart={cart}
                  setCart={setCart}
                  product={collection}
                  handleAddToCart={handleAddToCart}
                  setDisplayVariation={setDisplayVariation}
                />
              )}
              <Link
                href={`/products/${collection.id}`}
                className="flex-1 flex flex-col justify-between cursor-pointer"
              >
                <div className="flex justify-center">
                  <Image
                    src={collection.images[0]}
                    height={250}
                    width={250}
                    alt={collection.alt}
                  />
                </div>

                <h3 className="text-xl font-bold md:text-2xl">
                  {collection.title}
                </h3>
              </Link>
              <div className="flex items-center justify-between">
                <p className="md:text-lg">${collection.price}</p>

                {cart.some((item) => item.id === collection.id) ? (
                  <div className="flex w-fit items-center justify-between gap-4">
                    <button
                      onClick={() => setDisplayVariation(collection.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-[hsla(52,98%,53%,0.5)] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                    >
                      <Minus size={18} />
                    </button>

                    <p className="w-8 text-center font-bold md:text-2xl">
                      {totalQuantity}
                    </p>

                    <button
                      className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-[hsla(52,98%,53%,0.5)] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                      onClick={() => setDisplayVariation(collection.id)}
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                ) : (
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsla(0,0%,100%,0.4)] border-solid cursor-pointer"
                    onClick={() => setDisplayVariation(collection.id)}
                  >
                    <ShoppingCart size="20" />
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
