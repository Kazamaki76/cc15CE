import { useState } from "react";
import { useCart } from "../../hooks/use-cart";
import ProductContent from "./ProductContent";
import ProductHeader from "./ProductHeader";
import { useAuth } from "../../hooks/use-auth";

export default function ProductItem({ postObj, deletePost, id }) {
  const {authUser} = useAuth();
  const { editProduct } = useCart();
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const handleEdit = () => {
    console.log("handleEdit")
    setIsEdit(true);
  };

  const handleEditProduct = () => {
    console.log("handleEditProduct")
    editProduct(id, input);
    setIsEdit(false);
  };
  

  return (
    <>
    {authUser.isAdmin ? (
    <div className="bg-white flex px-4 pt-3 border shadow rounded-lg">
      <div>
        <ProductHeader handleEditProduct={handleEditProduct} postObj={postObj} input={input} setInput={setInput} isEdit={isEdit} deletePost={deletePost} />
        <ProductContent message={postObj.message} image={postObj.image} />
      </div>
      <div className="flex items-center">
        <button className="bg-red-200" onClick={handleEdit}>
          edit
        </button>
        <button className="bg-red-200">delete</button>
      </div>
    </div>
    ) : (
    <div className="bg-white flex px-4 pt-3 border shadow rounded-lg">
      <div>
        <ProductHeader handleEditProduct={handleEditProduct} postObj={postObj} input={input} setInput={setInput} isEdit={isEdit} deletePost={deletePost} />
        <ProductContent message={postObj.message} image={postObj.image} />
      </div>
    </div>

    )} 
    </>
  );
}
