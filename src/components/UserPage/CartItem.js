import React from "react";

const CartItem = (props) =>{
    var pageLink = `/Area/AreaDetail?contentid=${props.item.contentid}`
    const deleteItem = (e) =>{
        e.preventDefault();
        props.updateData(props.item.title);
    }
    return (
        <a href={pageLink}>
        <div className="cart-item">
            <img src={props.item.imgurl}></img>
            <div className="cart-item-info">
                <b className="cart-item-title">{props.item.title}</b>
                <b className="cart-item-addr">{props.item.address}</b>
                { props.user && <button onClick={(e) => deleteItem(e)}><i class="fa-regular fa-trash-can"></i></button>}
            </div>
        </div>
        </a>
    )
}

export default CartItem;