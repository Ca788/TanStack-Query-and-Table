import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../gateway/getUsers.ts";

export const useGetUsers = (options = { enabled: true }) => {
    return useQuery({
        ...options,
        queryKey: ['users-list'],
        queryFn: getUsers,
    });
}