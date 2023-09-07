import React from 'react';
import './PlaceList.css';
const PlaceList = props =>{

    return(
        <div className="place-box">
            <div className='image-box'><img src={props.item.firstimage}></img></div>
            <div className='text-box'>
                <h4>{props.item.title}</h4>
                <h5>{props.item.addr1}</h5>
            </div>
        </div>
    );
}

export default PlaceList;