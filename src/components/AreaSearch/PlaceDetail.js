import React from "react";
import DetailImage from "./DetailImage";
import AreaMap from "./AreaMap";
import "./Detail.css";
import PlaceRipple from "../Ripple/PlaceRipple";
import AroundPlace from "./AroundPlace/AroundPlace";
import BlogSearch from "./BlogSearch";
import CartButton from "../Cart/CartButton";
import DetailIntro from "./DetailIntro";

const PlaceDetail = (props) =>{
    const data =props.item[0];
    const overviewHTML = { __html: data.overview };
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
            <h2 className="d_title">{data.title}</h2>
            <h3 className="d_address">{data.addr1}</h3>
            <div className="icon_con"> 
                {user && data && <CartButton item={data}/>}
                <span>{formattedDate}</span>
            </div>
           {imgurl &&  <img className ="firstImage" src={data.firstimage}/>}
           {!imgurl && <div className="no-image"/>}
            <DetailImage item={data}/> 
            <div className="sub-con">
                <h3 className="d_sub_title">소개</h3>
                <p className="overview" dangerouslySetInnerHTML={overviewHTML}></p>
            </div>
            <DetailIntro item={[data.contentid,data.contenttypeid]}/>
            <div className="sub-con">
                 <h3 className="d_sub_title">지도</h3>
                 <AreaMap item={data}/>
             </div>   
             <div className="sub-con">  
                 <h3 className="d_sub_title" style={{marginBottom:"0"}}>주변 추천 장소</h3>
                <AroundPlace mapx={data.mapx} mapy={data.mapy}/>
            </div>
            <div className="sub-con"> 
                <h3 className="d_sub_title">블로그 포스팅</h3>
                <div className="blog-sub-con">  
                    <BlogSearch item={data.title}/>
                </div>
            </div>
            <PlaceRipple/>
        </div>
        </>
    )
}
export default PlaceDetail;