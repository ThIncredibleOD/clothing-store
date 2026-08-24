"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import Link from "next/link";

export default function FullCollection() {
  const { products } = useStore();

  const fullCollections = products;

  return (
    <section className="p-8 md:p-12 flex flex-col gap-10">
      <header className="flex items-baseline-last gap-4">
        <div className="bg-[hsla(52,98%,53%,1)] h-5 w-5 rounded-full"></div>
        <h2 className="text-3xl font-bold">The Full Collection</h2>
      </header>

      <ul className="flex w-full flex-col items-center gap-10 md:flex-row md:flex-wrap md:items-stretch">
        {fullCollections.map((collection) => (
          <li
            key={collection.id}
            className="relative flex w-full shrink-0 flex-col gap-6 justify-between md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.667rem)]"
          >
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

              <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-solid border-[hsla(0,0%,100%,0.4)]">
                <ShoppingCart size="20" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
