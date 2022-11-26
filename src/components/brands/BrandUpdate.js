import axios from "axios";
import { useState } from "react";

export const BrandUpdate = () => {
    const [brandId, setBrandId] = useState("");
    const [brandName, setBrandName] = useState("");
    const [error, setError] = useState(null);
    const handleIdChange = (evt) => {
        setBrandId(evt.target.value);
    }
    const handleNameChange = (evt) => {
        setBrandName(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const requestData = {
            name: brandName
        }
        axios({
            method: "put",
            url: `https://localhost:7190/Brand?branId=${brandId}`,
            headers: {
              "Content-Type": "application/json",
            },
            data: requestData
        }).then((res) => {
            console.log(res);
            setError(null);
        })
        .catch((error) => setError({
                // message: error.response.data
                message: error.message
            }
        ))
    }
    return (
        <div>
            <h3>Actualizar</h3>
            { error && <p>Ha ocurrido un error: {error.message}</p> }
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <label htmlFor="brandId">Id </label>
                <input type="text" name="brandId" value={brandId} onChange={(evt) => handleIdChange(evt)}/>
                <label htmlFor="brandName">Nombre</label>
                <input type="text" name="brandName" value={brandName} onChange={(evt) => handleNameChange(evt)}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}