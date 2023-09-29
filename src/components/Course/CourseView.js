import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "./Map";
import SelectedItem from "./SelectedItem";
import CourseRepl from "../Ripple/CourseRepl";

const CourseView = () => {
  let num;
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    // URL 쿼리 파라미터 가져오기
    const searchParams = new URLSearchParams(location.search);
    num = searchParams.get('num');

    // name 변수에 파라미터 값 1이 저장됩니다.
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
        setData(elem);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false); // 데이터 로딩 실패
      });
  }, [num]);
  
  return (
    <div className="Map-container" id="View">
        <div className="course-topic">
          {!isLoading && <h2 className='list-topic'>{Data[0].name}</h2>}    
          {!isLoading && <h3 className='list-user'>{Data[0].user}</h3>}    
          {!isLoading && <div className="course-date">📅 <span>{Data[0].startdate}</span>~<span>{Data[0].lastdate}</span></div>}
       </div>
        <div className="c_map_con">
           {!isLoading && <Map key="map" item={Data} />}
        </div>
        <div className="c_info_con">
            <div className="c_info_p_list">
            {!isLoading && Data[0].info.map((item,idx)=>{
                return <SelectedItem idx = {idx}item={item}/>
            })}
            </div>
            <div className="c_intro">
              <h4>코스 소개</h4>
            <p>{!isLoading && Data[0].intro}</p>
            </div>
            {!isLoading && <CourseRepl item={Data[0]}/>}
        </div>
    </div>
  );
}

export default CourseView;
