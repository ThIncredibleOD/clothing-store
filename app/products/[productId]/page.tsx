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

  const averageRating =
    productReviews.length > 0
      ? productReviews.reduce((sum, review) => sum + review.rating, 0) /
        productReviews.length
      : 0;

  return (
    <main className="pt-30 md:pt-35">
      <ProductInfo
        product={product}
        productReviews={productReviews}
        averageRating={averageRating}
      />
      <CompleteTheFit product={product} />
      {product.contentBreakdown.length > 0 && (
        <ContentBreakdown product={product} />
      )}
      <CustomerReviews
        productReviews={productReviews}
        averageRating={averageRating}
      />
    </main>
  );
}
