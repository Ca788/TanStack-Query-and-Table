import { URL } from "../env/url";
import { httpClient } from "../utils/httpClient";
import { Users } from "../models/user.ts";

export const createUser = (newUser: Users) => {
  return httpClient<Users>(`${URL}/users`, {
    method: 'POST',
    body: newUser,
  });
};
