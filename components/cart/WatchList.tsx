"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import ProductVariation from "../ui/ProductVariation";
import { useState } from "react";

export default function WatchList() {
  const { products, favourites, cart, setCart, handleAddToCart } = useStore();
  const [displayVariation, setDisplayVariation] = useState(null);

  const favoriteProducts = products.filter((product) =>
    favourites.includes(product.id),
  );

  return (
    <section className="p-8 md:p-12 flex flex-col gap-10">
      <header className="flex items-baseline-last gap-4">
        <div className="bg-[hsla(52,98%,53%,1)] h-5 w-5 rounded-full"></div>
        <h2 className="text-3xl font-bold">WATCHLIST</h2>
      </header>

      <ul className="collections-scroll w-full flex justify-between gap-10 overflow-x-auto">
        {favoriteProducts.map((product) => {
          const totalQuantity = cart
            .filter((item) => item.id === product.id)
            .reduce((total, item) => total + item.quantity, 0);
          return (
            <li
              key={product.id}
              className="relative flex w-75 shrink-0 flex-col justify-between gap-6"
            >
              {displayVariation === product.id && (
                <ProductVariation
                  cart={cart}
                  setCart={setCart}
                  product={product}
                  handleAddToCart={handleAddToCart}
                  setDisplayVariation={setDisplayVariation}
                />
              )}
              <Link
                href={`/products/${product.id}`}
                className="flex-1 flex flex-col justify-between cursor-pointer"
              >
                <div className="flex justify-center">
                  <Image
                    src={product.images[0]}
                    height={250}
                    width={250}
                    alt={product.alt}
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-bold">
                  {product.title}
                </h3>
              </Link>
              <div className="flex items-center justify-between">
                <p className="md:text-lg">${product.price}</p>
                {cart.some((item) => item.id === product.id) ? (
                  <div className="flex w-fit items-center justify-between gap-4">
                    <button
                      onClick={() => setDisplayVariation(product.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-[hsla(52,98%,53%,0.5)] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                    >
                      <Minus size={18} />
                    </button>

                    <p className="w-8 text-center font-bold md:text-2xl">
                      {totalQuantity}
                    </p>

                    <button
                      className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-[hsla(52,98%,53%,0.5)] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                      onClick={() => setDisplayVariation(product.id)}
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                ) : (
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsla(0,0%,100%,0.4)] border-solid cursor-pointer"
                    onClick={() => setDisplayVariation(product.id)}
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
