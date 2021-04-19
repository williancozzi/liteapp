import React from 'react';
import Product from './Product.js';

export default function Main(props) {
    const { products, onAddItem } = props;

    return (
        <main className="block col-2">
            {products && <h2>Produtos</h2>}
            <div className="row">
                {products.map((item) => {
                    return <Product key={item.id} product={item} onAddItem={onAddItem}></Product>
                })}
            </div>
        </main>
    )
}
