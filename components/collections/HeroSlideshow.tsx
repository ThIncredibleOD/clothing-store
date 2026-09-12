"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { MoveRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      imageSrc: "/home-1.png",
      title: "MENS",
      subtitle:
        "No restocks. Zero compromises. Engineered for the concrete and built to outlast the hype.",
    },
    {
      id: 2,
      imageSrc: "/home-1.png",
      title: "LADIES",
      subtitle:
        "Bold silhouettes. Effortless confidence. Designed to move with you and made to stand apart.",
    },
    {
      id: 3,
      imageSrc: "/home-1.png",
      title: "KIDS",
      subtitle:
        "Big style for little legends. Made for every adventure, built to keep up with their energy.",
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleGoToSlide = (number: number) => {
    setCurrentSlide(number);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearTimeout(interval);
  }, [currentSlide]);

  return (
    <section className="relative h-screen">
      <button
        className={`bg-[hsla(0,0%,0%,0.1)] text-white absolute left-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full ${currentSlide === 0 ? "hidden" : "flex"} items-center justify-center cursor-pointer`}
        onClick={handlePreviousSlide}
      >
        <ChevronLeft />
      </button>

      <button
        className={`bg-[hsla(0,0%,0%,0.1)] text-white absolute right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full ${currentSlide === slides.length - 1 ? "hidden" : "flex"} items-center justify-center cursor-pointer`}
        onClick={handleNextSlide}
      >
        <ChevronRight />
      </button>

      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
        <Image
          src={slides[currentSlide].imageSrc}
          fill
          className="object-cover"
          alt="Latest Collection"
        />
      </div>

      <div className="h-full flex flex-col justify-end gap-8 p-8 md:p-12">
        <h1 className="font-syne text-5xl/14 md:text-7xl/14 max-w-62.5 md:max-w-none font-bold text-white">
          {slides[currentSlide].title}
        </h1>
        <p className="text-white text-shadow-[2px_2px_4px_hsla(0,0%,0%,1)] md:text-lg">
          {slides[currentSlide].subtitle}
        </p>
        <button className="bg-[hsla(52,98%,53%,1)] text-black font-bold w-fit flex items-center gap-4 px-2 py-4 rounded-md cursor-pointer">
          SHOP NOW
          <MoveRight />
        </button>
        {slides.length > 1 && (
          <ul className="flex items-center justify-end gap-4">
            {slides.map((slide, index) => {
              return (
                <li key={slide.id}>
                  <button
                    className={`${currentSlide === slide.id - 1 ? "bg-[hsla(52,98%,53%,1)]" : "bg-white"} h-2 w-2 md:h-4 md:w-4 rounded-full cursor-pointer`}
                    onClick={() => handleGoToSlide(index)}
                  ></button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
