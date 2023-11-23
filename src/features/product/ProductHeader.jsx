import { Link } from "react-router-dom";
import formatTimeAgo from "../../util/time-ago";
import useDropDown from "../../hooks/use-dropdown";
import { useAuth } from "../../hooks/use-auth";
import { useEffect } from "react";
import { useState } from "react";

export default function ProductHeader({ postObj, deletePost, isEdit, input, setInput, handleEditProduct }) {
  const { dropDownEl, isOpen, setIsOpen } = useDropDown();
  const { authUser } = useAuth();

  useEffect(() => {
    console.log(postObj);
  }, []);

  const handleClickDelete = () => {
    deletePost(postObj?.id);
  };

  const handleOnChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setInput({...input, [fieldName]: fieldValue});
  };

  return (
    <>
    {authUser?.isAdmin ? (
    <div className="flex gap-3">
      {isEdit ? (
        <>
          <input value={input.name} name={"name"} onChange={handleOnChange} type="text" />
          <input value={input.description} name={"description"} onChange={handleOnChange} type="text" />
          <input value={input.price} name={"price"} onChange={handleOnChange} type="text" />
          <button onClick={handleEditProduct}>Edit Product</button>
        </>
      ) : (
        <Link to={`/product/${postObj?.id}`}>
          {postObj.name} ${postObj.price}{" "}
        </Link>
      )}
    </div>
    ) : (
    <div className="flex gap-3">
        <Link to={`/product/${postObj?.id}`}>
          {postObj.name} ${postObj.price}{" "}
        </Link>
    </div>
    )} 
    </>
  );
}
