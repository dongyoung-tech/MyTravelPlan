import React, { useState, useEffect } from 'react';
import Option from './Option.js';
import AreaPlace from './AreaPlace';
import { useNavigate } from 'react-router-dom'; 

let areacode = ['1','6','2','4','5','3','7','8','31','32','33','34','35','36','37','38','39'];
let areaText = ['서울','부산','인천','대구','광주','대전','울산','세종','경기','강원','충북','충남','경북','경남','전북','전남','제주'];
let contentType= [["관광지",12],["문화시설",14],["축제",15],["레포츠",28],["숙박",32],["쇼핑",38],["음식점",39]];
const AreaSelect = () => {
  const navigate = useNavigate(); 
  const [optionData, setOptionData] = useState([]); // 상태로 옵션 데이터 관리
  const [Cat, setCat] = useState('1');
  const [Cat2, setCat2] = useState('1');
  const [Cat3, setCat3] = useState('12');
  const [selected, setSelect] = useState(["1", "1","12"]);


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
    navigate(`/Area?Area=${Cat}&Sigungu=${Cat2}&Category=${Cat3}&Page=1`);
  };

  return (
    <>
    <div className='Area-photo'><p>지역별 검색</p></div>
      <div className='Area-Container'>
        <h3 className='result-text'>검색결과</h3>
        <div className='select-box'>
          <select onChange={(e) => handleCatChange(e.target.value)}>
            {areacode.map((item, index) => (
              <option value={item} key={item}>
                {areaText[index]}
              </option> ))}
          </select>
          <select onChange={(e) => handleCatChange2(e.target.value)}>
            {optionData.map((option) => (
              <option value={option.code} key={option.rum}>
                {option.name}
              </option>
            ))}
          </select>
          <select onChange={(e)=>handleCatChange3(e.target.value)}>
            {contentType.map(item=>{
              return <option value={item[1]}>{item[0]}</option>
            })}
          </select>
          <button onClick={placeListHandler}>검색하기</button>
        </div>
        <div>
          <AreaPlace item={selected} key={"areaplace"} />
        </div>
      </div>
    </>
  );
};

export default AreaSelect;
