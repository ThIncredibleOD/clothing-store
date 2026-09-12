"use client";

import { useAddress } from "@/context/AddressContext";
import { Info, MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddressForm() {
  const { shippingAddress, updateShippingAddress } = useAddress();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push("/checkout/confirmation");
  };

  return (
    <section className=" md:flex-1 p-8 md:p-12 flex flex-col gap-10">
      <h1 className="text-3xl font-bold">Shipping Address</h1>

      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 border-b border-[hsla(0,0%,100%,0.4)] px-2 pb-4 outline-none"
            value={shippingAddress.firstName}
            onChange={(e) => updateShippingAddress("firstName", e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 border-b border-[hsla(0,0%,100%,0.4)] px-2 pb-4 outline-none"
            value={shippingAddress.lastName}
            onChange={(e) => updateShippingAddress("lastName", e.target.value)}
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          className="border-b border-[hsla(0,0%,100%,0.4)] px-2 pb-4 outline-none"
          value={shippingAddress.email}
          onChange={(e) => updateShippingAddress("email", e.target.value)}
        />

        <input
          type="text"
          placeholder="State/Province"
          className="border-b border-[hsla(0,0%,100%,0.4)] px-2 pb-4 outline-none"
          value={shippingAddress.state}
          onChange={(e) => updateShippingAddress("state", e.target.value)}
        />

        <div className="flex gap-20">
          <input
            type="text"
            placeholder="City"
            className="min-w-0 flex-1 border-b border-[hsla(0,0%,100%,0.4)] px-2 pb-4 outline-none"
            value={shippingAddress.city}
            onChange={(e) => updateShippingAddress("city", e.target.value)}
          />

          <input
            type="text"
            placeholder="District"
            className="min-w-0 flex-1 border-b border-[hsla(0,0%,100%,0.4)] px-2 pb-4 outline-none"
            value={shippingAddress.district}
            onChange={(e) => updateShippingAddress("district", e.target.value)}
          />
        </div>

        <input
          type="text"
          placeholder="Full Street Address"
          className="border-b border-[hsla(0,0%,100%,0.4)] px-2 pb-4 outline-none"
          value={shippingAddress.streetAddress}
          onChange={(e) =>
            updateShippingAddress("streetAddress", e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Phone Number"
          className="border-b border-[hsla(0,0%,100%,0.4)] px-2 pb-4 outline-none"
          value={shippingAddress.phone}
          onChange={(e) => updateShippingAddress("phone", e.target.value)}
        />

        <p className="text-[hsla(0,0%,100%,0.4)] flex items-center gap-2">
          <Info size={24} />
          <span>
            Provide an active number (WhatsApp preferred) to ensure a seamless
            delivery hand-off.
          </span>
        </p>

        <button
          type="submit"
          className="flex justify-center items-center gap-4 text-xl font-bold bg-[hsla(52,98%,53%,1)] text-black p-4 rounded-md cursor-pointer"
        >
          Continue
          <MoveRight />
        </button>
      </form>
    </section>
  );
}
