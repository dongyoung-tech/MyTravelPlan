import React from "react";

const PlaceRippleList = (props) =>{
    return(
        <div>
            <b>{props.item.name}</b> {props.item.content}
        </div>
    )
    
}

export default PlaceRippleList;