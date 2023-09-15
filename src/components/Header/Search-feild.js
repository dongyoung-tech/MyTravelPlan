import React from "react";
import {useNavigate} from 'react-router-dom';

const SearchFeild = () =>{
    const navigate = useNavigate();
    const keywordHandler = () =>{
        const keyword = document.querySelector('.search-field input').value;
        if(keyword.trim().length==0){
            alert("한글자 이상 입력해주세요");
            return;
        }
        navigate(`keyword?keyword=${document.querySelector('.search-field input').value}`);
    }
    return(      
        <div className="search-field">
            <div>
                <input placeholder="키워드를 입력해주세요."></input>
                <button onClick={keywordHandler}><i className="fa-solid fa-magnifying-glass"></i></button> 
            </div>
        </div>
    )
}

export default SearchFeild;