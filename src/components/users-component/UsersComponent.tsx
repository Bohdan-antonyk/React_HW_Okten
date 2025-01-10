import {useEffect, useState} from "react";
import {IUsers} from "../../models/IUsers.ts";
import UserPage from "../user-page/UserPage.tsx";
import {getUsers} from "../../services/users.service.ts";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        getUsers()
            .then(data => setUsers(data.users));
    }, []);
    return (
        <div>
            {users.map(item => (<UserPage key={item.id} user={item}/>))}
        </div>
    );
};

export default UsersComponent;