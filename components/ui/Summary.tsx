"use client";

import { useStore } from "@/context/StoreContext";
import { usePathname, useRouter } from "next/navigation";

export default function Summary() {
  const { cart } = useStore();

  const pathname = usePathname();
  const router = useRouter();

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const deliveryFees = 5;
  const total = cartTotal + deliveryFees;

  const handleNextRoute = (path) => {
    if (path === "/cart") {
      router.push("/shipping-address");
      return;
    }
  };

  return (
    <section className="md:flex-1 lg:max-w-150 p-8 md:p-12">
      <div className="flex flex-col gap-8 border border-[hsla(52,98%,53%,1)] p-4 rounded-2xl">
        <header>
          <h3 className="text-xl font-bold">SUMMARY</h3>
        </header>

        <div className="flex flex-col gap-4 border-b border-b-[hsla(52,98%,53%,1)] pb-2">
          <div className="font-bold flex items-center justify-between">
            <p>Item’s total ({cart.length})</p>
            <p>${cartTotal}</p>
          </div>
          <div className="font-bold flex items-center justify-between">
            <p>Delivery fees</p>
            <p>${deliveryFees}</p>
          </div>
        </div>

        <div className=" font-bold flex items-center justify-between">
          <p className="text-xl">Total</p>
          <p>${total}</p>
        </div>

        <button
          className="text-xl font-bold bg-[hsla(52,98%,53%,1)] text-black p-4 rounded-md cursor-pointer"
          onClick={() => handleNextRoute(pathname)}
        >
          {pathname === "/cart" ? "CHECKOUT" : "PLACE ORDER"} (${total})
        </button>
      </div>
    </section>
  );
}
