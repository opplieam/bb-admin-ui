import ApiClient from "../../../services/apiClient.ts";
import { useMutation } from "@tanstack/react-query";

type Response = {
  token: string;
};

type RequestBody = {
  username: string;
  password: string;
};

function useAuthed() {
  const loginClient = new ApiClient<Response, RequestBody>("/login");

  return useMutation<Response, Error, RequestBody>({
    mutationFn: loginClient.authenticate,
    onSuccess: data => {
      localStorage.setItem("token", data.token);
    }
  });
}

export default useAuthed;
