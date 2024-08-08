import { useMutation, useQueryClient } from "@tanstack/react-query";
import AccountApiClient from "../../../services/accountApiClient.ts";
import ShowNotification, {
  NotiStyle
} from "../../notification/ShowNotification.ts";

type UpdateRequestBody = {
  id: number;
  active: boolean;
};

function useUpdateUser() {
  const queryClient = useQueryClient();
  const accountClient = new AccountApiClient<unknown, UpdateRequestBody>(
    "/user"
  );
  return useMutation<unknown, Error, UpdateRequestBody>({
    mutationFn: accountClient.updateUser,
    onSuccess: () => {
      // noinspection JSAnnotator
      queryClient.invalidateQueries({ queryKey: ["users"] });

      ShowNotification(NotiStyle.blue, "Success", "Update status successfully");
    },
    onError: () => {
      ShowNotification(NotiStyle.red, "Error", "Cannot update user status");
    }
  });
}

export default useUpdateUser;
