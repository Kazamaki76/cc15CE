import { useEffect } from "react";
import { useState } from "react";
import { useCart } from "../../hooks/use-cart";
import PaymentForm from "./PaymentForm";
import axios from "../../config/axios";

const Payment = () => {
  const [data, setData] = useState([]);

  const { getCart } = useCart();

  useEffect(() => {
    getCart().then((res) => {
      console.log(res);
      setData(res.data.cart);
    });
  }, []);

  const PostPayment = async (sum) => {
    const body = {
      totalPrice: sum,
      orderId: 1,
    };

    const res = await axios.post("payment/update-payment", body);
    console.log(res);
  };

  let sum = 0;

  data.map((x) => (sum += +x.product.price * x.quantity));

  return (
    <div>
      <div> </div>
      <div>{sum}</div>
      <div>
        <PaymentForm
          onSuccess={() => {
            PostPayment(sum);
          }}
        />
      </div>
    </div>
  );
};
export default Payment;
