import React , {useState,useEffect} from "react";
import { useSelector } from "react-redux";
import './SelectMap.css';
import { deleteItem } from "../../store/authActions";
import { useDispatch } from "react-redux";

const {kakao} = window;
const MakeMap = () =>{
    const placeList = useSelector((state) => state);
    const places = placeList.items;
    const currentItem = places[places.length-1]; 
    const linePath = [];
    const dispatch = useDispatch();
    useEffect(()=>{
        document.getElementById("Map").innerHTML = "";
        var mapContainer = document.getElementById("Map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 7, // 지도의 확대 레벨
        };
      var map = new kakao.maps.Map(mapContainer, mapOption);
      if(currentItem != undefined){
        for(var i=0; i<places.length; i++){
            linePath.push(
                new kakao.maps.LatLng(places[i].mapx, places[i].mapy,)
              );
        }

        map.setCenter(linePath[linePath.length - 1]);

        places.forEach((item,idx)=>{
            var markerPosition = linePath[idx];
            var marker = new kakao.maps.Marker({
              position: markerPosition,
              text: item.name,
            });
            marker.setMap(map);

            const createDeleteHandler = (title) => () => {
              const newItem = {
                name: title,
              };
              dispatch(deleteItem(newItem));
            };
          
            var iwContent = document.createElement("div");
            iwContent.className = "label";
            iwContent.innerHTML = `
              <div>${idx + 1}</div>
              ${places[idx].name}
            `;
          
            iwContent.addEventListener("click", () => {
              createDeleteHandler(places[idx].name)();
            });
          // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            var iwPosition = new kakao.maps.LatLng(
              linePath[idx].Ma,
              linePath[idx].La
            ); //인포윈도우 표시 위치입니다
        
          var customOverlay = new kakao.maps.CustomOverlay({
            position: iwPosition,
            content: iwContent,
          });
          
          customOverlay.setMap(map);
        })
   

        var polyline = new kakao.maps.Polyline({
          path: linePath, // 선을 구성하는 좌표배열 입니다
          strokeWeight: 7, // 선의 두께 입니다
          strokeColor: "dodgerblue", // 선의 색깔입니다
          strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: "dashed", // 선의 스타일입니다
        });
      
        // 지도에 선을 표시합니다
      
        polyline.setMap(map);
    }
      /* ----------지도에 여행코스 표시하는 함수 ------------- */
       

        },[placeList]); 

    return(
        <div style={{width:"100%",height:"100%"}} id="Map">
        </div>
    )
}

export default MakeMap;