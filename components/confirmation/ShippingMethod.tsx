export default function ShippingMethod() {
  return (
    <section className="md:flex-1 p-8 md:p-12 flex flex-col gap-10">
      <h1 className="text-3xl font-bold">SHIPPING METHOD</h1>

      <div className="flex justify-between items-center gap-4 border border-[hsla(52,98%,53%,1)] p-4 rounded-2xl">
        <p className="text-lg">
          Standard Shipping
          <span className="text-sm text-[hsla(0,0%,100%,0.4)]">
            {" "}
            3-5 working days
          </span>
        </p>
        <p className="text-2xl">$5</p>
      </div>
    </section>
  );
}
