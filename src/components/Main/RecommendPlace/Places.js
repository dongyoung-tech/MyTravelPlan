import React, { useState, useEffect } from "react";
import Card from "../../UI/Card";
import './Places.css';


const Places = props => {
  const [data, setData] = useState([]);
  const [areaName,setName] = useState();
  const apiKey = "yX8wx5nzKb42wtBThegyX7gb6G3xUCPCMfbzNYF1Gf0p0nSUn9ZeynPzokq9GNLvrFLmqQVbU9%2FQz9LckJpQLw%3D%3D";
  const apiEndpoint = `http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${apiKey}&numOfRows=4&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&&arrange=Q
&areaCode=${props.area}
&contentTypeId=${props.item}`;
let blankIdx;
  useEffect(() => {
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        const elem = data.response.body.items.item;
        blankIdx = elem[0].addr1.indexOf(" ");
        setName(elem[0].addr1.substring(0, blankIdx));
        setData(elem);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // 빈 배열로 설정하여 컴포넌트 마운트 시에만 호출되도록 함
  const topic = (props.item == 12)? "관광지":(props.item == 32)?"숙박":"식당";
  return (
    <div>
      <h2 className="topic">{areaName} 추천 {topic}</h2>
      <h4 className="sub-a-topic">랜덤지역 추천 {topic} 입니다</h4>
      <div className="recommend-box">
        {data.map((el,idx)=>{return <Card key={idx}item={el}/>})}
      </div>
      
    </div>
  );
}

export default Places;
