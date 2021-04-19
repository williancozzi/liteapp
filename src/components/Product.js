import React from 'react'

export default function Product(props) {
    const { product, onAddItem } = props;

    return (
        <div>
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>R${product.price}</div>
            <div>
                <button onClick={() => onAddItem(product)} className="button">Colocar no carrinho</button>
            </div>
        </div>
    )
}