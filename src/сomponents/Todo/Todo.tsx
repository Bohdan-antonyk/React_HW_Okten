import {FC} from "react";
import {ITodos} from "../../models/ITodos.ts";
import './Todo.css'

type TodoProps = {
    item: ITodos;
}


const Todo: FC<TodoProps> = ({item}) => {
    return (
        <div className={`card ${item.completed ? 'card-true' : 'card-false'}`}>
            <div className={'card-user'}>User: {item.userId}</div>
            <div>Task: {item.todo}</div>
            <div>Status: {item.completed ? 'true' : 'false'}</div>

        </div>
    );
};

export default Todo;