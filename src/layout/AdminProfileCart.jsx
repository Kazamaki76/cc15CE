import { useState } from "react";
import { useAuth } from "../hooks/use-auth";


export default function AdminProfileCart() {
  
  const { logout, authUser } = useAuth(); 
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       
      {/* Profile dropdown */}
      <div className="relative ml-3">
        <div>
          <button
            type="button"
            onClick={() => setDropdownVisible(!isDropdownVisible)} // Added this line
            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open Admin menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
              alt=""
            />
          </button>
        </div>

        {isDropdownVisible && ( // Added this line
          <div
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex={-1}
          >
            {/* Active: "bg-gray-100", Not Active: "" */}
           
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex={-1}
              id="user-menu-item-2"
              onClick={logout}
            >
              Sign out
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
