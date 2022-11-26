export const Product = ({name, notes, price, brand, productType, stock, onAdd}) => {
    return(
        <div className="product">
            <div className="product-header">
                <h2>{name}</h2>
                <p>{brand}</p>
            </div>
            <div className="product-body">
                <p>{notes}</p>
            </div>
            <div className="product-footer">
                <p> USD {price}</p>
                <div className="product-actions">
                    <button className="product-add-cart" onClick={() => onAdd()}>Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
}