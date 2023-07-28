import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {

    const cart = useSelector(state => state.products.cart);

    return (
        <div className= "navbar-container" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            }}>
            <Link className="navLink" to="/">
                <span className="logo">STORE</span>
            </Link>
            <div className="navLinkContainer">
                <Link className="navLink" to="/product">Products</Link>
                <Link className="navLink" to="/addProduct">Add a Product</Link>
            </div>
            <div className="cart-info">
                <Link className="navLink cart-navlink" to="/cart">Cart</Link>
                <span className="cartCount">{cart.length}</span>
            </div>
        </div>
    );
}

export default Navbar;