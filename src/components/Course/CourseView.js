import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map from "./Map";
import axios from "axios";
import SelectedItem from "./SelectedItem";
import CourseRepl from "../Ripple/CourseRepl";

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

  return (
    <div className="Map-container" id="View">
      {!isLoading && Data.length > 0 && (
        <div className="course-topic">
          <h2 className='list-topic'>{Data[0].name}</h2>
          <h3 className='list-user'>{Data[0].user}</h3>
          <div className="course-date">📅 <span>{Data[0].startdate}</span>~<span>{Data[0].lastdate}</span></div>
          {username === Data[0].user && <button onClick={couseDelete}>삭제하기</button>}
        </div>
      )}
      {!isLoading && Data.length > 0 && (
        <div className="c_intro">
          <h4>코스 소개</h4>
          <p>{Data[0].intro}</p>
        </div>
      )}
      {!isLoading && Data.length > 0 && (
        <div className="c_map_con">
          <h4>지도</h4>
          <Map key="map" item={Data} />
        </div>
      )}
      {!isLoading && Data.length > 0 && (
        <div className="c_info_con">
          <div className="c_info_p_list">
            {Data[0].info.map((item, idx) => (
              <SelectedItem idx={idx} item={item} key={idx} />
            ))}
          </div>
          <CourseRepl item={Data[0]} />
        </div>
      )}
    </div>
  );
}

export default CourseView;
