import { useState } from "react";
import { useCart } from "../../hooks/use-cart";
import ProductContent from "./ProductContent";
import ProductHeader from "./ProductHeader";
import { useAuth } from "../../hooks/use-auth";

export default function ProductItem({ postObj, deletePost, id }) {
  const { authUser } = useAuth();
  const { editProduct, deleteProduct, getProductList } = useCart();
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const handleEdit = () => {
    console.log("handleEdit");
    setIsEdit(true);
  };

  const handleEditProduct = () => {
    console.log("handleEditProduct");
    editProduct(id, input).then((res) => getProductList());
    setIsEdit(false);
  };

  const handleClickDelete = () => {
    console.log(id);
    deleteProduct(id).then((res) => getProductList());
  };

  return (
    <>
      {authUser.isAdmin ? (
        <div className=" bg-green-500 flex flex-col justify-between  ">
          <div>
            <ProductHeader
              handleEditProduct={handleEditProduct}
              postObj={postObj}
              input={input}
              setInput={setInput}
              isEdit={isEdit}
              deletePost={deletePost}
            />
            <ProductContent message={postObj.message} image={postObj.image} />
          </div>
          {isEdit ? (
            <> </>
          ) : (
            <div className="flex  justify-center gap-2 ">
              <button
                className="bg-red-200 flex justify-center items-center "
                onClick={handleEdit}
              >
                edit
              </button>
              <button
                type="button"
                className="bg-red-200 flex justify-center items-center"
                onClick={handleClickDelete}
              >
                delete
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-green-500 flex px-4 pt-3 border shadow rounded-lg justify-between">
          <div>
            <ProductHeader
              handleEditProduct={handleEditProduct}
              postObj={postObj}
              input={input}
              setInput={setInput}
              isEdit={isEdit}
              deletePost={deletePost}
            />
            <ProductContent message={postObj.message} image={postObj.image} />
          </div>
        </div>
      )}
    </>
  );
}
