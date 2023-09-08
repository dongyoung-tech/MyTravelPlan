import React from "react";
import Places from "./Places";
import '../main.css';
import { useSelector } from "react-redux";
const RecommendPlace = props =>{
  console.log(useSelector((state)=>state));
    return(
        <div>
          <div className="main-photo"><h2>MYTravelPlan<br></br>나만의 여행코스를 만들어 보세요!</h2></div>
          <Places item="12"/>
          <Places item="39"/>
          <div className="banner"><h2>MYTravelPlan<br></br>나만의 여행코스를 만들어 보세요!</h2></div>
          <Places item="32"/>
          <footer className="footer"></footer>
        </div>
          
    );
}
export default RecommendPlace;