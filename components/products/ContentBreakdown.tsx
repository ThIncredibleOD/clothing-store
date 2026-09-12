"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function ContentBreakdown({ product }) {
  const [openedContent, setOpenedContent] = useState(null);

  const handleOpenContent = (id) => {
    if (openedContent !== id) {
      setOpenedContent(id);
      return;
    }
    setOpenedContent(null);
  };

  return (
    <section className="p-8 md:p-12 flex flex-col gap-10">
      <header className="flex items-baseline-last gap-4">
        <div className="bg-[hsla(52,98%,53%,1)] h-5 w-5 rounded-full"></div>
        <h2 className="font-syne text-3xl font-bold">CONTENT BREAKDOWN</h2>
      </header>

      <ul className="flex flex-col gap-4">
        {product.contentBreakdown.map((item) => {
          return (
            <li
              key={item.id}
              className="flex flex-col gap-4 border-b border-b-[hsla(52,98%,53%,1)] p-4 rounded-2xl cursor-pointer"
              onClick={() => handleOpenContent(item.id)}
            >
              <div className="flex-1 flex justify-between items-center">
                <p className="font-syne text-xl">{item.title}</p>
                <button
                  className="bg-[hsla(52,98%,53%,1)] text-black p-2 rounded-sm cursor-pointer"
                  onClick={() => handleOpenContent(item.id)}
                >
                  {openedContent === item.id ? (
                    <Minus size={30} />
                  ) : (
                    <Plus size={30} />
                  )}
                </button>
              </div>
              {openedContent === item.id && (
                <p className="text-lg">{item.description}</p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
