"use client";

import { CreditCard, Landmark, Smartphone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PaymentMethods() {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const paymentMethods = [
    {
      name: "OPay Wallet",
      icon: "/opayIcon.png",
      type: "image",
    },
    {
      name: "Bank Transfer",
      icon: Landmark,
      type: "icon",
    },
    {
      name: "Credit / Debit Card",
      icon: CreditCard,
      type: "icon",
    },
    {
      name: "USSD Code",
      icon: Smartphone,
      type: "icon",
    },
  ];

  const handleSelectedPayment = (name) => {
    setSelectedPayment(name);
  };

  return (
    <section className="flex flex-col gap-10 p-8 md:flex-1 md:p-12">
      <h1 className="font-syne text-3xl font-bold">PAYMENT METHODS</h1>

      <ul className="flex flex-col gap-4">
        {paymentMethods.map((method) => {
          const Icon = method.icon;

          return (
            <li
              key={method.name}
              className={`${selectedPayment === method.name ? "border border-[hsla(52,98%,53%,1)]" : "border-b border-b-[hsla(0,0%,100%,0.4)]"} flex cursor-pointer items-center justify-between rounded-2xl p-4`}
              onClick={() => handleSelectedPayment(method.name)}
            >
              <div className="flex items-center gap-4">
                {method.type === "image" ? (
                  <div className="bg-white p-1">
                    <Image
                      src={Icon}
                      alt={method.name}
                      width={40}
                      height={40}
                    />
                  </div>
                ) : (
                  <div className="bg-white text-black py-1 px-3">
                    <Icon size={24} />
                  </div>
                )}

                <p>{method.name}</p>
              </div>

              <div
                className={`${selectedPayment === method.name ? "bg-[hsla(52,98%,53%,1)]" : "border-2 border-[hsla(0,0%,100%,0.4)]"} h-5 w-5 rounded-full`}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
