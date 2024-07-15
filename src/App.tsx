import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Login from "./components/login/Login.tsx";
import ErrorNotFound from "./components/error/ErrorNotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>main</div>
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
      <MantineProvider defaultColorScheme="dark">
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
