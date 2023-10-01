import React, { useState, useEffect } from "react";
import Card from "../UI/Card.js";
import "./Area.css";
import { Link, useLocation } from "react-router-dom";
import Loading from "../UI/Loading.js";

const AreaPlace = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [Data, setData] = useState([]);
  const [isLoading, setLoad] = useState(false);
  const [pageNo, setPageNo] = useState(Number(searchParams.get('Page')?searchParams.get('Page'):1)); // 현재 페이지 번호;
  const Area = Number(searchParams.get('Area')?searchParams.get('Area'):1); // 현재 페이지 번호;
  const Sigungu = Number(searchParams.get('Sigungu')?searchParams.get('Sigungu'):1)
  const Category = Number(searchParams.get('Category')?searchParams.get('Category'):12)
  const pageUrl = `/Area?Area=${Area}&Sigungu=${Sigungu}&Category=${Category}`;
  const [totalDataCount,setTotalDataCount] = useState(1);
  const numOfRows = 12;
  const apiKey =
    "yX8wx5nzKb42wtBThegyX7gb6G3xUCPCMfbzNYF1Gf0p0nSUn9ZeynPzokq9GNLvrFLmqQVbU9%2FQz9LckJpQLw%3D%3D";
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
      if (elem == undefined) setLoad(true);
      else setLoad(false);
      setTotalDataCount(elem.length);
      if(pageNo < 0 || pageNo > elem.length ){
        setPageNo(1);
      }
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
        <Link
        to={`${pageUrl}&Page=${pageNo - 1}`} // 올바른 URL 경로 설정
        key="prev"
        onClick={() => {
          changePage(pageNo - 1);
        }}
      >
        이전
      </Link>
      );
    }
    // 페이지 버튼
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(

          <Link
          to={`${pageUrl}&Page=${i}`}// 올바른 URL 경로 설정
          key={i}
          onClick={() => changePage(i)}
          className={i === pageNo ? "active" : ""}
        >
          {i} 
        </Link>
      );
    }
  
    // 다음 페이지 버튼
    if (currentPageGroup < Math.ceil(totalPages / pageCount) || pageNo < totalPages) {
      buttons.push(
        <Link
        to={`${pageUrl}&Page=${pageNo + 1}`} // 올바른 URL 경로 설정
        key="next"
        onClick={() => {
          changePage(pageNo + 1);
        }}
      >
        다음
      </Link>
      );
    }
  
  
    return buttons;
  };
  

  return (
    <>
      <div className="Card-Container">
        <Loading/>
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
