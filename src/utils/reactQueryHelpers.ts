import { useQueryClient } from "@tanstack/react-query";

export const useReactQueryHelpers = () => {
  const queryClient = useQueryClient();

  const invalidateQuery = (queryKey: string[]) => {
    return queryClient.invalidateQueries({ queryKey });
  };

  const refetchQuery = (queryKey: string[]) => {
    return queryClient.refetchQueries({ queryKey });
  };

  const removeQuery = (queryKey: string[]) => {
    return queryClient.removeQueries({ queryKey });
  };

  return {
    invalidateQuery,
    refetchQuery,
    removeQuery,
    queryClient,
  };
};
