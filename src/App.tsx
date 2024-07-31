import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login.tsx";
import ErrorNotFound from "./components/error/ErrorNotFound.tsx";
import PrivateRouteLayout from "./components/PrivateRouteLayout.tsx";
import Account from "./components/account/Account.tsx";
import Category from "./components/category/Category.tsx";
import Product from "./components/product/Product.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRouteLayout />,
    children: [
      { index: true, path: "category", element: <Category /> },
      { path: "account", element: <Account /> },
      { path: "product", element: <Product /> }
    ]
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "*",
    element: <ErrorNotFound />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
