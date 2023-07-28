import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CartProduct from "../../components/CartProduct/CartProduct"
import "./Cart.css";

const Cart = () => {
    const cart = useSelector(state =>  state.products.cart);
    // console.log("cart ",cart)

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item)=> {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice])

    return (
        <div className="cart">
            <div className="cart-items">
                {cart.map((item) => (
                    <CartProduct key={item.id} item={item}/>
                ))}
            </div>

            <div className="cart-summary">
                <h4 className="summary-title">Cart Summary</h4>
                <div className="cart-total">
                    <span>TOTAL: ({totalItems} items)</span>
                    <span>Rs {totalPrice}</span>
                </div>

                <button className="checkout-btn">
                    Proceed To Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart;