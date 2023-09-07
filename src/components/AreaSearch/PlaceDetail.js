import React from "react";
import DetailImage from "./DetailImage";
import AreaMap from "./AreaMap";
import "./Detail.css";
const PlaceDetail = (props) =>{
    const data =props.item[0];
    return(
        <div className ="detail-con" style={{marginTop:"100px"}}>
            <h2>{data.title}</h2>
            <h3>{data.addr1}</h3>
            <img className ="firstImage" src={data.firstimage}></img>
            <p className="overview">{data.overview}</p>
            <DetailImage item={data}/> 
            <AreaMap item={data}/>
        </div>
    )
}
export default PlaceDetail;