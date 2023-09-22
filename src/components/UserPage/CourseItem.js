import React from "react";

const CourseItem = (props) =>{
    return (
        <a href={`/Course/CourseView?num=${props.item.num}`}>
        <div className="c_l">
            <b className="c_l_title">{props.item.name}</b>
            <div className="c_l_sub">
                <span className="l_regist">등록일</span>
                <b className="c_l_regist">{props.item.regist}</b>
            </div>
        </div>
        </a>
    )
} 
export default CourseItem;