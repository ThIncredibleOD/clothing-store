import CompleteTheFit from "@/components/products/CompleteTheFit";
import ContentBreakdown from "@/components/products/ContentBreakdown";
import CustomerReviews from "@/components/products/CustomerReviews";
import ProductInfo from "@/components/products/ProductInfo";

export default function Product() {
  return (
    <main>
      <ProductInfo />
      <CompleteTheFit />
      <ContentBreakdown />
      <CustomerReviews />
    </main>
  );
}
