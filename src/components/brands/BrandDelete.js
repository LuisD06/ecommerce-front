import axios from "axios";
import { useState } from "react";

export const BrandDelete = () => {
    const [brandId, setBrandId] = useState("");
    const [error, setError] = useState(null);
    const handleChange = (evt) => {
        setBrandId(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios({
            method: "delete",
            url: `https://localhost:7190/Brand?brandId=${brandId}`,
            headers: {
              "Content-Type": "application/json",
            },
        }).then((res) => {
            console.log(res);
            setError(null);
        })
        .catch((error) => setError(
            {
                message: error.message
            }
        ))
    }
    return (
        <div>
            <h3>Borrar</h3>
            { error && <p>Ha ocurrido un error: {error.message}</p> }
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <label htmlFor="brandId">Product Type ID</label>
                <input type="text" name="brandId" value={brandId} onChange={(evt) => handleChange(evt)}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}