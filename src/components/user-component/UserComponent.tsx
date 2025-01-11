import {FC} from 'react';
import {IUser} from "../../models/IUser.ts";
import './user-component.css';
import {useNavigate} from "react-router-dom";

type UserProps = {
    user: IUser;
}



const UserComponent: FC<UserProps> = ({user}) => {
    const navigation = useNavigate();

    const onButtonClick = ()=> {
        navigation( user.id + '/carts');
    }


    return (
        <div className={'card'}>
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.age}</div>
            <div>{user.gender}</div>
            <button className={'btn'} onClick={onButtonClick}>More info</button>
        </div>
    );
};

export default UserComponent;