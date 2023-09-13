import React,{useState,useEffect} from "react";
import Card from "../UI/Card.js";
import './Area.css';

const AreaPlace = (props) =>{
const [Data,setData] = useState([]);  
const [isLoading,setLoad] = useState(false); 
  const apiKey = "yX8wx5nzKb42wtBThegyX7gb6G3xUCPCMfbzNYF1Gf0p0nSUn9ZeynPzokq9GNLvrFLmqQVbU9%2FQz9LckJpQLw%3D%3D";
  let apiEndpoint =`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${apiKey}&numOfRows=12&MobileOS=ETC&MobileApp=AppTest&_type=json&&arrange=Q
&sigunguCode=${props.item[1]}
&contentTypeId=${12}
&pageNo=${1};
&areaCode=${props.item[0]}`
  useEffect(() => {
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        const elem = data.response.body.items.item;
        setData(elem);
        if(elem == undefined) setLoad(true);
        else setLoad(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // 빈 배열로 설정하여 컴포넌트 마운트 시에만 호출되도록 함
  
    return(
      <div className="Card-Container">
        {!isLoading && Data.map((item,index)=>{
          return <Card key ={index} item={item}/>
        })}
        {isLoading && <div>검색결과 가 없습니다. 다른지역을 선택 해주세요.</div>}
      </div>  
    );
}

export default AreaPlace;