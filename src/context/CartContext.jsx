import axios from "../config/axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [getslip, setGetslip] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    const res = await axios.get("/product");
    setProducts(res.data.products);
  };

  const addCart = async (body) => {
    await axios.post("/cart/addCart", body);
  };
  const getCart = async () => {
    return await axios.get("/cart/getCart");
  };

  const deleteCart = async (cartItemId) => {
    const res = await axios.delete(`/cart/deleteCart/${cartItemId}`);
    return res.data;
  };

  const editProduct = async (id, body) => {
    const res = await axios.put(`/product/editproduct/${id}`, body);
    return res.data;
  };

  const deleteProduct = async (id) => {
    await axios.delete(`/product/deleteproduct/${id}`, id);
  };

  const getPayment = async () => {
    const res = await axios.get("/order/paymentslip");
    setGetslip(res.data.payment);
    console.log("yolo", res);
  };

  const updateStatus = async (id,status) => {
    const body = {
      status
    }
    await axios.patch(`/payment/updatestatus/${id}`, body );

  };

  

  return (
    <CartContext.Provider
      value={{
        addCart,
        getCart,
        deleteCart,
        getProductList,
        products,
        editProduct,
        deleteProduct,
        getPayment,
        getslip,
        updateStatus,
       
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
