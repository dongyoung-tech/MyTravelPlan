import React from "react";

const CartItem = (props) =>{

    return (
        <div className="cart-item">
            <img src={props.item.imgurl}></img>
            <div className="cart-item-info">
                <b className="cart-item-title">{props.item.title}</b>
                <b className="cart-item-addr">{props.item.address}</b>
            </div>
        </div>
    )
}

export default CartItem;