import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-dark.svg'
import basketSvg from '../assets/basket.svg'
import emptyBasketSvg from '../assets/emptybasket.svg'

export default function Header(props) {
    const { cartCount, cartActive = false } = props;

    return (
        <header className="between block center wrap">
            <div className="align-center">
                <img src={logo} alt="logo"></img>
            </div>
            {cartActive ? (
                <div className="p-sides-10">

                    {cartCount ? (
                        
                        <Link to={"/checkout"} >
                            <div className="center-flex">
                            <span className="a mr-10">Sua cesta</span>
                                <span className="cart-count">{cartCount}</span>
                                <img src={basketSvg} width="30" height="30" alt="basket"></img>

                            </div>
                        </Link>

                    ) : (
                        <div className="center-flex">
                            <span className="a mr-10">Sua cesta</span>
                            <img src={emptyBasketSvg} width="30" height="30" alt="basket"></img>
                        </div>

                    )}
                </div>
            ) : null
            }
        </header>

    )
}
