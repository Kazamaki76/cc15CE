import ProductItem from "./ProductItem";

export default function ProductList({ allProduct, deleteProduct }) {
  console.log("-------", allProduct);
  return (
    <div className="flex flex-col gap-4">
      {allProduct?.map((el) => (
        <ProductItem key={el.id} postObj={el} deleteProduct={deleteProduct} />
      ))}
    </div>
  );
}
