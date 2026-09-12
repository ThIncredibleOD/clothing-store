"use client";

import { MoveRight, Flame, ShoppingCart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProductVariation from "../ui/ProductVariation";
import { useStore } from "@/context/StoreContext";

export default function Categories() {
  const { products, categories, cart, setCart, handleAddToCart } = useStore();

  const [displayVariation, setDisplayVariation] = useState(null);

  return (
    <section className="p-4 pb-40">
      <ul className="flex flex-col gap-12">
        {categories.map((category, index) => {
          const categoryProducts = products.filter((product) =>
            category.items.includes(product.id),
          );

          return (
            <li
              key={category.id}
              className={`flex flex-col ${(index + 1) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-6`}
            >
              <div className="flex md:hidden items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="font-syne text-3xl font-bold">
                    {category.title}
                  </h2>
                  <p className="font-syne text-[hsla(52,98%,53%,1)] text-3xl">
                    Categories
                  </p>
                </div>
                <Link
                  href={category.href}
                  className="text-[hsla(52,98%,53%,1)]"
                >
                  <MoveRight />
                </Link>
              </div>
              <div className="shrink-0 flex items-end">
                <Image
                  src={category.descriptionImageSrc}
                  height="250"
                  width="250"
                  alt={category.descriptionImageAlt}
                  className="w-62.5 h-auto md:w-70 lg:w-75"
                />
              </div>

              <hr className="border-t-2 border-[hsla(52,98%,53%,1)] md:hidden" />

              <div className="md:flex md:flex-col md:gap-8 md:flex-1 md:min-w-0">
                <div className="hidden md:flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h2 className="font-syne text-3xl font-bold">
                      {category.title}
                    </h2>
                    <p className="font-syne text-[hsla(52,98%,53%,1)] text-3xl">
                      Categories
                    </p>
                  </div>
                  <Link
                    href={category.href}
                    className="text-[hsla(52,98%,53%,1)]"
                  >
                    <MoveRight />
                  </Link>
                </div>

                <ul
                  className={`collections-scroll flex ${(index + 1) % 2 === 0 ? "md:border-r-2 md:border-r-[hsla(52,98%,53%,1)] md:pr-6" : "md:border-l-2 md:border-l-[hsla(52,98%,53%,1)] md:pl-6"} justify-between gap-10 overflow-x-auto min-w-0`}
                >
                  {categoryProducts.map((product) => {
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
                          {product.trending && (
                            <div className="absolute top-0 left-0 flex w-fit items-center gap-2 rounded-full bg-[hsla(52,98%,53%,1)] p-2">
                              <div className="text-[hsla(0,83%,45%,1)]">
                                <Flame />
                              </div>
                              <p className="text-lg text-black">Trending</p>
                            </div>
                          )}

                          <div className="flex justify-center">
                            <Image
                              src={product.images[0]}
                              height={250}
                              width={250}
                              alt={product.alt}
                            />
                          </div>

                          <h3 className="font-syne text-xl font-bold">
                            {product.title}
                          </h3>
                        </Link>
                        <div className="flex items-center justify-between">
                          <p className="font-syne">${product.price}</p>
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
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
