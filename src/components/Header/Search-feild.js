import React from "react";

const SearchFeild = () =>{;
    const keywordHandler = (event) =>{
        event.preventDefault();
        const keyword = document.querySelector('.search-field input').value;
        if(keyword.trim().length==0){
            alert("한글자 이상 입력해주세요");
            return;
        }
        window.location.href=`/keyword?keyword=${document.querySelector('.search-field input').value}`;
    }
    return(      
        <div className="search-field">
            <form action="/keyword" onSubmit={keywordHandler}>
                <input placeholder="키워드를 입력해주세요." name="keyword"></input>
                <button onClick={keywordHandler}><i className="fa-solid fa-magnifying-glass"></i></button> 
            </form>
        </div>
    )
}

export default SearchFeild;