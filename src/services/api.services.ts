import {IUser} from "../models/IUser.ts";

const urlUsers = import.meta.env.VITE_API_URL;

export const getUsers = async (): Promise<IUser[]> => {
    return await fetch(urlUsers)
        .then(value => value.json());
}
