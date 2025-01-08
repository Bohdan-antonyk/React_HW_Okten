import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.services.ts";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";

const TodoComponents = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers()
            .then((response: IUser[]) => setUsers(response))
    }, [])

    return (
        <div className="container mx-auto my-10 flex flex-wrap justify-center">
            {users.map(user => <TodoComponent key={user.id} item={user}/>)}
        </div>
    );
};

export default TodoComponents;