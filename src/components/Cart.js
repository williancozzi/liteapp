import React from 'react'
import bag from '../assets/bag.png';

export default function Cart(props) {
    const { cartItems, onAddItem, onRemoveItem } = props;
    const totalPrice = cartItems.reduce((acc, cur) =>
        acc + cur.price * cur.quantity, 0);

    return (
        <aside className="block col-1 summary">
            <h2>Sumário da compra</h2>
            <div className="center-flex mt-20">
                {cartItems.length === 0 &&
                    <div>Seu carrinho está vazio
                        <div>
                            <img src={bag} alt={'empty bag'} className="image-custom" />
                        </div>
                    </div>}
            </div>
            {cartItems.map((item) => {
                return <div key={item.id} className="row center">
                    <div className="col-3 product-name">{item.name}</div>
                    <div className="col-3 product-actions">
                        <button onClick={() => onAddItem(item)} className="button add">
                            <span className="plus center-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" fill="white" /></svg>
                            </span>
                        </button>
                        <button onClick={() => onRemoveItem(item)} className="button remove">
                            <span className="minus center-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z" fill="black" /></svg>
                            </span>
                        </button>
                    </div>
                    <div className="col-3 text-right">
                        {item.quantity} x R${item.price.toFixed(2)}
                    </div>
                </div>
            })}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row p-15">
                        <div className="col-2 text-right"><strong>Valor total:</strong></div>
                        <div className="col-1 text-right"><strong>R${totalPrice.toFixed(2)}</strong></div>
                    </div>
                    <hr />
                    <div className="row justify-center p-15">
                        <button className="button" onClick={() => console.log("saiu")}>
                            Continuar
                        </button>
                    </div>
                </>
            )}
        </aside>
    );
}
