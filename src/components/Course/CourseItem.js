import React from "react";
import './Course.css';
import {useNavigate} from 'react-router-dom';

const CourseItem = (props) =>{
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(`CourseView?num=${props.item.num}`);
    }

    return(
         <div className="list" onClick={clickHandler}>
             {props.item.num} {props.item.user} {props.item.name}
         </div>
    )
}

export default CourseItem;
