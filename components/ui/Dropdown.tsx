"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Dropdown({ itemList, handleClick }) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        handleClick(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClick]);

  return (
    <div
      ref={dropdownRef}
      className="absolute top-18 right-5 w-50 rounded-xl bg-[hsl(0,0%,7%)] p-2 text-white"
    >
      <nav className="flex flex-col gap-2 text-lg">
        {itemList.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => handleClick(false)}
              className="flex items-center gap-3 rounded-md p-2 hover:bg-[hsla(0,0%,27%,1)]"
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
