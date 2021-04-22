/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Header from './Header'
import loadingSvg from '../assets/loading.svg'
import successSvg from '../assets/success.svg'

export default function Checkout() {
    const [confirmed, setConfirmed] = useState(false);
    const [loading, setLoading] = useState(false);

    const confirmPayment = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setConfirmed(true);
        }, 3000);
    }

    return (
        <div className="bg">
            <Header cartActive={false} />

            <div className="checkout-inputs">

                {!loading && !confirmed ? (
                    <div className="form-container">

                        <h2>Finalizar compra</h2>
                        <div className="checkout-content">
                            <div className="input-form">
                                <span>CNPJ</span>
                                <input type="text" maxLength="14"></input>
                            </div>

                            <div className="input-form">
                                <span>Nome do titular (como no cartão)</span>
                                <input></input>
                            </div>

                            <div className="input-form">
                                <span>Número do cartão</span>
                                <input type="text" maxLength="16"></input>
                            </div>

                            <div className="sm-divs">
                                <div className="sm-content input-form">
                                    <span>Validade</span>
                                    <input placeholder="MM/AA" className="small-input" type="text" maxLength="5"></input>
                                </div>

                                <div className="sm-content input-form">
                                    <span>CVV</span>
                                    <input className="small-input" type="text" maxLength="3"></input>
                                </div>
                            </div>
                            <button className="button" onClick={confirmPayment}>Confirmar pagamento</button>
                        </div>
                    </div>
                ) : null}

                {loading ? (
                    <div className="loading">
                        <img src={loadingSvg} alt="loading"></img>
                        <span>Carregando...</span>
                    </div>
                ) : null}

                {confirmed && !loading ? (
                    <div className="success">
                        <img src={successSvg} alt="success"></img>
                        <span>Compra efetuada com sucesso!</span>
                    </div>
                ) : null}
            </div>


        </div>
    )
}
