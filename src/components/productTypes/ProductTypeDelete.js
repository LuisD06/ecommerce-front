import axios from "axios";
import { useState } from "react";

export const ProductTypeDelete = () => {
    const [productTypeId, setProductTypeId] = useState("");
    const [error, setError] = useState(null);
    const handleChange = (evt) => {
        setProductTypeId(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios({
            method: "delete",
            url: `https://localhost:7190/ProductType?productTypeId=${productTypeId}`,
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
                <label htmlFor="productTypeId">Product Type ID</label>
                <input type="text" name="productTypeId" value={productTypeId} onChange={(evt) => handleChange(evt)}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}