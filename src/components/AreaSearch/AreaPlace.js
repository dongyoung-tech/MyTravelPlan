import React, { useState, useEffect } from "react";
import "./Area.css";
import {useLocation } from "react-router-dom";
import Loading from "../UI/Loading.js";
import CardPagination from "../UI/CardPagination";
const AreaPlace = () => {
  const location = useLocation();
  const [Data, setData] = useState([]);
  const searchParams = new URLSearchParams(location.search);
  const Area = Number(searchParams.get('Area')?searchParams.get('Area'):1); // 현재 페이지 번호;
  const Sigungu = Number(searchParams.get('Sigungu')?searchParams.get('Sigungu'):1)
  const Category = Number(searchParams.get('Category')?searchParams.get('Category'):12)
  const apiKey = "yX8wx5nzKb42wtBThegyX7gb6G3xUCPCMfbzNYF1Gf0p0nSUn9ZeynPzokq9GNLvrFLmqQVbU9%2FQz9LckJpQLw%3D%3D";
  const apiEndpoint = `http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${apiKey}&numOfRows=200&MobileOS=ETC&MobileApp=AppTest&_type=json&&arrange=Q
&sigunguCode=${Sigungu}
&contentTypeId=${Category}
&pageNo=${1}
&areaCode=${Area}`;
useEffect(() => {
  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const elem = data.response.body.items.item;
      setData(elem);
      document.querySelector('.loading-con').classList.add('hide');
    })
    .catch((error) => {
      console.log(error);
    });
}, [apiEndpoint]);
  return (
    <>
        <Loading/>
        {Data && Data.length > 0 && <CardPagination data={Data} Area={Area} Sigungu={Sigungu} Category ={Category}/>}
        {!Data  && <div className="error-page">검색 결과가 없습니다. 다른 키워드를 입력해주세요.</div>}
    </>
  );
};

export default AreaPlace;
