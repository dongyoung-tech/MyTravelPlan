import React from "react";
import './FreeBoard.css';
import FreeBoardRippleForm from "../Ripple/FreeBoardRippleForm";
const Content = (props) =>{

    return(
        <div className="freeboard_con">
            <h2>자유게시판</h2>
            <p className="f_title">
                <span>{props.items.topic}</span>
            </p>
            <div className="f_info">
                <span>{props.items.name}</span>
                <span>{props.items.regist}</span>
            </div>
            <div className="f_text">
                 <p>{props.items.content}</p>
            </div>
            <FreeBoardRippleForm item={props.items.num}/>
        </div>
    )
}

export default Content;