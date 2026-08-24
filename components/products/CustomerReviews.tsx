import { ChevronRight, Star, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function CustomerReviews({ productReviews, averageRating }) {
  const ratingsArr = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    reviews: productReviews.filter((review) => review.rating === rating).length,
  }));

  const ratingPercentage = (reviews) => {
    if (productReviews.length === 0) return 0;

    return (reviews / productReviews.length) * 100;
  };

  return (
    <section className="p-8 md:p-12 flex flex-col gap-10">
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-[hsla(52,98%,53%,1)] h-5 w-5 rounded-full"></div>
          <h2 className="text-3xl font-bold">CUSTOMER REVIEWS</h2>
        </div>
        <button className="flex items-center gap-1 text-xl text-[hsla(52,98%,53%,1)] cursor-pointer">
          See more
          <ChevronRight />
        </button>
      </header>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-10 lg:w-1/2 lg:max-w-75">
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-bold text-[hsla(52,98%,53%,1)]">
              {averageRating.toFixed(1)}/5
            </p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => {
                return (
                  <Star
                    key={star}
                    className={
                      star <= averageRating
                        ? "fill-[hsla(52,98%,53%,1)] text-[hsla(52,98%,53%,1)]"
                        : "text-gray-400"
                    }
                  />
                );
              })}
            </div>

            <p className="text-xl font-bold">
              {productReviews.length} verified ratings
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {ratingsArr.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center justify-between gap-10"
                >
                  <div className="flex items-center gap-4">
                    <p className="text-xl font-bold">{item.rating}</p>
                    <div className="text-[hsla(52,98%,53%,1)]">
                      <Star fill="hsla(52,98%,53%,1)" />
                    </div>
                    <p className="text-xl font-bold">({item.reviews})</p>
                  </div>
                  <div className="relative bg-[hsla(0,0%,85%,1)] w-50 h-3 rounded-full overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 bg-[hsla(52,98%,53%,1)]`}
                      style={{ width: `${ratingPercentage(item.reviews)}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="w-full flex-1 self-end flex flex-col gap-5">
          {productReviews.map((review) => {
            return (
              <li
                key={review.id}
                className="flex flex-col gap-4 border border-[hsla(0,0%,20%,1)] p-4 rounded-2xl"
              >
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => {
                    return (
                      <Star
                        key={star}
                        className={
                          star <= review.rating
                            ? "fill-[hsla(52,98%,53%,1)] text-[hsla(52,98%,53%,1)]"
                            : "text-gray-400"
                        }
                      />
                    );
                  })}
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold">{review.title}</h2>
                  <p className="text-md leading-8">{review.comment}</p>
                  <div className="text-xs flex justify-between items-center font-bold">
                    <div className="flex items-center gap-5">
                      <p>{review.date}</p>
                      <p>by {review.customerUsername}</p>
                    </div>

                    <p className="flex items-center gap-1">
                      <ShieldCheck color="hsla(52,98%,53%,1)" />
                      Verified Customer
                    </p>
                  </div>
                </div>

                {review.images.length > 0 && (
                  <ul className="pb-2 collections-scroll w-full flex gap-5 overflow-x-auto">
                    {review.images.map((image, index) => {
                      return (
                        <li
                          key={index}
                          className="shrink-0 relative h-30 w-30 rounded-md overflow-hidden cursor-pointer"
                        >
                          <Image
                            src={image}
                            fill
                            alt="review image"
                            className="object-cover"
                          />
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
