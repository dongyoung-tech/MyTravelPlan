import React from "react";
import DetailImage from "./DetailImage";
import AreaMap from "../AreaMap";
import "../Detail.css";
import PlaceRipple from "../../Ripple/PlaceRipple";
import AroundPlace from "./AroundPlace/AroundPlace";
import BlogSearch from "./BlogSearch";
import CartButton from "../../Cart/CartButton";
import DetailIntro from "./DetailIntro";
import Overview from "./Overview";
import DetailTitle from "./DetailTitle"

const PlaceDetail = (props) =>{
    const data =props.item[0];
    let overviewHTML = { __html: data.overview };
    let imgurl = data.firstimage;
    const user = JSON.parse(sessionStorage.getItem("userData")); 
    const dateStr = data.modifiedtime;

    const year = dateStr.slice(0, 4);
    const month = dateStr.slice(4, 6);
    const day = dateStr.slice(6, 8);
    const formattedDate = `수정일 ${year}-${month}-${day}`;
    return(
     <>
         <div className='Area-photo'>
            <p>
                여행지 상세정보
            </p>
         </div>
        <div className ="detail-con">
            <DetailTitle title={data.title} addr1 = {data.addr1} tel ={data.tel} key='Title'/>
            <div className="icon_con"> 
                {user && data && <CartButton item={data}/>}
                <span>{formattedDate}</span>
            </div>
           {imgurl &&  <img className ="firstImage" src={data.firstimage}/>}
           {!imgurl && <div className="no-image"/>}
            <DetailImage item={data} key ='image'/> 
            <Overview item={overviewHTML} key='overviwe'/>
            <DetailIntro item={[data.contentid,data.contenttypeid]} key ='intro'/>
            {data.addr1 && <AreaMap item={data} key='map'/>}
            <AroundPlace mapx={data.mapx} mapy={data.mapy} key ='around'/>
            <BlogSearch item={data.title} key='blog'/>
            <PlaceRipple key='ripple'/>
        </div>
        </>
    )
}
export default PlaceDetail;