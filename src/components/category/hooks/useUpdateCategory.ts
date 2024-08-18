import { CategoryApiClient } from "../../../services/categoryApiClient.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ShowNotification, {
  NotiStyle
} from "../../notification/ShowNotification.ts";

type UpdateReqBody = {
  unmatched_category_id: number[];
  category_id: number;
};

function useUpdateCategory() {
  const queryClient = useQueryClient();
  const categoryClient = new CategoryApiClient<unknown, UpdateReqBody>(
    "/category"
  );
  return useMutation<unknown, Error, UpdateReqBody>({
    mutationFn: categoryClient.updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["unmatched_category"] });
      ShowNotification(NotiStyle.blue, "Success", "Update status successfully");
    },
    onError: () => {
      ShowNotification(
        NotiStyle.red,
        "Error",
        "Cannot update matching category ID"
      );
    }
  });
}

export default useUpdateCategory;
