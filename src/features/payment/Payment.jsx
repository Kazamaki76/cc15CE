import { useEffect } from "react";
import { useState } from "react";
import { useCart } from "../../hooks/use-cart";
import PaymentForm from "./PaymentForm";

const Payment = () => {
  const [data, setData] = useState([]);

  const { getCart } = useCart();

  useEffect(() => {
    getCart().then((res) => {
      console.log(res);
      setData(res.data.cart);
    });
  }, []);

  let sum = 0;

  data.map((x) => (sum += +x.product.price * x.quantity));

  return (
    <div>
      <div> </div>
      <div>{sum}</div>
      <div>
        <PaymentForm onSuccess={() => {}}  />
      </div>
    </div>
  );
};

export default Payment;
