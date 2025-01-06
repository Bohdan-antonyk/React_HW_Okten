import {FC} from "react";
import {ISimpson} from "../../models/ISimpson.ts";
import './Character.css';

type MyPropType = {
    simpson: ISimpson;
}

const CharacterComponent: FC<MyPropType> = ({simpson}) => {
    return (
        <div className={'simpson-card text-center'}>
            <h2 className={'simpson-name text-center'}>{simpson.name} {simpson.surname} </h2>
            <h3 className={'simpson-age'}>{simpson.age} age</h3>
            <h3>{simpson.info}</h3>
            <img className={'simpson-img inline-block'} src={simpson.photo} alt={simpson.name}/>
        </div>
    );
};

export default CharacterComponent;