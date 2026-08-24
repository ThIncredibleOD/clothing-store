"use client";

import Collections from "@/components/home/Collections";
import BestSellers from "@/components/home/BestSellers";
import Categories from "@/components/home/Categories";
import PromoBanner from "@/components/home/PromoBanner";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import { useStore } from "@/context/StoreContext";

export default function Home() {
  const { products, categories } = useStore();

  return (
    <div>
      <main>
        <HeroSlideshow />
        <Collections />
        <BestSellers products={products} />
        <Categories products={products} categories={categories} />
        <PromoBanner />
      </main>
    </div>
  );
}
