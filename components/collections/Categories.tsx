import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      id: 1,
      title: "Clothes",
      imageSrc: "/collection-category-1.png",
      alt: "Clothes",
      href: "/#",
    },
    {
      id: 2,
      title: "Shoes",
      imageSrc: "/collection-category-2.png",
      alt: "Shoes",
      href: "/#",
    },
    {
      id: 3,
      title: "Bags",
      imageSrc: "/collection-category-3.png",
      alt: "Bags",
      href: "/#",
    },
    {
      id: 4,
      title: "Accessories",
      imageSrc: "/collection-category-4.png",
      alt: "Accessories",
      href: "/#",
    },
  ];

  return (
    <section className="p-8 md:p-12 flex flex-col gap-10">
      <header className="flex items-baseline-last gap-4">
        <div className="bg-[hsla(52,98%,53%,1)] h-5 w-5 rounded-full"></div>
        <h2 className="font-syne text-3xl font-bold">CATEGORIES</h2>
      </header>

      <ul className="collections-scroll w-full flex justify-between gap-10 overflow-x-auto bg-re">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={category.href}
              className="relative flex w-75 shrink-0 flex-col justify-between h-full"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={category.imageSrc}
                  height={200}
                  width={200}
                  alt={category.alt}
                />
              </div>

              <h3 className="font-syne absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-3xl text-center md:text-2xl font-bold">
                {category.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
