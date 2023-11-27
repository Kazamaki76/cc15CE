import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentComplete = () => {
  const navigate = useNavigate()
  useEffect(() => { 
    setTimeout(() => {
      navigate("/")
    }, 2000);
  } ,[])
  return <div>PaymentComplete</div>;

};

export default PaymentComplete;
