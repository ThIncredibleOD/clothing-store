"use client";

import CompleteTheFit from "@/components/products/CompleteTheFit";
import ContentBreakdown from "@/components/products/ContentBreakdown";
import CustomerReviews from "@/components/products/CustomerReviews";
import ProductInfo from "@/components/products/ProductInfo";
import { useStore } from "@/context/StoreContext";
import { useParams } from "next/navigation";

export default function Product() {
  const { products, reviews } = useStore();
  const { productId } = useParams();

  const product = products.find((product) => product.id === Number(productId));
  const productReviews = reviews.filter(
    (review) => review.productId === Number(productId),
  );

  return (
    <main>
      <ProductInfo product={product} productReviews={productReviews} />
      <CompleteTheFit />
      <ContentBreakdown product={product} />
      <CustomerReviews />
    </main>
  );
}
