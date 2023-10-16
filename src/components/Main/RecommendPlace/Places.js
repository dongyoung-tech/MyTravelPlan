import React, { useState, useEffect } from "react";
import Card from "../../UI/Card";
import './Places.css';
import Loading from "../../UI/Loading";
import axios from "axios";
const Places = props => {
  const [data, setData] = useState([]);
  const [areaName,setName] = useState();
  const apiEndpoint = 'http://youngtour.dothome.co.kr/apiServer/areaBased.php';
let blankIdx;
const getData = async() =>{
  try {
      // 서버로 로그인 요청을 보냅니다.
      const response = await axios.post(apiEndpoint, {
      areaCode: props.area,
      category: props.item,
      topic:'main'
    });
    
    if (response.status === 200) {
        const elem = response.data.response.body.items.item;
        blankIdx = elem[0].addr1.indexOf(" ");
        setName(elem[0].addr1.substring(0, blankIdx));
        document.querySelector('.loading-con').style.display='none';
        setData(elem);
        for(var i=0; i<3; i++){
          document.querySelectorAll('.loading-con')[i].classList.add('hide');
        }
    } else {
      console.log('Request failed with status:', response.status);
    }

  } catch (error) {
    console.error('Search Failed:', error);
  }
}
useEffect(() => {
  getData();
}, [apiEndpoint]);
  const topic = (props.item == 12)? "관광지":(props.item == 32)?"숙박":"식당";
  return (
    <div>
      <Loading/>
      <h2 className="topic">{areaName} 추천 {topic}</h2>
      <h4 className="sub-a-topic">랜덤지역 추천 {topic} 입니다</h4>
      <div className="recommend-box">
        {data.map((el,idx)=>{return <Card key={idx}item={el}/>})}
      </div>
      
    </div>
  );
}

export default Places;
