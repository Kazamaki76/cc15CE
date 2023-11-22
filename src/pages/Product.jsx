import  { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Product() {
  const [selectImg, setSelectImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pokemon_Trading_Card_Game_cardback.jpg/220px-Pokemon_Trading_Card_Game_cardback.jpg",
    "https://www.mypokecard.com/en/Gallery/my/galery/LLTMnq94dp5.jpg",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$199</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto saepe
          tempore earum aliquid enim velit aliquam aut, eius necessitatibus
          quibusdam beatae iure rem! Corrupti eaque libero fugit laudantium
          commodi eum.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          Add to cart
        </button>
        <div className="links">
          <div className="item">
            <FavoriteIcon />
            Add to wish list
          </div>
        </div>
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
    </div>
  );
}

export default Product;
