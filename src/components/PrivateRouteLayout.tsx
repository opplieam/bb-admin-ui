import { Navigate } from "react-router-dom";
import Layout from "./layout/Layout.tsx";

function PrivateRouteLayout() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return <Layout />;
}

export default PrivateRouteLayout;
