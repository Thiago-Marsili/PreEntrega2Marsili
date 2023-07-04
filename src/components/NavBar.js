import OIG from "../img/OIG.jpg"
import CartWidget from "./CartWidget"
import Catalogo from "./Catalogo"
import {useState} from 'react'
import { Link } from "react-router-dom";


function NavBar() {

    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item" ><img alt="OIG" src={OIG} width="60" height="88"/>
                        <Link to="/">
                            <span className="navbar-item-text">BuenasPelis</span>
                        </Link>
                    </Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <Catalogo/>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;