import AccountApiClient from "../../../services/accountApiClient.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ShowNotification, {
  NotiStyle
} from "../../notification/ShowNotification.ts";

type RequestBody = {
  username: string;
  password: string;
};

function useCreateUser() {
  const queryClient = useQueryClient();
  const accountClient = new AccountApiClient<unknown, RequestBody>("/user");
  return useMutation<unknown, Error, RequestBody>({
    mutationFn: accountClient.createUser,
    onSuccess: () => {
      // noinspection JSAnnotator
      queryClient.invalidateQueries({ queryKey: ["users"] });

      ShowNotification(NotiStyle.blue, "Success", "User created successfully");
    },
    onError: () => {
      ShowNotification(
        NotiStyle.red,
        "Error",
        "Cannot create user, user may already exist"
      );
    }
  });
}

export default useCreateUser;
