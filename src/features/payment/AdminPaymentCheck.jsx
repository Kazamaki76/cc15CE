import { useEffect } from "react";
import { useCart } from "../../hooks/use-cart";

import PaymentPage from "../../pages/PaymentPage";

const AdminPaymentCheck = () => {
  const { getslip, getPayment } = useCart();

  useEffect(() => {
    getPayment();
  }, []);
  console.log("+++", getslip);

  return (
    <div className="flex flex-col gap-4">
      {getslip?.map((el, index) => (
        <div key={index}>
          <PaymentPage obj={el} />
        </div>
      ))}
    </div>
  );
};

export default AdminPaymentCheck;
