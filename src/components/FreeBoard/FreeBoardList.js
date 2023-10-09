import React,{useState,useEffect} from "react";
import FreeBoardItem from "./FreeBoardItem";
import {useNavigate} from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";

const FreeBardList = () =>{
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [pageNo, setPageNo] = useState(Number(searchParams.get('Page')?searchParams.get('Page'):1)); // 현재 페이지 번호;
  const numOfRows = 5;
  const pageUrl = `/Freeboard`;
   const user = JSON.parse(sessionStorage.getItem('userData'));
    const [Data,setData] = useState([]);
    const [totalDataCount,setTotalDataCount] = useState(1);
    const apiEndpoint = 'http://youngtour.dothome.co.kr/freeboard/freeboard-list.php';
    useEffect(() => {
        fetch(apiEndpoint)
          .then(response => response.json())
          .then(data => {
            const elem = data;
            setTotalDataCount(elem.length);
            setData(elem);
          })
          .catch(error => {
            console.log(error);
          }
          );
      },
       []); 

      const navigate = useNavigate();
      const InsertMove = () =>{
        navigate(`FreeBoardInsert`);
      } 
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
            to={`${pageUrl}?Page=${pageNo - 1}`} // 올바른 URL 경로 설정
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
              to={`${pageUrl}?Page=${i}`}// 올바른 URL 경로 설정
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
            to={`${pageUrl}?Page=${pageNo + 1}`} // 올바른 URL 경로 설정
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
    return(
      <>
        <h2>게시판</h2>
      <div className="list-con">
           <ul className="list">
            <li className="col">글번호</li><li className="col">글쓴이</li>
            <li className="col">글제목</li> <li className="col">등록일</li> 
           </ul>
            {getCurrentPageData().map((item,idx)=>{
              return <FreeBoardItem key={idx} item={item}/> 
            })}
            {<div className="pagination">{renderPageButtons()}</div>}
              {user&& <button onClick={InsertMove}>글쓰기</button>}
        </div>
        </>
    )
}

export default FreeBardList;