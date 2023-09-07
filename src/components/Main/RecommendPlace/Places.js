import React, { useState, useEffect } from "react";
import PlaceList from './PlaceList';
import './Places.css';
let areacode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 31, 32, 33, 34, 35, 36, 37, 38, 39];
let number = Math.floor(Math.random() * 17 + 1);

const Places = props => {
  const [data, setData] = useState([]);
  const apiKey = "yX8wx5nzKb42wtBThegyX7gb6G3xUCPCMfbzNYF1Gf0p0nSUn9ZeynPzokq9GNLvrFLmqQVbU9%2FQz9LckJpQLw%3D%3D";
  const apiEndpoint = `http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${apiKey}&numOfRows=4&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&&arrange=Q
&areaCode=${areacode[number]}
&contentTypeId=${props.item}`;
  useEffect(() => {
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        console.log("fetch");
        const elem = data.response.body.items.item;
        setData(elem);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // 빈 배열로 설정하여 컴포넌트 마운트 시에만 호출되도록 함
  
  return (
    <div>
      <h2 className="topic">추천여행지</h2>
      <div className="recommend-box">
        {data.map((el,idx)=>{return <PlaceList key={idx}item={el}/>})}
      </div>
    </div>
  );
}

export default Places;
