import React, { useState, useEffect } from "react";
import Pagination from "../UI/Pagination";

const SelectList = (props) => {
  const [Data, setData] = useState([]);
  const apiKey = "yX8wx5nzKb42wtBThegyX7gb6G3xUCPCMfbzNYF1Gf0p0nSUn9ZeynPzokq9GNLvrFLmqQVbU9%2FQz9LckJpQLw%3D%3D";
  const apiEndpoint = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=${apiKey}&numOfRows=200&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&arrange=Q&keyword=${props.keyword}`;
  useEffect(() => {
    // API 호출 및 데이터 업데이트 등을 수행하는 로직
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        const elem = data.response.body.items.item;
        setData(elem);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.keyword]); // props.keyword를 의존성 배열에 추가
    return (
      <>
        <Pagination data={Data}/>
      </>
     );
  };
  



export default SelectList;
