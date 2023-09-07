import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "./Map";

const CourseView = () => {
  let num;
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // URL 쿼리 파라미터 가져오기
    const searchParams = new URLSearchParams(location.search);
    num = searchParams.get('num');

    // name 변수에 파라미터 값 1이 저장됩니다.
    console.log(num);
  }, [location.search]);

  const [Data, setData] = useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    // param이 변경될 때마다 apiEndpoint를 생성
    const apiEndpoint = `http://youngtour.dothome.co.kr/course/course-info-list.php?num=${num}`;
    
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        const elem = data;
        console.log("Map 에 전할 데이터",data);
        setData(elem);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false); // 데이터 로딩 실패
      });
  }, [num]);

  return (
    <div>
     {!isLoading && <Map key="map" item={Data} />}
    </div>
  );
}

export default CourseView;
