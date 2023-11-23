import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export function useCart() {
  return useContext(CartContext);
}
