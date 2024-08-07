import { useQuery } from "@tanstack/react-query";
import AccountApiClient from "../../../services/accountApiClient.ts";

type User = {
  id: number;
  username: string;
  created_at: Date;
  updated_at: Date;
  active: boolean;
};

type Response = {
  data: User[];
};

function useGetAllUsers() {
  const accountClient = new AccountApiClient<Response>("/user");
  return useQuery<unknown, Error, Response>({
    queryKey: ["users"],
    queryFn: accountClient.getAllUsers
  });
}

export default useGetAllUsers;
