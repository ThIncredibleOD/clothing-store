import AddressConfirmation from "@/components/Confirmation/AddressConfirmation";
import PaymentMethods from "@/components/Confirmation/PaymentMethods";
import ShippingMethod from "@/components/Confirmation/ShippingMethod";
import { ShieldCheck } from "lucide-react";

export default function Confirmation() {
  return (
    <div className="flex-1">
      <AddressConfirmation />
      <ShippingMethod />
      <PaymentMethods />

      <div className="p-8 md:p-12">
        <p className="flex item-center gap-2 text-lg font-bold">
          <ShieldCheck />
          ENCRYPTED GATEWAY
        </p>
        <p>
          All transactions are secured with 256-bit SSL encryption. We do not
          store your card details on our servers.
        </p>
      </div>
    </div>
  );
}
