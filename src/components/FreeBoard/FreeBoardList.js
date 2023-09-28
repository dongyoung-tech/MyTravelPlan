import React,{useState,useEffect} from "react";
import FreeBoardItem from "./FreeBoardItem";
import {useNavigate} from 'react-router-dom';

const FreeBardList = () =>{
   const user = JSON.parse(sessionStorage.getItem('userData'));
    const [Data,setData] = useState([]);
    const apiEndpoint = 'http://youngtour.dothome.co.kr/freeboard/freeboard-list.php';
    useEffect(() => {
        fetch(apiEndpoint)
          .then(response => response.json())
          .then(data => {
            const elem = data;
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

    return(
      <>
        <h2>게시판</h2>
      <div className="list-con">
           <ul className="list">
            <li className="col">글번호</li><li className="col">글쓴이</li>
            <li className="col">글제목</li> <li className="col">등록일</li> 
           </ul>
            {Data.map((item,idx)=>{
              return <FreeBoardItem key={idx} item={item}/> 
            })}
              {user&& <button onClick={InsertMove}>글쓰기</button>}
        </div>
        </>
    )
}

export default FreeBardList;