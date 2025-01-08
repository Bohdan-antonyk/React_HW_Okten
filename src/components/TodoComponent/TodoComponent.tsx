import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import './todoComponent.css';

type TodoPropsUsers = {
    item: IUser;
}

const TodoComponent: FC<TodoPropsUsers> = ({item}) => {
    return (
        <div className={'user-card'} >
            <div>ID: {item.id}</div>
            <div className={'user-title'}>Title: {item.title}</div>
            <div>Status {item.completed ? 'True' : 'False'}</div>
        </div>
    );
};

export default TodoComponent;