import React, { useState, useEffect } from "react";
import Card from "../UI/Card.js";
import "./Area.css";
import { useLocation } from "react-router-dom";

const AreaPlace = (props) => {
  const [Data, setData] = useState([]);
  const [isLoading, setLoad] = useState(false);
  const [pageNo, setPageNo] = useState(1); // 현재 페이지 번호;
  const [totalDataCount,setTotalDataCount] = useState(1);
  const numOfRows = 12;
  const apiKey =
    "yX8wx5nzKb42wtBThegyX7gb6G3xUCPCMfbzNYF1Gf0p0nSUn9ZeynPzokq9GNLvrFLmqQVbU9%2FQz9LckJpQLw%3D%3D";
  let apiEndpoint = `http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${apiKey}&numOfRows=200&MobileOS=ETC&MobileApp=AppTest&_type=json&&arrange=Q
&sigunguCode=${props.item[1]}
&contentTypeId=${12}
&pageNo=${1}
&areaCode=${props.item[0]}`;

useEffect(() => {
  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const elem = data.response.body.items.item;
      setData(elem);
      if (elem == undefined) setLoad(true);
      else setLoad(false);
      setTotalDataCount(elem.length);
    })
    .catch((error) => {
      console.log(error);
    });
}, [apiEndpoint]);



  const getCurrentPageData = () => {
    const startIndex = (pageNo - 1) * numOfRows;
    const endIndex = startIndex + numOfRows;
    return Data.slice(startIndex, endIndex);
  };

  const changePage = (newPageNo) => {
    setPageNo(newPageNo);
  };
  const renderPageButtons = () => {
    const buttons = [];
    const totalPages = Math.ceil(totalDataCount / numOfRows);
    let pageCount = 5;
    if(totalPages < 5) pageCount = totalPages;
    const currentPageGroup = Math.ceil(pageNo / pageCount);
    const startPage = (currentPageGroup - 1) * pageCount + 1;
    const endPage = Math.min(currentPageGroup * pageCount, totalPages);

    // 이전 페이지 버튼
    if (pageNo > 1) {
      buttons.push(
        <button
          key="prev"
          onClick={() => changePage(pageNo - 1)}
        >
          이전
        </button>
      );
    }
    // 페이지 버튼
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => changePage(i)}
          className={i === pageNo ? "active" : ""}
        >
          {i}
        </button>
      );
    }
  
    // 다음 페이지 버튼
    if (currentPageGroup < Math.ceil(totalPages / pageCount) || pageNo < totalPages) {
      buttons.push(
        <button
          key="next"
          onClick={() => changePage(pageNo + 1)}
        >
          다음
        </button>
      );
    }
  
  
    return buttons;
  };
  

  return (
    <>
      <div className="Card-Container">
        {!isLoading && getCurrentPageData().map((item, index) => {
          return <Card key={index} item={item} />;
        })}
        {isLoading && (
          <div>검색결과 가 없습니다. 다른 지역을 선택 해주세요.</div>
        )}
      </div>
      {!isLoading && <div className="pagination">{renderPageButtons()}</div>}
    </>
  );
};

export default AreaPlace;
