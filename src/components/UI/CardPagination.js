import React, { useState, useEffect } from "react";
import Card from "./Card";
import { Link, useLocation } from "react-router-dom";

const CardPagination = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [pageNo, setPageNo] = useState(Number(searchParams.get('Page')) || 1);
  const Area = props.Area;
  const Sigungu = props.Sigungu;
  const Category = props.Category;
  let pageUrl='';
  if(!props.keyword){
    pageUrl = `/Area?Area=${Area}&Sigungu=${Sigungu}&Category=${Category}`;
  }
  else{
    pageUrl = `/Keyword?keyword=${props.keyword}`;
  }
  const [totalDataCount, setTotalDataCount] = useState(1);
  const numOfRows = 12;
  if (pageNo < 0 || !props.data || pageNo > props.data.length) {
    setPageNo(1);
  }

  useEffect(() => {
    // props.data가 변경되었을 때만 totalDataCount를 업데이트합니다.
    if (props.data) {
      setTotalDataCount(props.data.length);
    }
  }, [props.data]);


  const getCurrentPageData = () => {
    const startIndex = (pageNo - 1) * numOfRows;
    const endIndex = startIndex + numOfRows;
    return props.data.slice(startIndex, endIndex);
  };

  const changePage = (newPageNo) => {
    setPageNo(newPageNo);
  };

  const renderPageButtons = () => {
    const buttons = [];
    const totalPages = Math.ceil(totalDataCount / numOfRows);
    let pageCount = 5;
    if (totalPages < 5) pageCount = totalPages;
    const currentPageGroup = Math.ceil(pageNo / pageCount);
    const startPage = (currentPageGroup - 1) * pageCount + 1;
    const endPage = Math.min(currentPageGroup * pageCount, totalPages);

    const generatePageButton = (page) => (
      <Link
        to={`${pageUrl}&Page=${page}`}
        key={page}
        onClick={() => changePage(page)}
        className={page === pageNo ? 'active' : ''}
      >
        {page}
      </Link>
    );

    if (pageNo > 1) {
      buttons.push(
        <Link
          to={`${pageUrl}&Page=${pageNo - 1}`}
          key="prev"
          onClick={() => changePage(pageNo - 1)}
          className="arrow"
        >
          <i class="fa-solid fa-angle-left"></i>
        </Link>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(generatePageButton(i));
    }

    if (currentPageGroup < Math.ceil(totalPages / pageCount) || pageNo < totalPages) {
      buttons.push(
        <Link
          to={`${pageUrl}&Page=${pageNo + 1}`}
          key="next"
          onClick={() => changePage(pageNo + 1)}
          className="arrow"
        >
          <i class="fa-solid fa-angle-right"></i>
        </Link>
      );
    }

    return buttons;
  };

  return (
    <>
      <div className="Card-Container">
        {getCurrentPageData().map((item, index) => {
          return <Card key={index} item={item} />;
        })}

      </div>
      <div className="pagination">{renderPageButtons()}</div>
    </>
  );
};

export default CardPagination;
