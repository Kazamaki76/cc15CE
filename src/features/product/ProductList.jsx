import ProductItem from "./ProductItem";
import { useCart } from "../../hooks/use-cart";

export default function ProductList({ deleteProduct }) {
  const { products } = useCart();

  return (
    <div className=" flex flex-col gap-4">
   
    
          <div>Product List</div>
          <div className="grid grid-cols-4 gap-2">
            {products?.map((el) => (
              <ProductItem
                key={el.id}
                postObj={el}
                id={el.id}
                deleteProduct={deleteProduct}
              />
            ))}
          </div>
        </div>
     
  );
}
