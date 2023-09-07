import React, { useState, useEffect } from 'react';
import Option from './Option.js';
import AreaPlace from './AreaPlace';

let areacode = ['1','6','2','4','5','3','7','8','31','32','33','34','35','36','37','38','39'];
let areaText = ['서울','부산','인천','대구','광주','대전','울산','세종','경기','강원','충북','충남','경북','경남','전북','전남','제주'];

const AreaSelect = () => {
  const [optionData, setOptionData] = useState([]); // 상태로 옵션 데이터 관리
  const [Cat, setCat] = useState('1');
  const [Cat2, setCat2] = useState('1');
  const [selected, setSelect] = useState(["1", "1"]);
  const [areaPlaceKey, setAreaPlaceKey] = useState(0); // key 값을 변경하여 AreaPlace를 재 렌더링

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
      console.log(cat);
      setCat2(cat);
    };

  const placeListHandler = () => {
    setSelect([Cat, Cat2]);
    setAreaPlaceKey((prevKey) => prevKey + 1); 
  };

  return (
    <div>
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
      <button onClick={placeListHandler}>검색하기</button>
      <div>
        <AreaPlace item={selected} key={areaPlaceKey} />
      </div>
    </div>
  );
};

export default AreaSelect;
