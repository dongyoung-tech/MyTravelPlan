import React from "react";

const PlaceItem =(props)=>{
    return(
        <div>
            <img src={props.item.firstimage}></img>
            <h4>{props.item.title}</h4>
            <h5>{props.item.addr1}</h5>
        </div>
    )
}
export default PlaceItem;