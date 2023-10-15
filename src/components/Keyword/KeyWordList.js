import React,{useState,useEffect} from "react";
import Card from "../UI/Card.js";
import '../AreaSearch/Area.css';
import Loading from "../UI/Loading.js";
import CardPagination from "../UI/CardPagination";
const KeyWordList = (props) =>{
    const [Data,setData] = useState([]);  
    const apiKey = "yX8wx5nzKb42wtBThegyX7gb6G3xUCPCMfbzNYF1Gf0p0nSUn9ZeynPzokq9GNLvrFLmqQVbU9%2FQz9LckJpQLw%3D%3D";
    let apiEndpoint =`https://apis.data.go.kr/B551011/KorService1/searchKeyword1
?serviceKey=${apiKey}&numOfRows=200&MobileOS=ETC&MobileApp=AppTest&_type=json&arrange=Q&keyword=${props.item}&pageNo=${1}`;
  useEffect(() => {
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        const elem = data.response.body.items.item;
        setData(elem);
        document.querySelector('.loading-con').classList.add('hide');
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.item]); 

    return(
      <>
        <Loading/>
        {Data && Data.length > 0 && <CardPagination keyword={props.item} data={Data}/>}
        {!Data  && <div className="error-page">검색 결과가 없습니다. 다른 키워드를 입력해주세요.</div>}

      </>
    )
}
export default KeyWordList;