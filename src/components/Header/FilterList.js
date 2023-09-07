// FilterList 컴포넌트
import React from "react";
import Filter from "./Filter";
import './Filter.css'

const FilterList = () =>{
    const topic=["","Area","Course","FreeBoard"];
    return(
        <div className="Nav-Bar">
            <div className="Nav-inner">
            <img className="logo" src='http://youngtour.dothome.co.kr/images/letter-logo.png' alt='logo'></img>
                <ul>
                   {topic.map((el,idx)=>{return <Filter key={idx} item={el}/>})}
                </ul>
            </div>
        </div>
    );
}

export default FilterList;
