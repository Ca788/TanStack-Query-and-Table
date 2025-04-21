import { useMutation } from "@tanstack/react-query";
import { createUser } from "../gateways/createUser";
import { useReactQueryHelpers } from "../utils/reactQueryHelpers";
import { Users } from "../models/user.ts";


export const useCreateUser = () => {
  const { invalidateQuery } = useReactQueryHelpers();

  return useMutation({
    mutationFn: (newUser: Users) => createUser(newUser),
    onSuccess: () => {
      invalidateQuery(['users-list']);
    },
  });
};
