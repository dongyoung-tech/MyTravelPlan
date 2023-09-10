// FilterList 컴포넌트
import React from "react";
import Filter from "./Filter";
import './Filter.css'
import LogOutButton from "../Login/LogOutButton";
import LoginButton from "../Login/LoginButton";
const FilterList = () =>{
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const topic=["","Area","Course","FreeBoard"];
    return(
        <div className="Nav-Bar">
            <div className="Nav-inner">
            <img className="logo" src='http://youngtour.dothome.co.kr/images/letter-logo.png' alt='logo'></img>
                <ul>
                   {topic.map((el,idx)=>{return <Filter key={idx} item={el}/>})}
                </ul>
                {user&& <LogOutButton/>}
                {!user && <LoginButton/>}
            </div>
        </div>
    );
}

export default FilterList;
