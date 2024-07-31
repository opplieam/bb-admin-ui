import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login.tsx";
import ErrorNotFound from "./components/error/ErrorNotFound.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />
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
