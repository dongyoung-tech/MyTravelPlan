import React,{useState,useEffect} from "react";
import Card from "../UI/Card.js";
import axios from "axios";
import '../AreaSearch/Area.css';
import Loading from "../UI/Loading.js";
import CardPagination from "../UI/CardPagination";
const KeyWordList = (props) =>{
    const [Data,setData] = useState([]);  
    const apiEndpoint = 'http://youngtour.dothome.co.kr/apiServer/searchKeyword.php';
const getData = async() =>{
  try {
    // 서버로 로그인 요청을 보냅니다.
    const response = await axios.post(apiEndpoint, {
      keyword: props.item
    });
    
    if (response.status === 200) {
        document.querySelector('.loading-con').style.display='none';
        setData(response.data.response.body.items.item);
    } else {
      console.log('Request failed with status:', response.status);
    }

  } catch (error) {
    console.error('Login Failed:', error);
  }
}
useEffect(() => {
getData();
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