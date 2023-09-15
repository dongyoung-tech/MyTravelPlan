import React from "react";
import DetailImage from "./DetailImage";
import AreaMap from "./AreaMap";
import "./Detail.css";
import PlaceRipple from "../Ripple/PlaceRipple";
const PlaceDetail = (props) =>{
    const data =props.item[0];
    const overviewHTML = { __html: data.overview };
    return(
        <div className ="detail-con" style={{marginTop:"100px"}}>
            <h2>{data.title}</h2>
            <h3>{data.addr1}</h3>
            <img className ="firstImage" src={data.firstimage}></img>
            <p className="overview" dangerouslySetInnerHTML={overviewHTML}></p>
            <DetailImage item={data}/> 
            <AreaMap item={data}/>
            <PlaceRipple/>
        </div>
    )
}
export default PlaceDetail;