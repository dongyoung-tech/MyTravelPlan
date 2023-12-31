import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import Card from "../../../UI/Card";
const AroundPlace = (props) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [Data, setData] = useState([]);
    let num;
    const [pram , setParam] = useState();
    const location = useLocation();
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        num = searchParams.get('contentid');
        setParam(num);
      }, [location.search]);

useEffect(() => {
    setIsLoading(true);
    const apiKey = "yX8wx5nzKb42wtBThegyX7gb6G3xUCPCMfbzNYF1Gf0p0nSUn9ZeynPzokq9GNLvrFLmqQVbU9%2FQz9LckJpQLw%3D%3D";      
    const apiEndpoint = `http://apis.data.go.kr/B551011/KorService1/locationBasedList1?
serviceKey=${apiKey}&numOfRows=4&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=Q&radius=20000
&mapX=${props.mapx}&mapY=${props.mapy}`;
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        const elem = data.response.body.items.item;
        setData(elem);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false); // 데이터 로딩 실패
      });
  }, [num]);


    return(
      <div className="sub-con">  
        <h3 className="d_sub_title" style={{marginBottom:"0"}}>주변 추천 장소</h3>
        <div className="around_con">
              {!isLoading && Data.map((item,idx)=>{
                return <Card item={item} key={idx}/>
              })}
        </div>
      </div>

    )
}

export default AroundPlace;