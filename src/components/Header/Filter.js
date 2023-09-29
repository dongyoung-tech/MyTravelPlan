// Filter 컴포넌트
import React from "react";
import { useNavigate } from 'react-router-dom';

const Filter = (props) =>{
    const navigate = useNavigate();
    let topic; 
    if(props.item === "Area") topic = "지역별 검색";
    else if(props.item === "Course") topic ="여행 코스";
    else if(props.item === "FreeBoard") topic ="게시판";
    
    const clickHandler = () =>{
        navigate(`/${props.item}`);
    }
    
    return (
        <li onClick={clickHandler}>{topic}</li>
    );
}

export default Filter;
