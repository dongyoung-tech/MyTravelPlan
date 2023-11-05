import React from "react";
import './Card.css';

const Card = (props) =>{
    
    return (
        <div className="place-box">
            <a href={`/Area/AreaDetail?contentid=${props.item.contentid}`}>
                <div className='image-box'>
                {props.item.firstimage &&  <img src={props.item.firstimage}></img>}
                {!props.item.firstimage &&  <div className="no-first-image"></div>}
                </div>
                <div className='text-box'>
                    <h4>{props.item.title}</h4>
                    <h5>{props.item.addr1}</h5>
                </div>
            </a>
        </div>
    )
}

export default Card;