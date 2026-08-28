import Image from "next/image";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { useState } from "react";
import ProductVariation from "../ui/ProductVariation";

export default function CompleteTheFit({ product }) {
  const { cart, setCart, handleAddToCart, products, completeTheFit } =
    useStore();
  const [displayVariation, setDisplayVariation] = useState(null);

  const recommendedProducts = completeTheFit[product.id]
    .map((id) => products.find((item) => item.id === id))
    .filter(Boolean);

  return (
    <section className="p-8 md:p-12 flex flex-col gap-10">
      <header className="flex items-baseline-last gap-4">
        <div className="bg-[hsla(52,98%,53%,1)] h-5 w-5 rounded-full"></div>
        <h2 className="text-3xl font-bold">COMPLETE THE FIT</h2>
      </header>

      <ul className="collections-scroll w-full flex justify-between gap-10 overflow-x-auto bg-re">
        {recommendedProducts.map((recommendedItem) => {
          const totalQuantity = cart
            .filter((item) => item.id === recommendedItem.id)
            .reduce((total, item) => total + item.quantity, 0);

          return (
            <li
              key={recommendedItem.id}
              className="relative flex w-75 shrink-0 flex-col justify-between gap-6"
            >
              {displayVariation === recommendedItem.id && (
                <ProductVariation
                  cart={cart}
                  setCart={setCart}
                  product={recommendedItem}
                  handleAddToCart={handleAddToCart}
                  setDisplayVariation={setDisplayVariation}
                />
              )}
              <Link
                href={`/products/${recommendedItem.id}`}
                className="flex-1 flex flex-col justify-between cursor-pointer"
              >
                <div className="flex justify-center">
                  <Image
                    src={recommendedItem.images[0]}
                    height={250}
                    width={250}
                    alt={recommendedItem.alt}
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-bold">
                  {recommendedItem.title}
                </h3>
              </Link>
              <div className="flex items-center justify-between">
                <p className="md:text-lg">${recommendedItem.price}</p>
                {cart.some((item) => item.id === recommendedItem.id) ? (
                  <div className="flex w-fit items-center justify-between gap-4">
                    <button
                      onClick={() => setDisplayVariation(recommendedItem.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-[hsla(52,98%,53%,0.5)] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                    >
                      <Minus size={18} />
                    </button>

                    <p className="w-8 text-center font-bold md:text-2xl">
                      {totalQuantity}
                    </p>

                    <button
                      className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-[hsla(52,98%,53%,0.5)] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                      onClick={() => setDisplayVariation(recommendedItem.id)}
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                ) : (
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsla(0,0%,100%,0.4)] border-solid cursor-pointer"
                    onClick={() => setDisplayVariation(recommendedItem.id)}
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
