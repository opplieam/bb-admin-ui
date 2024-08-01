import ApiClient from "../../../services/apiClient.ts";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

type Response = {
  msg: string;
};

function useLogout() {
  const logoutClient = new ApiClient<Response>("/logout");
  const navigate = useNavigate();
  return useMutation<Response, Error>({
    mutationFn: logoutClient.logout,
    onSuccess: () => {
      localStorage.removeItem("token");
      navigate("/login");
    }
  });
}

export default useLogout;
