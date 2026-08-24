export default function Summary() {
  return (
    <section className="p-8 md:p-12">
      <div className="flex flex-col gap-8 border border-[hsla(52,98%,53%,1)] p-4 rounded-2xl">
        <header>
          <h3 className="text-xl font-bold">SUMMARY</h3>
        </header>

        <div className="flex flex-col gap-4 border-b border-b-[hsla(52,98%,53%,1)] pb-2">
          <div className="font-bold flex items-center justify-between">
            <p>Item’s total (1)</p>
            <p>$320</p>
          </div>
          <div className="font-bold flex items-center justify-between">
            <p>Delivery fees</p>
            <p>$5</p>
          </div>
        </div>

        <div className=" font-bold flex items-center justify-between">
          <p className="text-xl">Total</p>
          <p>$325</p>
        </div>

        <button className="text-xl font-bold bg-[hsla(52,98%,53%,1)] text-black p-4 rounded-md cursor-pointer">
          CHECKOUT ($325)
        </button>
      </div>
    </section>
  );
}
