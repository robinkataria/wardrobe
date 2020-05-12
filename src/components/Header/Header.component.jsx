import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/hat.svg";

import "./Header.styles.scss";

function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <Logo className="logo" />
                </Link>
            </div>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                <Link className="option" to="/signin-signup">
                    LOGIN / SIGNUP
                </Link>
            </div>
        </div>
    );
}

export default Header;
