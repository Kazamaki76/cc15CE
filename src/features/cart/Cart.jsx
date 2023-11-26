import { useEffect } from "react";
import { useCart } from "../../hooks/use-cart";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";

const Cart = () => {
  const [data, setData] = useState([]);

  const { getCart, deleteCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    getCart().then((res) => {
      console.log(res);
      setData(res.data.cart);
    });
  }, []);

  const PostPayment = () => {
    // const body = {
    //   totalPrice: sum,
    //   orderId: 1,
    // };

    // const res = await axios.post("payment/update-payment", body);
    // console.log(res);

    navigate("/checkout");
  };
  let sum = 0;

  data.map((x) => (sum += +x.product.price * x.quantity));

  return (
    <div className="cart">
      <h1>Product in cart</h1>

      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.product.image} alt="" />
          <div className="details">
            <h1>{item.product.name}</h1>
            <p>{item.product.description?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity}x $ {item.product.price}
            </div>
          </div>
          <div
            onClick={async () => {
              const deletes = await deleteCart(item.id);
              const getdata = await getCart();
              console.log(getdata.data);
              setData(getdata.data.cart);
            }}
          >
            <DeleteOutlinedIcon className="delete" />
          </div>
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>${sum}</span>
        <button onClick={() => PostPayment()}>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Cart;
