import { CategoryApiClient } from "../../../services/categoryApiClient.ts";
import { useQuery } from "@tanstack/react-query";

export type Category = {
  id: number;
  name: string;
  path: string;
};

type Response = {
  data: Category[];
};

function useGetAllCategory() {
  const categoryClient = new CategoryApiClient<Response>("/category");
  return useQuery<unknown, Error, Response>({
    queryKey: ["category"],
    queryFn: categoryClient.getAllCategory
  });
}

export default useGetAllCategory;
