import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CompleteTheFit() {
  const fits = [
    {
      id: 1,
      title: "Heavyweight Nylon Trench",
      price: 320,
      imageSrc: "/best-seller-1.png",
      alt: "Heavyweight Nylon Trench",
      href: "/#",
    },
    {
      id: 2,
      title: "Asymmetric Zip Bomber",
      price: 99,
      imageSrc: "/best-seller-2.png",
      alt: "Asymmetric Zip Bomber",
      href: "/#",
    },
    {
      id: 3,
      title: "Raw-Edge Ribbed Knit",
      price: 140,
      imageSrc: "/best-seller-3.png",
      alt: "Raw-Edge Ribbed Knit",
      href: "/#",
    },
    {
      id: 4,
      title: "Modular Crossbody Harness",
      price: 95,
      imageSrc: "/best-seller-4.png",
      alt: "Modular Crossbody Harness",
      href: "/#",
    },
  ];

  return (
    <section className="p-8 md:p-12 flex flex-col gap-10">
      <header className="flex items-baseline-last gap-4">
        <div className="bg-[hsla(52,98%,53%,1)] h-5 w-5 rounded-full"></div>
        <h2 className="text-3xl font-bold">COMPLETE THE FIT</h2>
      </header>

      <ul className="collections-scroll w-full flex justify-between gap-10 overflow-x-auto bg-re">
        {fits.map((item) => (
          <li
            key={item.id}
            className="relative flex w-75 shrink-0 flex-col justify-between gap-6"
          >
            <Link
              href={`/products/${item.id}`}
              className="flex-1 flex flex-col justify-between cursor-pointer"
            >
              <div className="flex justify-center">
                <Image
                  src={item.imageSrc}
                  height={250}
                  width={250}
                  alt={item.alt}
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
            </Link>
            <div className="flex items-center justify-between">
              <p className="md:text-lg">${item.price}</p>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsla(0,0%,100%,0.4)] border-solid cursor-pointer">
                <ShoppingCart size="20" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
