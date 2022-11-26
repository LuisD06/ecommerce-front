import axios from "axios";
import { useEffect, useState } from "react";
import clientHttp from "../../axios/axios";

export const BrandList = () => {
    const [brandList, setBrandList] = useState([]);

    const update = () => {
        clientHttp({
            method: "get",
            url: "/Brand",
            headers: {
              "Content-Type": "application/json",
            },
        }).then((res) => setBrandList(res.data));
        // axios({
        //     method: "get",
        //     url: "https://localhost:7190/Brand",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        // }).then((res) => setBrandList(res.data))
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
                    brandList.map(brand => <li key={brand.id}>Id: {brand.id} Nombre: {brand.name}</li>)
                }
            </ul>
        </div>
    );
}