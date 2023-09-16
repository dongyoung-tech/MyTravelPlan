import React from "react";
import DetailImage from "./DetailImage";
import AreaMap from "./AreaMap";
import "./Detail.css";
import PlaceRipple from "../Ripple/PlaceRipple";
import AroundPlace from "./AroundPlace/AroundPlace";
const PlaceDetail = (props) =>{
    const data =props.item[0];
    const overviewHTML = { __html: data.overview };
    return(
        <div className ="detail-con" style={{marginTop:"100px"}}>
            <h2 className="d_title">{data.title}</h2>
            <h3 className="d_address">{data.addr1}</h3>
            <img className ="firstImage" src={data.firstimage}></img>
            <DetailImage item={data}/> 
            <div className="sub-con">
                <h3 className="d_sub_title">정보</h3>
                <p className="overview" dangerouslySetInnerHTML={overviewHTML}></p>
            </div>
            <div className="sub-con">
                 <h3 className="d_sub_title">지도</h3>
                 <AreaMap item={data}/>
             </div>   
             <div className="sub-con">  
                 <h3 className="d_sub_title" style={{marginBottom:"0"}}>주변 추천 장소</h3>
                <AroundPlace mapx={data.mapx} mapy={data.mapy}/>
            </div>
            <PlaceRipple/>
        </div>
    )
}
export default PlaceDetail;