import React,{useState,useEffect} from "react";
import Card from "../UI/Card.js";
import '../AreaSearch/Area.css';

const KeyWordList = (props) =>{
    console.log(props.item);
    const [Data,setData] = useState([]);  
    const [isLoading,setLoad] = useState(false); 
    const apiKey = "yX8wx5nzKb42wtBThegyX7gb6G3xUCPCMfbzNYF1Gf0p0nSUn9ZeynPzokq9GNLvrFLmqQVbU9%2FQz9LckJpQLw%3D%3D";
    let apiEndpoint =`https://apis.data.go.kr/B551011/KorService1/searchKeyword1
?serviceKey=${apiKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&arrange=Q&keyword=${props.item}&pageNo=${1}`;
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
  }, [props.item]); 

    return(
        <div className="Card-Container">
        {!isLoading && Data.map((item,index)=>{
          return <Card key ={index} item={item}/>
        })}
        {isLoading && <div>검색결과 가 없습니다. 다른 키워드를 검색해보세요.</div>}
      </div>  
    )
}
export default KeyWordList;