import React from "react";

const CartItem = (props) =>{

    return (
        <div className="cart-item">
            <img src={props.item.imgurl}></img>
            <b className="cart-_item_title">{props.item.title}</b>
            <b className="cart-_item_addr">{props.item.address}</b>
        </div>
    )
}

export default CartItem;