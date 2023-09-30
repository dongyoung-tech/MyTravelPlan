    import React, { useEffect } from "react";
    const {kakao,linePath,positions} = window;

    const Map = (props) =>{
 
        useEffect(()=>{
            let map="";
            let obj="";
            let linePath = [];
            let positions = []; 
            const placeList = props.item[0].info;

            var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = { 
                center: new kakao.maps.LatLng(placeList[0].mapx, placeList[0].mapy),
                level: 3 
            }; 
         
           map = new kakao.maps.Map(mapContainer, mapOption);
    
        for (let i = 0; i < placeList.length; i++) {
            linePath.push(
            new kakao.maps.LatLng(placeList[i].mapx, placeList[i].mapy)
            );
        }
        for (let i = 0; i < placeList.length; i++) {
            obj = new Object();
            obj.title = placeList[i].name;
            obj.lating = linePath[i];
            positions.push(obj);
        }
    
        makeMarker();
    
        function makeMarker() {
            var imageSrc ="http://t1.daumcdn.net/mapjsapi/images/2x/marker.png";
            for (var i = 0; i < positions.length; i++) {
            var imageSize = new kakao.maps.Size(30, 40);
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
            var marker = new kakao.maps.Marker({
                map: map,
                position: positions[i].lating,
                title: positions[i].title,
                image: markerImage,
            });
            marker.setMap(map);
        
            var iwContent = `<div class='label'><div>${i+1}</div>${positions[i].title}</div>`,
                iwPosition = new kakao.maps.LatLng(linePath[i].Ma, linePath[i].La);
        
            var customOverlay = new kakao.maps.CustomOverlay({
                position: iwPosition,
                content: iwContent,
            });
            customOverlay.setMap(map);
        
            var polyline = new kakao.maps.Polyline({
                path: linePath,
                strokeWeight: 5,
                strokeColor: "dodgerblue",
                strokeOpacity: 1,
                strokeStyle: "dashed",
            }); 
            polyline.setMap(map);
            }
        }
        },[])

        return(
            <div id="map"></div>
        )
        
    }

    export default Map