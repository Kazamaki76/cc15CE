import { useEffect } from "react";
import { useAuth } from "../hooks/use-auth";
import { useState } from "react";
import axios from "../config/axios";

export default function PaymentPage({ obj }) {
  const [loading, setLoading] = useState(null);
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    axios
      .get("/order/paymentslip")
      .then((res) => setPayment(res.data.payment[0].payment[0].totalPrice))
      .catch((error) => console.log(error));
  }, []);
  console.log(obj);
  const { authUser } = useAuth();
  return (
    <>
    <div>{payment}</div>
      <div> {authUser.firstName + " " + authUser.lastName}</div>
      <img src={obj.paymentImage} alt="" />
    </>
  );
}
