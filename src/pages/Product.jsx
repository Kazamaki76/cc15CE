import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import axios from "../config/axios";
import { useAuth } from "../hooks/use-auth";
import { AddCard } from "@mui/icons-material";
import { useCart } from "../hooks/use-cart";

function Product() {
  const [selectImg, setSelectImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { authUser } = useAuth();
  const { addCart, products } = useCart();

  console.log(id);
  console.log(authUser.id);

  // const addCart = async () => {
  //   const cartAdded = { id, quantity, authUser: authUser.id };
  //   console.log(cartAdded);
  //   const res = await axios.post("/cart/addCart", cartAdded);
  //   console.log(res.data);
  // };

  const handleAddCart = () => {
    const cartAdded = { id, quantity, authUser: authUser.id };

    // console.log(addCart)
    addCart(cartAdded);
  };

  let targetProduct = null;

  targetProduct = products.find((x) => x.id === +id);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={targetProduct.image}
            alt=""
            onClick={(e) => setSelectImg(0)}
          />
        </div>
        <div className="mainImg">
          <img src={targetProduct.image} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{targetProduct.name}</h1>
        <span>{targetProduct.price}</span>

        <p>{targetProduct.description}</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <div className="add" onClick={handleAddCart}>
          <AddShoppingCartIcon />
          Add to cart
        </div>

        <div className="info">
          <span>Vendor : CE </span>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Product;
