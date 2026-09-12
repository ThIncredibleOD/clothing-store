import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

export default function Collections() {
  const collections = [
    {
      id: 1,
      title: "Men's",
      description: "Utility meets luxury. Explore the collection.",
      imageSrc: "/collection-1.png",
      alt: "Men's Collection",
      href: "/#",
    },
    {
      id: 2,
      title: "Ladies'",
      description: "Utility meets luxury. Explore the collection.",
      imageSrc: "/collection-2.png",
      alt: "Ladies' Collection",
      href: "/#",
    },
    {
      id: 3,
      title: "Kids'",
      description: "Utility meets luxury. Explore the collection.",
      imageSrc: "/collection-3.png",
      alt: "Kids' Collection",
      href: "/#",
    },
  ];

  return (
    <section className="p-8 md:p-12">
      <ul className="collections-scroll w-full flex items-center justify-between gap-4 overflow-x-auto whitespace-nowrap">
        {collections.map((collection) => {
          return (
            <li
              key={collection.id}
              className="flex items-center shrink-0 max-w-100 md:max-w-none"
            >
              <div>
                <Image
                  src={collection.imageSrc}
                  height="150"
                  width="150"
                  alt={collection.alt}
                />
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href={collection.href}
                  className="self-end flex h-10 w-10 items-center justify-center rounded-full border border-[hsla(0,0%,100%,0.4)] border-solid"
                >
                  <MoveUpRight size="20" strokeWidth="3" />
                </Link>

                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className="font-syne text-3xl md:text-4xl font-bold">
                      {collection.title}
                    </h2>
                    <p className="font-syne text-[hsla(52,98%,53%,1)] text-2xl md:text-3xl">
                      {" "}
                      Collection
                    </p>
                  </div>
                  <p className="max-w-75 text-[hsla(0,0%,100%,0.8)] whitespace-normal md:text-lg">
                    {collection.description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
