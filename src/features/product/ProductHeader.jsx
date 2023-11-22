import { Link } from "react-router-dom";
import formatTimeAgo from "../../util/time-ago";
import useDropDown from "../../hooks/use-dropdown";
import { useAuth } from "../../hooks/use-auth";
import { useEffect } from "react";

export default function ProductHeader({ postObj, deletePost }) {
  const { dropDownEl, isOpen, setIsOpen } = useDropDown();
  const { authUser } = useAuth();

  useEffect(() => {
    console.log(postObj);
  }, []);

  const handleClickDelete = () => {
    deletePost(postObj?.id);
  };

  return (
    <div className="flex gap-3">
      <Link to={`/product/${postObj?.id}`}>{postObj.name}  ${postObj.price} </Link>
    </div>
  );
}
