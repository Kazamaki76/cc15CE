import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";

import { RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Authenticated from "../features/auth/Authenticate";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import CreateProduct from "../features/product/CreateProductButton";


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
  {
    path: "/allproduct",
    element: 

    <CreateProduct />,
  },
  // {
  //   path: "/createproduct",
  //   element: <ProductForm />,
  // },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
