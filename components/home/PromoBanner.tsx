import { MoveRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="flex flex-col gap-8 md:gap-12 px-4 py-10 border-solid border-t border-b border-t-[hsla(0,0%,100%,0.4)] border-b-[hsla(0,0%,100%,0.4)]">
      <h2 className="font-syne text-5xl md:text-8xl font-bold">
        UNLOCK <span className="text-4xl">10%</span> OFF
      </h2>
      <p className="text-[hsla(0,0%,100%,0.8)] md:text-xl">
        Get 10% off your first order, plus early access to new drops and
        behind-the-scenes archives.
      </p>

      <form className="flex flex-col gap-6 md:gap-14">
        <div className="flex flex-col md:flex-row gap-6 md:max-w-[80%]">
          <input
            type="text"
            placeholder="First Name"
            className="border-b border-[hsla(0,0%,100%,0.4)] w-full p-4"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border-b border-[hsla(0,0%,100%,0.4)] w-full p-4"
          />
        </div>

        <button
          type="submit"
          className="font-syne flex items-center gap-4 w-fit bg-[hsla(52,98%,53%,1)] text-black p-6 text-xl font-bold cursor-pointer"
        >
          UNLOCK ACCESS
          <MoveRight strokeWidth="2.5" />
        </button>
      </form>
    </section>
  );
}
