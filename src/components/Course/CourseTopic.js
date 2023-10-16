import React from "react";

const CourseTopic = (props)=>{

    return (
        <>
        <div className="course-topic">
            <h2 className='list-topic'>{props.Data.name}</h2>
            <h3 className='list-user'>{props.Data.user}</h3>
            <div className="course-date">📅 <span>{props.Data.startdate}</span>~<span>{props.Data.lastdate}</span></div>
            {props.username === props.Data.user && <button onClick={props.couseDelete}>삭제하기</button>}
       </div>
       <div className="c_intro">
            <h4>코스 소개</h4>
            <p>{props.Data.intro}</p>
        </div>
        </>
    )
}
export default CourseTopic;