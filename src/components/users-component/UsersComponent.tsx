import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(response => setUsers(response.users))
    }, []);

    return (
        <div>
            {users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;