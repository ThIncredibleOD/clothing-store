"use client";

import ProductsList from "@/components/cart/ProductsList";
import Summary from "@/components/cart/Summary";
import TrustBar from "@/components/cart/TrustBar";
import WatchList from "@/components/cart/WatchList";
import { useStore } from "@/context/StoreContext";

export default function Cart() {
  const { cart } = useStore();

  return (
    <main className="pt-30 md:pt-35">
      {cart.length > 0 ? (
        <>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-10">
            <ProductsList />
            <Summary />
          </div>
          <TrustBar />
        </>
      ) : (
        <div className="text-[hsla(0,0%,100%,0.3)] text-center text-2xl font-bold">
          No Item In Cart
        </div>
      )}

      <WatchList />
    </main>
  );
}
