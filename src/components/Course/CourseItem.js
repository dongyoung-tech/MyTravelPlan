import React from "react";
import './Course.css';
import {useNavigate} from 'react-router-dom';

const CourseItem = (props) =>{
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(`CourseView?num=${props.item.num}`);
    }
    const user = JSON.parse(sessionStorage.getItem('userData'));

    return(
         <ul className="list" onClick={clickHandler}>
            <li className="col">{props.item.num}</li><li className="col">{props.item.name}</li>
            <li className="col">{props.item.user}</li><li className="col">{props.item.regist}</li>
         </ul>
    )
}

export default CourseItem;
