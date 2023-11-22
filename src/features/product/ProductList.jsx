import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";

export default function ProductList({ deleteProduct }) {
  useEffect(() => {
    getProductList();
  }, []);
  const getProductList = async () => {
    console.log("trigger");
    const res = await axios.get("/product") ;
    setProducts(res.data.products)
    console.log(products)
    console.log("res", res);
  };
  const [products, setProducts] = useState([])


  return (
    <div className="flex flex-col gap-4">
      {products?.map((el) => (
        <ProductItem key={el.id} postObj={el} deleteProduct={deleteProduct} />
      ))}
    </div>
  );
}
