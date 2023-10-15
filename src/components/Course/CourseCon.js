import React,{useState,useEffect} from "react";
import CourseItem from "./CourseItem";
import {useNavigate} from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";

const CourseCon = () =>{
  const navigate = useNavigate();
  const ClickHandler = () =>{
      navigate('MakeCourse');
  }
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const numOfRows = 5;
  const pageUrl = `/Course`;
  const [pageNo, setPageNo] = useState(Number(searchParams.get('Page')?searchParams.get('Page'):1)); // 현재 페이지 번호;
  const [totalDataCount,setTotalDataCount] = useState(1);
  const user = JSON.parse(sessionStorage.getItem('userData'));
  const [Data,setData] = useState([]);
    
    const apiEndpoint = 'http://youngtour.dothome.co.kr/course/course-info-list.php';
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
       []); // 빈 배열로 설정하여 컴포넌트 마운트 시에만 호출되도록 함

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
            className='arrow'
          >
              <i class="fa-solid fa-angle-left"></i>
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
            className='arrow'
          >
              <i class="fa-solid fa-angle-right"></i>
          </Link>
          );
        }
      
      
        return buttons;
      };   
    return( 
        <div className='list-container'>
          <h2>여행코스 목록</h2>        
            <div className="list-con">
              <ul className="list">
                <li className="col">번호</li><li className="col">제목</li><li className="col">제작자</li><li className="col">등록일</li>
            </ul>
              {getCurrentPageData().map((item,index)=> {
              return <CourseItem key ={index} item={item}/>
            })}
            </div>
            {<div className="pagination">{renderPageButtons()}</div>}
            {user && <button onClick={ClickHandler}>코스 만들기</button>}
          </div>
    )
}

export  default CourseCon; 