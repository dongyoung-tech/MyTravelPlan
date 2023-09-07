import React,{useState,useEffect} from "react";
import PlaceItem from "./PlaceItem.js";

const AreaPlace = (props) =>{
const [Data,setData] = useState([]);  
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
        console.log("fetch");
        const elem = data.response.body.items.item;
        setData(elem);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // 빈 배열로 설정하여 컴포넌트 마운트 시에만 호출되도록 함
  
    return(
      <div>
        {Data.map((item,index)=>{
          return <PlaceItem key ={index} item={item}/>
        })}
      </div>  
    );
}

export default AreaPlace;