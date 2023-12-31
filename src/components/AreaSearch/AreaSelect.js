import React, { useState, useEffect } from 'react';
import Option from './Option.js';
import AreaPlace from './AreaPlace';
import { useNavigate } from 'react-router-dom'; 
import {useLocation } from "react-router-dom";
import AreaSelection from "./AreaSelection";
import SigunguSelection from "./SigunguSelection";
import CategorySelection from "./CategorySelection";

let areacode = ['1','6','2','4','5','3','7','8','31','32','33','34','35','36','37','38','39'];
let areaText = ['서울','부산','인천','대구','광주','대전','울산','세종','경기','강원','충북','충남','경북','경남','전북','전남','제주'];
let contentType= [["관광지",12],["문화시설",14],["축제",15],["레포츠",28],["숙박",32],["쇼핑",38],["음식점",39]];
const AreaSelect = () => {
  const navigate = useNavigate(); 
  const [optionData, setOptionData] = useState([]); // 상태로 옵션 데이터 관리
  const [selected, setSelect] = useState(["1", "1","12"]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const Area = Number(searchParams.get('Area')?searchParams.get('Area'):1); // 현재 페이지 번호;
  const Sigungu = Number(searchParams.get('Sigungu')?searchParams.get('Sigungu'):1)
  const Category = Number(searchParams.get('Category')?searchParams.get('Category'):12)
  const [Cat, setCat] = useState(Area);
  const [Cat2, setCat2] = useState(Sigungu);
  const [Cat3, setCat3] = useState(Category);
  useEffect(() => {
    Option(Cat) 
      .then((data) => {
        setOptionData(data); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, [Cat]);

  const handleCatChange = (newCat) => {
    setCat(newCat);
  };
    const handleCatChange2 = (cat) => {
      setCat2(cat);
    };
    const handleCatChange3 = (cat) => {
      setCat3(cat);
    };


  const placeListHandler = () => {
    setSelect([Cat, Cat2,Cat3]);
    window.location.href=`/Area?Area=${Cat}&Sigungu=${Cat2}&Category=${Cat3}&Page=1`;
  };
  return (
    <>
    <div className='Area-photo'><p>지역별 검색</p></div>
      <div className='Area-Container'>
        <h3 className='result-text'>관광지 목록</h3>
        <div className='select-box'>
          <AreaSelection handleCatChange ={handleCatChange} area={areacode} areaTxt={areaText} cat={Cat} key='Cat'/>
          <SigunguSelection handleCatChange2={handleCatChange2} cat2={Cat2} optionData={optionData} key='Cat2'/>
          <CategorySelection handleCatChange3={handleCatChange3} cat3={Cat3} contentType={contentType} key='Cat3'/>
          <button onClick={placeListHandler}><i className="fa-solid fa-magnifying-glass"></i> 검색</button>
        </div>
        <div>
          <AreaPlace item={selected} key={"areaplace"} />
        </div>
      </div>
    </>
  );
};

export default AreaSelect;
