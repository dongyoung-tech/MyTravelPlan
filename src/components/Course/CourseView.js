import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "./Map";
import axios from "axios";
import CourseTopic from "./CourseTopic";
import CourseSelected from "./CourseSelected";

const CourseView = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(sessionStorage.getItem('userData'));
  const [Data, setData] = useState([]);
  let username = '';

  if (user != null) {
    username = user.name;
  }

  let num;
  useEffect(() => {
    // URL 쿼리 파라미터 가져오기
    const searchParams = new URLSearchParams(location.search);
    num = searchParams.get('num');
  }, [location.search]);

  useEffect(() => {
    setIsLoading(true);
    // param이 변경될 때마다 apiEndpoint를 생성
    const apiEndpoint = `http://youngtour.dothome.co.kr/course/course-info-list.php?num=${num}`;
    
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setData(data);
        } else {
          alert('존재하지 않는 페이지입니다.');
          window.history.go(-1);
        }
        setIsLoading(false);
      })
      .catch(error => {
        alert('존재하지 않는 페이지입니다.');
        window.history.go(-1);
        console.error(error);
        setIsLoading(false); // 데이터 로딩 실패
      });
  }, [num]);
  
  const couseDelete = async () => {
    if (Array.isArray(Data) && Data.length > 0) {
      try {
        // 서버로 요청을 보냅니다.
        const response = await axios.post('http://youngtour.dothome.co.kr/course/course-delete.php', {
          name: Data[0].name,
        });

        if (response.data.trim() === "good") {
          window.location.href = '/Course';
        }
      } catch (error) {
        console.error('Delete Failed:', error);
      }
    }
  }

if(!isLoading){
  return (
    <div className="Map-container" id="View">
        <CourseTopic Data={Data[0]} username={username} couseDelete={couseDelete}/>
        <Map key="map" item={Data} />
        <CourseSelected Data={Data[0]}/>
    </div>
  );
}
}

export default CourseView;
