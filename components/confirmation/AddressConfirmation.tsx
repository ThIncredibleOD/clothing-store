"use client";

import { useAddress } from "@/context/AddressContext";
import { SquarePen } from "lucide-react";
import Link from "next/link";

export default function AddressConfirmation() {
  const { shippingAddress } = useAddress();

  return (
    <section className="md:flex-1 p-8 md:p-12 flex flex-col gap-10">
      <h1 className="text-3xl font-bold">SHIPPING ADDRESS</h1>

      <div className="flex flex-col gap-4 border border-[hsla(52,98%,53%,1)] p-4 rounded-2xl">
        <Link
          href="/checkout/shipping-address"
          className="self-end cursor-pointer"
        >
          <SquarePen />
        </Link>

        <ul className="flex flex-col gap-2 text-lg">
          <li>
            Full Name: {shippingAddress.firstName} {shippingAddress.lastName}
          </li>
          <li>Email: {shippingAddress.email}</li>
          <li>Phone Number: {shippingAddress.phone}</li>
          <li>Address : {shippingAddress.streetAddress}</li>
          <li>State: {shippingAddress.state}</li>
        </ul>
      </div>
    </section>
  );
}
