import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../../models/ICart.ts";

const CartsComponent = () => {
    const [carts, setCarts] = useState<ICart[]>([])

    const {id} = useParams()

    useEffect(() => {
        fetch('https://dummyjson.com/carts/user/' + id)
            .then(res => res.json())
            .then(data => setCarts(data));
    }, []);

    console.log(id)

    return (
        <div>
            {/*{carts.map((cart:ICart) => <div>{cart.total}</div>)}*/}
        </div>
    );
};

export default CartsComponent;