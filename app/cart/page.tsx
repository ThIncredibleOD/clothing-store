"use client";

import ProductsList from "@/components/cart/ProductsList";
import Summary from "@/components/cart/Summary";
import TrustBar from "@/components/cart/TrustBar";
import WatchList from "@/components/cart/WatchList";
import { useStore } from "@/context/StoreContext";

export default function Cart() {
  const { products, favourites } = useStore();

  return (
    <main className="pt-30 md:pt-35">
      <ProductsList />
      <Summary />
      <TrustBar />
      <WatchList products={products} favourites={favourites} />
    </main>
  );
}
