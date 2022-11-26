import axios from "axios";
import { useEffect, useState } from "react";

export const ProductTypesList = () => {
    const [typesList, setTypesList] = useState([]);

    const update = () => {
        axios({
            method: "get",
            url: "https://localhost:7190/ProductType",
            headers: {
              "Content-Type": "application/json",
            },
        }).then((res) => setTypesList(res.data))
    }

    useEffect(
        () => update(),
        []
    );
    return (
        <div>
            <button onClick={() => update()}>Update</button>
            <ul>
                {
                    typesList.map(type => <li key={type.id}>Id: {type.id} Nombre: {type.name}</li>)
                }
            </ul>
        </div>
    );
}