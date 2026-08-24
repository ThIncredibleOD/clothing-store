import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function WatchList({ products, favourites }) {
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
        {favoriteProducts.map((item) => (
          <li
            key={item.id}
            className="relative flex w-75 shrink-0 flex-col justify-between gap-6"
          >
            <Link
              href={`/products/${item.id}`}
              className="flex-1 flex flex-col justify-between cursor-pointer"
            >
              <div className="flex justify-center">
                <Image
                  src={item.images[0]}
                  height={250}
                  width={250}
                  alt={item.alt}
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
            </Link>
            <div className="flex items-center justify-between">
              <p className="md:text-lg">${item.price}</p>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsla(0,0%,100%,0.4)] border-solid cursor-pointer">
                <ShoppingCart size="20" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
