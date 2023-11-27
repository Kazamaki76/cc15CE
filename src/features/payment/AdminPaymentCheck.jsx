import { useEffect } from "react";
import { useCart } from "../../hooks/use-cart";

import PaymentPage from "../../pages/PaymentPage";
import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import axios from "axios";
import e from "cors";

const AdminPaymentCheck = () => {
  const { getslip, getPayment } = useCart();

  useEffect(() => {
    getPayment();
  }, []);
  console.log("+++", getslip);

  const [loading, setLoading] = useState(null);
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    axios
      .get("/order/paymentslip")
      .then((res) => setPayment(res.data.payment[0].payment))
      .catch((error) => console.log(error));
  }, []);

  const { authUser } = useAuth();

  return (
    <div className="flex flex-col gap-4">
      {getslip?.map((el, index) => (
        <div key={index}>
          <PaymentPage obj={el} />
          <div>
            {el.id} , {el.user.firstName } {el.user.lastName} {el.payment.map((adminCheckPrice) => (
              <div> 
                {adminCheckPrice.totalPrice}
              </div>
            ))}
          </div>

          <img src={el.paymentImage} alt="" />
        </div>
      ))}
    </div>
  );
};

export default AdminPaymentCheck;
