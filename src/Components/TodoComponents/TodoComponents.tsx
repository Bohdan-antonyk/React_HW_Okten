import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";
import {getUsers} from "../../services/api.services.ts";

const TodoComponents = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers()
            .then(response => setUsers(response))
    }, [])

    return (
        <div className="container mx-auto my-10 flex flex-wrap justify-center">
            {users.map(user => <TodoComponent key={user.id} item={user}/>)}
        </div>
    );
};

export default TodoComponents;