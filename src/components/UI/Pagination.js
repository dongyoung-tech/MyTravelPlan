import React ,{useState,useEffect} from "react";
import SelectItem from "../Course/SelectItem";

const Pagination = (props) =>{
    const [pageNo, setPageNo] = useState(1); // 현재 페이지 번호;
    const [totalDataCount,setTotalDataCount] = useState(1);
    const numOfRows = 12;
   // totalDataCount 값을 설정하기 위해 useEffect를 사용합니다.
    useEffect(() => {
      if(props.data) setTotalDataCount(props.data.length);
    }, [props.data]);
    
    function changePage(newPageNo){
        setPageNo(newPageNo);
    };  
    const getCurrentPageData = () => {
        const startIndex = (pageNo - 1) * numOfRows;
        const endIndex = startIndex + numOfRows;
        return props.data.slice(startIndex, endIndex);
    }
    
    function renderPageButtons (){
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
            onClick={() => {
              changePage(pageNo - 1);
            }}
            className='arrow'
          >
             <i class="fa-solid fa-angle-left"></i>
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
     if (currentPageGroup < Math.ceil(totalPages / pageCount) || pageNo < totalPages) {
          buttons.push(
            <button
            key="next"
            onClick={() => {
              changePage(pageNo + 1);
            }}
            className='arrow'
          >
             <i class="fa-solid fa-angle-right"></i>
          </button>
          );
        }
      
      
        return buttons;
    }
    console.log('pagination');
    return(
       <>
           <div className="select_list">
            {props.data && getCurrentPageData().map((item, index) => {
                return <SelectItem key={index} item={item}  />
              })}
          {!props.data && <div className="error-page">검색 결과가 없습니다. 다른 키워드를 입력해주세요.</div>}
          </div>
          {props.data && <div className="pagination">{renderPageButtons()}</div>}
        </>
    );
}

export default Pagination;