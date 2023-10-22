import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Content from "./Content";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
const FreeBoardView = () =>{
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem('userData'));
    let num;
    const location = useLocation();
    const [Data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const MoveHandler = () =>{
      navigate(`/FreeBoard/Modify?num=${Data[0].num}`);
    }
    useEffect(() => {
    
      const searchParams = new URLSearchParams(location.search);
      num = searchParams.get('num');
  
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
            alert('존재하지 않는 페이지입니다.');
            window.history.go(-1);
            console.log(error);
            setIsLoading(false); // 데이터 로딩 실패
          });
      }, [num]);

      const onDelete = async () => {
        if (Array.isArray(Data) && Data.length > 0) {
          try {
            // 서버로 요청을 보냅니다.
            const response = await axios.post('http://youngtour.dothome.co.kr/freeboard/freeboard-delete.php', {
              num: Data[0].num,
            });
    
            if (response.data.trim() === "good") {
              window.location.href = '/FreeBoard';
            }
          } catch (error) {
            console.error('Delete Failed:', error);
          }
        }
      }
    return(
      
        <div>
        {!isLoading && <Content items={Data[0]}/>}
        {!isLoading && user && user.id == Data[0].id && 
        <div className="button_container">
          <button onClick={MoveHandler}>수정하기</button>
          <button style={{margin:"0 10px"}}onClick={onDelete}>삭제하기</button>
        </div>}
        </div>
    )
}

export default FreeBoardView;