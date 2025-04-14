import { Users } from "../models/user.ts";
import { sleep } from "../utils/sleep.ts";
import { URL } from "../env/url.ts";


export const getUsers = async (): Promise<Users[]> => {
        await sleep();
        const response = await fetch(`${URL}/users`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
}