import React from 'react'

export default function Product(props) {
    const { product, onAddItem } = props;

    return (
        <div className="product">
            <img className="small" src={product.image} alt={product.name}></img>
            <div className="info">
                <h3>{product.description}</h3>
                <div className="price">
                    R${product.price}<br />
                    {product.perConsultPrice ? (
                        <span>
                            (R${product.perConsultPrice}/consulta)
                        </span>
                    ) : null}
                </div>
            </div>
            <div className="p-15">
                <button onClick={() => onAddItem(product)} className="button">Colocar na cesta</button>
            </div>
        </div>
    )
}
