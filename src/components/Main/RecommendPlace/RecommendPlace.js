import React from "react";
import Places from "./Places";
import '../main.css';
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import Footer from "../Footer";
import SideButton from "../../Header/SideButton";
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
    return(
        <div>
          <div className="main-photo"><h2>MYTravelPlan<br></br>나만의 여행코스를 만들어 보세요!</h2>
            <div className="keyword">
               <input placeholder="검색어를 입력하세요"></input>
               <button onClick={KeyWordHandler}><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>
          <Places item="12"/>
          <Places item="39"/>
          <div className="banner"><h2>MYTravelPlan<br></br>나만의 여행코스를 만들어 보세요!</h2></div>
          <Places item="32"/>
          <Footer/>
        </div>
          
    );
}
export default RecommendPlace;