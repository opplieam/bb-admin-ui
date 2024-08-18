import { MetaData } from "../../../commonData.ts";
import { CategoryApiClient } from "../../../services/categoryApiClient.ts";
import { useQuery } from "@tanstack/react-query";

export type UnmatchedCat = {
  id: number;
  path: string;
  category_level: number;
};

type Response = {
  data: UnmatchedCat[];
  metadata: MetaData;
};

function useGetAllUnmatchedCat({ page, page_size }) {
  const categoryClient = new CategoryApiClient<Response>("/unmatched_category");
  return useQuery<unknown, Error, Response>({
    queryKey: ["unmatched_category", page, page_size],
    queryFn: () =>
      categoryClient.getUnmatchedCategory({ page: page, page_size: page_size })
  });
}

export default useGetAllUnmatchedCat;
