import React , {useEffect} from "react";
const {kakao} = window;
const MakeMap = () =>{
 
    useEffect(()=>{
        var mapContainer = document.querySelector('.Map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
     var map = new kakao.maps.Map(mapContainer, mapOption); 
        },[]);
    return(
        <div style={{width:"500px",height:"500px"}}className="Map">

        </div>
    )
}

export default MakeMap;