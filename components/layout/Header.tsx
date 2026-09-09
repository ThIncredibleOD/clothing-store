"use client";

import Image from "next/image";
import {
  ShoppingCart,
  Search,
  Menu,
  UserRound,
  House,
  Shirt,
  Info,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useStore } from "@/context/StoreContext";
import Dropdown from "../ui/Dropdown";

export default function Header() {
  const { cart } = useStore();
  const [dark, setDark] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const headerRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { id: 1, name: "HOME", href: "/" },
    { id: 2, name: "COLLECTIONS", href: "/collections" },
    { id: 3, name: "ABOUT", href: "/#" },
  ];

  const dropdownNavItems = [
    { id: 1, name: "Home", href: "/", icon: House },
    { id: 2, name: "Profile", href: "/#", icon: UserRound },
    { id: 3, name: "Collections", href: "/collections", icon: Shirt },
    { id: 4, name: "About", href: "/#", icon: Info },
  ];

  const handleDropdown = (value?: boolean) => {
    if (value !== undefined) {
      setDropdown(value);
      return;
    }

    setDropdown((prev) => !prev);
  };

  useEffect(() => {
    const checkBackground = () => {
      const header = headerRef.current;

      if (!header) return;

      const element = document.elementFromPoint(
        window.innerWidth / 2,
        header.getBoundingClientRect().bottom + 5,
      );

      if (!element) return;

      const background = window.getComputedStyle(element).backgroundColor;

      const rgb = background.match(/\d+/g);

      if (!rgb) return;

      const [r, g, b] = rgb;

      const brightness = (r * 299 + g * 587 + b * 114) / 1000;

      setDark(brightness < 128);
    };

    checkBackground();

    window.addEventListener("scroll", checkBackground);
    window.addEventListener("resize", checkBackground);

    return () => {
      window.removeEventListener("scroll", checkBackground);
      window.removeEventListener("resize", checkBackground);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 p-5 text-black z-1000"
    >
      <div
        className={`${dark ? "bg-black/10" : "bg-white/30"} backdrop-blur-md w-full flex items-center justify-between pr-5 rounded-full shadow-[0_5px_4px_hsla(0,0%,0%,0.25)] relative`}
      >
        {dropdown && (
          <Dropdown itemList={dropdownNavItems} handleClick={handleDropdown} />
        )}

        <div
          role="button"
          className="relative cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/logo.png"
            width="80"
            height="80"
            alt="logo image"
            className="object-cover"
          />
        </div>

        <nav className="hidden md:flex gap-4 md:gap-8 text-white font-bold">
          {navItems.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`${item.href === pathname ? "border-b-2 border-b-[hsla(52,98%,53%,1)]" : ""}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="text-white flex items-center gap-4 cursor-pointer">
          <Link
            href="/#"
            className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-solid cursor-pointer"
          >
            <UserRound size="20" />
          </Link>
          <Link
            href="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-solid cursor-pointer"
          >
            {cart.length > 0 && (
              <div className="absolute bg-[hsl(52,98%,53%)] text-black rounded-full px-1 -top-3 left-5">
                {cart.length}
              </div>
            )}

            <ShoppingCart size="20" />
          </Link>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-solid cursor-pointer">
            <Search size="20" />
          </button>
          <button
            className="md:hidden text-[hsla(52,98%,53%,1)] cursor-pointer"
            onClick={handleDropdown}
          >
            <Menu size="30" strokeWidth="3" />
          </button>
        </div>
      </div>
    </header>
  );
}
