import { Link } from "react-router-dom";
import { RightFromBracketIcon } from "../icons";
import { useEffect, useRef, useState } from "react";

import Avatar from "../components/Avatar";
import { useAuth } from "../hooks/use-auth";
export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownEl = useRef(null); // {cuent: null}
  // console.log("after use ref", dropDownEl);

  const { logout, authUser } = useAuth(); 

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropDownEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative" ref={dropDownEl}>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <Avatar src={authUser.profileImage} />
      </div>
      {isOpen && (
        <div className=" w-96 absolute bg-white right-0 translate-y-1 border rounded-xl shadow-xl p-2">
          <Link to={`/profile/${authUser.id}`} onClick={() => setIsOpen(false)}>
            <div className="flex gap-4 p-2 item-center hover:bg-gray-100 rounded-xl">
              <Avatar className="h-14" />
              <div>
                <div className="font-semibold">{authUser.firstname} {authUser.lastname}</div>
                <div className="text-sm text-gray-500">See Your Profile</div>
              </div>
            </div>
          </Link>
          <hr className="m-2 border" />
          <div
            className="flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl"
            onClick={()=>console.log("first")}
          >
            <div className="bg-gray-300 h-9 aspect-square rounded-full flex justify-center items-center">
              <RightFromBracketIcon />
            </div>
            <div className="font-semibold text-sm">Log Out</div>
          </div>
        </div>
      )}
    </div>
  );
} 