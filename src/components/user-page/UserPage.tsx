import {FC} from "react";
import {IUsers} from "../../models/IUsers.ts";
import './user-page.css';

type UserPageProps = {
    user: IUsers
}

const UserPage: FC<UserPageProps> = ({user}) => {
    return (
        <div className={'container'}>
            <div className={'card'}>
                <div>{user.firstName}</div>
                <div>{user.lastName}</div>
                <div>Age: {user.age}</div>
            </div>
        </div>
    );
};

export default UserPage;