import {ITodos} from "../models/ITodos.ts";

const mainUrl = import.meta.env.VITE_API_URL;

type TodosResponse = {
    todos: ITodos[];
};

export const getUrlTodosList = async (): Promise<TodosResponse> => {
    return await fetch(`${mainUrl}/todos`).then((res) => res.json());
};
