import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Summary from "@/components/ui/Summary";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-30 md:pt-35 flex flex-col lg:flex-row lg:justify-between lg:gap-10">
      {children}
      <div>
        <Link
          href="/cart"
          className="text-[hsla(52,98%,53%,1)] flex items-center gap-2 p-8 md:p-12 cursor-pointer"
        >
          <ChevronLeft />
          Return to Cart
        </Link>

        <Summary />

        <div className="flex items-start gap-3 px-8 md:px-12">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              className="h-5 w-5 appearance-none rounded-full border-2 border-gray-500 checked:border-gray-500 checked:bg-[radial-gradient(circle,_white_35%,_transparent_40%)]"
            />
            <p>
              I have read and agreed to the store{" "}
              <span className="text-[hsla(52,98%,53%,1)]">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-[hsla(52,98%,53%,1)]">Privacy Policy</span>.
            </p>
          </label>
        </div>
      </div>
    </main>
  );
}
