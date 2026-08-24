import { MoveRight, Flame, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Categories({ products, categories }) {
  return (
    <section className="p-4 pb-40">
      <ul className="flex flex-col gap-12">
        {categories.map((category, index) => {
          const categoryProducts = products.filter((product) =>
            category.items.includes(product.id),
          );

          return (
            <li
              key={category.id}
              className={`flex flex-col ${(index + 1) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-6`}
            >
              <div className="flex md:hidden items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                  <p className="text-[hsla(52,98%,53%,1)] text-3xl">
                    Categories
                  </p>
                </div>
                <Link
                  href={category.href}
                  className="text-[hsla(52,98%,53%,1)]"
                >
                  <MoveRight />
                </Link>
              </div>
              <div className="shrink-0 flex items-end">
                <Image
                  src={category.descriptionImageSrc}
                  height="250"
                  width="250"
                  alt={category.descriptionImageAlt}
                  className="w-62.5 h-auto md:w-70 lg:w-75"
                />
              </div>

              <hr className="border-t-2 border-[hsla(52,98%,53%,1)] md:hidden" />

              <div className="md:flex md:flex-col md:gap-8 md:flex-1 md:min-w-0">
                <div className="hidden md:flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h2 className="text-3xl font-bold">{category.title}</h2>
                    <p className="text-[hsla(52,98%,53%,1)] text-3xl">
                      Categories
                    </p>
                  </div>
                  <Link
                    href={category.href}
                    className="text-[hsla(52,98%,53%,1)]"
                  >
                    <MoveRight />
                  </Link>
                </div>

                <ul
                  className={`collections-scroll flex ${(index + 1) % 2 === 0 ? "md:border-r-2 md:border-r-[hsla(52,98%,53%,1)] md:pr-6" : "md:border-l-2 md:border-l-[hsla(52,98%,53%,1)] md:pl-6"} justify-between gap-10 overflow-x-auto min-w-0`}
                >
                  {categoryProducts.map((item) => (
                    <li
                      key={item.id}
                      className="relative flex w-75 shrink-0 flex-col justify-between gap-6"
                    >
                      <Link
                        href={`/products/${item.id}`}
                        className="flex-1 flex flex-col justify-between cursor-pointer"
                      >
                        {item.trending && (
                          <div className="absolute top-0 left-0 flex w-fit items-center gap-2 rounded-full bg-[hsla(52,98%,53%,1)] p-2">
                            <div className="text-[hsla(0,83%,45%,1)]">
                              <Flame />
                            </div>
                            <p className="text-lg text-black">Trending</p>
                          </div>
                        )}

                        <div className="flex justify-center">
                          <Image
                            src={item.images[0]}
                            height={250}
                            width={250}
                            alt={item.alt}
                          />
                        </div>

                        <h3 className="text-xl font-bold">{item.title}</h3>
                      </Link>
                      <div className="flex items-center justify-between">
                        <p>${item.price}</p>
                        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsla(0,0%,100%,0.4)] border-solid cursor-pointer">
                          <ShoppingCart size="20" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
