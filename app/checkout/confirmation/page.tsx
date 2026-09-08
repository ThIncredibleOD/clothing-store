import AddressConfirmation from "@/components/Confirmation/AddressConfirmation";
import ShippingMethod from "@/components/Confirmation/ShippingMethod";

export default function Confirmation() {
  return (
    <div>
      <AddressConfirmation />
      <ShippingMethod />
    </div>
  );
}
