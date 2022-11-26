import { useState } from "react";
import axios  from "axios";

export const ProductTypesForm = () => {
    const [name, setName] = useState("");
    const handleName = (evt) => {
        setName(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newProductType = {
            name: name
        }
        axios({
            method: "post",
            url: "https://localhost:7190/ProductType",
            headers: {
              "Content-Type": "application/json",
            },
            data: newProductType,
        }).then((res) => console.log(res))
            
    }
    return(
        <div>
            <h3>Crear</h3>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <label htmlFor="productTypeName">Nombre</label>
                <input type="text" name="productTypeName" value={name} onChange={(evt) => handleName(evt)}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}