import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";

import { RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Authenticated from "../features/auth/Authenticate";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import CreateProduct from "../features/product/CreateProductButton";


import Product from "../pages/Product";
import ProductList from "../features/product/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [
      { path: "", element: <HomePage /> },
      // { path: "login", element: <LoginPage /> },
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

  //   {
  //     path: "/product",
  //     element:
  // //
  //     <CreateProduct />,
  //   },
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [{ path: "/productlist", element: <ProductList /> }],
  },
  {
    path: "/product",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [{ path: "/product/:id", element: <Product /> }],
  },
  {
    path: "/createproduct",
    element: <CreateProduct />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
