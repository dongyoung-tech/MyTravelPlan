import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Content from "./Content";

const FreeBoardView = () =>{
    let num;
    const location = useLocation();
    const [Data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // URL 쿼리 파라미터 가져오기
      const searchParams = new URLSearchParams(location.search);
      num = searchParams.get('num');
  
      // name 변수에 파라미터 값 1이 저장됩니다.
      console.log(num);
    }, [location.search]);

    useEffect(() => {
        setIsLoading(true);
        // param이 변경될 때마다 apiEndpoint를 생성
        const apiEndpoint = `http://youngtour.dothome.co.kr/freeboard/freeboard-list.php?num=${num}`;
        
        fetch(apiEndpoint)
          .then(response => response.json())
          .then(data => {
            const elem = data;
            setData(elem);
            setIsLoading(false);
          })
          .catch(error => {
            console.log(error);
            setIsLoading(false); // 데이터 로딩 실패
          });
      }, [num]);
    
    return(
      
        <div>
        {!isLoading && <Content items={Data[0]}/>}
        </div>
    )
}

export default FreeBoardView;