import React from "react";
import Places from "./Places";
import '../main.css';
const RecommendPlace = props =>{

    return(
        <div>
          <div className="main-photo"><h2>MYTravelPlan<br></br>나만의 여행코스를 만들어 보세요!</h2></div>
          <Places item="12"/>
          <Places item="39"/>
        </div>
          
    );
}
export default RecommendPlace;