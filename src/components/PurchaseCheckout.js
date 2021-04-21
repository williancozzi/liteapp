import React from 'react'
import Header from './Header'

export default function Checkout() {
    return (
        <div className="bg">
            <Header cartActive={false} />

            <div className="justify-center center wrap">
                <h1>Finalizar compra</h1>
            </div>
            <div className="checkout-inputs">
                <div className="checkout-content">
                    <div className="input-form">
                        <span>CNPJ</span>
                        <input></input>
                    </div>

                    <div className="input-form">
                        <span>Nome do titular (como no cartão)</span>
                        <input></input>
                    </div>

                    <div className="input-form">
                        <span>Número do cartão</span>
                        <input></input>
                    </div>

                    <div className="sm-divs">
                        <div className="sm-content input-form">
                            <span>Validade</span>
                            <input placeholder="MM/AA" className="small-input"></input>
                        </div>

                        <div className="sm-content input-form">
                            <span>CVV</span>
                            <input className="small-input"></input>
                        </div>
                    </div>
                    <button className="button">Confirmar pagamento</button>
                </div>
            </div>
        </div>
    )
}
