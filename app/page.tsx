"use client";

import Collections from "@/components/home/Collections";
import BestSellers from "@/components/home/BestSellers";
import Categories from "@/components/home/Categories";
import PromoBanner from "@/components/home/PromoBanner";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import { useStore } from "@/context/StoreContext";
import { useEffect } from "react";

export default function Home() {
  const { products, categories, cart, setCart } = useStore();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>
      <main>
        <HeroSlideshow />
        <Collections />
        <BestSellers products={products} setCart={setCart} />
        <Categories products={products} categories={categories} />
        <PromoBanner />
      </main>
    </div>
  );
}
