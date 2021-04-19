import React from 'react'
import bag from '../assets/bag.png';

export default function Cart(props) {
    const { cartItems, onAddItem, onRemoveItem } = props;
    const totalPrice = cartItems.reduce((acc, cur) =>
        acc + cur.price * cur.quantity, 0);

    return (
        <aside className="block col-1">
            <h2>Sumário da compra</h2>
            <div className="summary">
                {cartItems.length === 0 &&
                    <div>Seu carrinho está vazio
                        <div>
                            <img src={bag} alt={'empty bag'} className="image-custom" />
                        </div>
                    </div>}
            </div>
            {cartItems.map((item) => {
                return <div key={item.id} className="row center">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onAddItem(item)} className="button add">+</button>
                        <button onClick={() => onRemoveItem(item)} className="button remove">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {item.quantity} x R${item.price.toFixed(2)}
                    </div>
                </div>
            })}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2 text-right"><strong>Valor total:</strong></div>
                        <div className="col-1 text-right"><strong>R${totalPrice.toFixed(2)}</strong></div>
                    </div>
                    <hr />
                    <div className="row justify-center">
                        <button className="button" onClick={() => console.log("saiu")}>
                            Continuar
                        </button>
                    </div>
                </>
            )}
        </aside>
    );
}
