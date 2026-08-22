import { ChevronRight, Star, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function CustomerReviews() {
  const totalRatings = 500;

  const ratingsArr = [
    {
      rating: 5,
      reviews: 450,
    },
    {
      rating: 4,
      reviews: 40,
    },
    {
      rating: 3,
      reviews: 10,
    },
    {
      rating: 2,
      reviews: 0,
    },
    {
      rating: 1,
      reviews: 0,
    },
  ];

  const ratingPercentage = (reviews) => {
    if (totalRatings === 0) return 0;

    return (reviews / totalRatings) * 100;
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
        <div className="flex flex-col gap-10 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-bold text-[hsla(52,98%,53%,1)]">
              4.8/5
            </p>
            <div className="flex gap-2">
              <div className="text-[hsla(52,98%,53%,1)]">
                <Star fill="hsla(52,98%,53%,1)" />
              </div>
              <div className="text-[hsla(52,98%,53%,1)]">
                <Star fill="hsla(52,98%,53%,1)" />
              </div>
              <div className="text-[hsla(52,98%,53%,1)]">
                <Star fill="hsla(52,98%,53%,1)" />
              </div>
              <div className="text-[hsla(52,98%,53%,1)]">
                <Star fill="hsla(52,98%,53%,1)" />
              </div>
              <div className="text-[hsla(52,98%,53%,1)]">
                <Star fill="hsla(52,98%,53%,1)" />
              </div>
            </div>

            <p className="text-xl font-bold">500 verified ratings</p>
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

        <ul className="self-end flex flex-col gap-5">
          <li className="flex flex-col gap-4 border border-[hsla(0,0%,20%,1)] p-4 rounded-2xl">
            <div className="flex gap-2">
              <div className="text-[hsla(52,98%,53%,1)]">
                <Star fill="hsla(52,98%,53%,1)" />
              </div>
              <div className="text-[hsla(52,98%,53%,1)]">
                <Star fill="hsla(52,98%,53%,1)" />
              </div>
              <div className="text-[hsla(52,98%,53%,1)]">
                <Star fill="hsla(52,98%,53%,1)" />
              </div>
              <div className="text-[hsla(52,98%,53%,1)]">
                <Star fill="hsla(52,98%,53%,1)" />
              </div>
              <div className="text-[hsla(52,98%,53%,1)]">
                <Star fill="hsla(52,98%,53%,1)" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold ">The Fit & Silhouette</h2>
              <p className="text-md leading-8">
                The silhouette on this is crazy. The drop shoulder is perfectly
                executed and the drape of the nylon gives it a very
                architectural feel. Definitely size down if you don&apos;t want
                it too oversized, but for me, the exaggerated fit is exactly
                what I was looking for.
              </p>
              <div className="text-xs flex justify-between items-center font-bold">
                <div className="flex items-center gap-5">
                  <p>12-08-2026</p>
                  <p>by @Tobi_V</p>
                </div>

                <p className="flex items-center gap-1">
                  <ShieldCheck color="hsla(52,98%,53%,1)" />
                  Verified Customer
                </p>
              </div>
            </div>

            <ul className="pb-2 collections-scroll w-full flex justify-between gap-5 overflow-x-auto">
              <li className="shrink-0 relative h-30 w-30 rounded-md overflow-hidden cursor-pointer">
                <Image
                  src="/home-1.png"
                  fill
                  alt="whatever"
                  className="object-cover"
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
