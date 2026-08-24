import { Phone, Undo2, ShieldCheck } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="p-8 md:p-12 flex flex-wrap gap-4 justify-between">
      <div className="flex items-center gap-2">
        <Phone size={28} />
        <p className="text-xl">CLIENT SUPPORT</p>
      </div>
      <div className="flex items-center gap-2">
        <Undo2 size={28} />
        <p className="text-xl">14-DAY RETURNS</p>
      </div>
      <div className="flex items-center gap-2">
        <ShieldCheck size={28} />
        <p className="text-xl">ENCRYPTED GATEWAY</p>
      </div>
    </section>
  );
}
