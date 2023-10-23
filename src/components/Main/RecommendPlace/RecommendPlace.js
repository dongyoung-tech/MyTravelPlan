import React from "react";
import Places from "./Places";
import '../main.css';
import {useNavigate} from 'react-router-dom';
const RecommendPlace = props =>{
  const navigate = useNavigate();
  const KeyWordHandler =()=>{
    const input = document.querySelector('.keyword input');
    if(input.value.trim().length ==0) {
      alert('한글자 이상 입력해주세요.');
      return;
    }
    navigate(`/keyword?keyword=${document.querySelector('.keyword input').value}`);
  }
  const AreaCodeHandlier = ()=>{
      let areacode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 31, 32, 33, 34, 35, 36, 37, 38, 39];
    let number = Math.floor(Math.random() * 17 + 1);
    
    return areacode[number];
  }
    return(
        <div style={{marginBottom:'70px'}}>
          <div className="main-photo"><h2>MYTravelPlan<br></br>나만의 여행코스를 만들어 보세요!</h2>
            <div className="keyword">
               <form action="/Keyword">
                <input name="keyword" placeholder="검색어를 입력하세요"></input>
                <button onClick={KeyWordHandler}><i className="fa-solid fa-magnifying-glass"></i></button>
               </form>
            </div>
          </div>
          <Places item="12" area={AreaCodeHandlier()}/>
          <Places item="39" area={AreaCodeHandlier()}/>
          <div className="banner"><h2>MYTravelPlan<br></br>나만의 여행코스를 만들어 보세요!</h2></div>
          <Places item="32" area={AreaCodeHandlier()}/>
        </div>
          
    );
}
export default RecommendPlace;