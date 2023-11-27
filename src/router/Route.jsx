import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";
import RedirectIfAuthenticatedAdmin from "../features/admin/RedirectIfAuthenticateAdmin";

import { RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Authenticated from "../features/auth/Authenticate";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import CreateProduct from "../features/product/CreateProductButton";
import Payment from "../features/payment/Payment";

import Product from "../pages/Product";
import ProductList from "../features/product/ProductList";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import PaymentComplete from "../features/payment/PaymentComplete";
import AdminPayment from "../features/payment/AdminPaymentCheck";
import { CartContext } from "../context/CartContext";
import AdminLayout from "../layout/AdminLayout";

export default function Route() {
  const { authUser } = useAuth();
  const user = [
    {
      path: "/login",
      element: (
        <RedirectIfAuthenticated>
          <LoginPage />
        </RedirectIfAuthenticated>
      ),
    },
    {
      path: "/",
      element: (
        <Authenticated>
          <Layout />
        </Authenticated>
      ),
      children: [
        { path: "", element: <HomePage /> },
        { path: "/productlist", element: <ProductList /> },
        { path: "/product/:id", element: <Product /> },
      ],
    },
    { path: "*", element: <Navigate to="/" /> },
    {
      path: "/checkout",
      element: <Payment />,
    },
    {
      path: "/paymenyconfirm",
      element: <PaymentComplete />,
    },
  ];

  const admin = [
    {
      path: "/login",
      element: (
        <RedirectIfAuthenticatedAdmin>
          <LoginPage />
        </RedirectIfAuthenticatedAdmin>
      ),
    },
    {
      path: "/",
      element: (
        <Authenticated>
          <AdminLayout />
        </Authenticated>
      ),
      children: [
        { path: "/admin/createproduct", element: <CreateProduct /> },
        { path: "/productlist", element: <ProductList /> },
        {
          path: "/checkpayment",
          element: <AdminPayment />,
        },
      ],
    },
   
  ];

  const selectChild = authUser?.isAdmin === true ? admin : user;
  const router = createBrowserRouter(selectChild);

  return <RouterProvider router={router} />;
}
