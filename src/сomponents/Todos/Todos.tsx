import {useEffect, useState} from "react";
import {ITodos} from "../../models/ITodos.ts";
import Todo from "../Todo/Todo.tsx";
import {getUrlTodosList} from "../../services/api.services.ts";

const Todos = () => {
    const [users, setUsers] = useState<ITodos[]>([]);

    useEffect(() => {
        getUrlTodosList().then((data) => {
            setUsers(data.todos);
        });
    }, []);

    return (
        <div className="flex flex-wrap justify-center my-5">
            {users.map((value) => (
                <Todo key={value.id} item={value}/>
            ))}
        </div>
    );
};

export default Todos;
