import {simpsons} from "../../data/simpsonsList.ts";
import CharacterComponent from "../Character/CharacterComponent.tsx";

const FamilyComponent = () => {
    return (
        <div className={'wrapper-content-box'}>
            {simpsons.map((simpson, index) => <CharacterComponent key={index} simpson={simpson}/>)}
        </div>
    );
};

export default FamilyComponent;