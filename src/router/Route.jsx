import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";
import RedirectIfAuthenticatedAdmin from "../features/admin/RedirectIfAuthenticateAdmin";

import { RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Authenticated from "../features/auth/Authenticate";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import CreateProduct from "../features/product/CreateProductButton";

import Product from "../pages/Product";
import ProductList from "../features/product/ProductList";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function Route() {
  const { authUser } = useAuth();
  const user = [
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
    {
      path: "/login",
      element: (
        <RedirectIfAuthenticated>
          <LoginPage />
        </RedirectIfAuthenticated>
      ),
    },
    { path: "*", element: <Navigate to="/" /> },
  ];

  const admin = [
    {
      path: "/admin/createproduct",
      element: <CreateProduct /> 
    },
    {
      path: "/login",
      element: (
        <RedirectIfAuthenticatedAdmin>
          <LoginPage />
        </RedirectIfAuthenticatedAdmin>
      ),
    },
  ];

  const selectChild = authUser?.isAdmin === true ? admin : user;
  const router = createBrowserRouter(selectChild);

  return <RouterProvider router={router} />;
}
