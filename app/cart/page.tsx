import ProductsList from "@/components/cart/ProductsList";
import Summary from "@/components/cart/Summary";

export default function Cart() {
  return (
    <main className="pt-30 md:pt-35">
      <ProductsList />
      <Summary />
    </main>
  );
}
