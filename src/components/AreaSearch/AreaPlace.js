import React, { useState, useEffect } from "react";
import "./Area.css";
import axios from "axios";
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
  const apiEndpoint = 'http://youngtour.dothome.co.kr/apiServer/areaBased.php';
  const getData = async() =>{
    try {
      // 서버로 로그인 요청을 보냅니다.
      const response = await axios.post(apiEndpoint, {
        areaCode: Area,
        sigunguCode: Sigungu,
        category: Category
      });
      
      if (response.status === 200) {
          console.log(response.data.response.body.items.item);
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
}, [Area,Sigungu,Category]);
  return (
    <>
        <Loading/>
        {Data && Data.length > 0 && <CardPagination data={Data} Area={Area} Sigungu={Sigungu} Category ={Category}/>}
        {!Data  && <div className="error-page">검색 결과가 없습니다. 다른 키워드를 입력해주세요.</div>}
    </>
  );
};

export default AreaPlace;
