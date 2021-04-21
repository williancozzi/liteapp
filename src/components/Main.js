import React from 'react';
import Product from './Product.js';

export default function Main(props) {
    const { products, onAddItem } = props;

    return (
        <main className="block col-3">
            {products && <h2>Produtos</h2>}
            <div className="row mt-20">
                {products.map((item) => {
                    return <Product key={item.id} product={item} onAddItem={onAddItem}></Product>
                })}
            </div>
        </main>
    )
}
