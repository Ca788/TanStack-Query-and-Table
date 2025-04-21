import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../gateways/getUsers.ts";

export const useGetUsers = (options = { enabled: true }) => {
  return useQuery({
    ...options,
    queryKey: ['users-list'],
    queryFn: getUsers,
    gcTime: 5000,
    staleTime: 1000,
    refetchOnWindowFocus: false,
  });
}