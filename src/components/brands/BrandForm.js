import { useState } from "react";
import axios  from "axios";

export const BrandForm = () => {
    const [name, setName] = useState("");
    const handleName = (evt) => {
        setName(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newBrand = {
            name: name
        }
        axios({
            method: "post",
            url: "https://localhost:7190/Brand",
            headers: {
              "Content-Type": "application/json",
            },
            data: newBrand,
        }).then((res) => console.log(res))
            
    }
    return(
        <div>
            <h3>Crear</h3>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <label htmlFor="brandName">Nombre</label>
                <input type="text" name="brandName" value={name} onChange={(evt) => handleName(evt)}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}