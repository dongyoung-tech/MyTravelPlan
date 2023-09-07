import React from "react";
import {useNavigate} from 'react-router-dom';

const FreeBoardItem = (props) =>{
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(`FreeBoardView?num=${props.item.num}`);
    }

    return(
        <div className="list" onClick={clickHandler}>
            {props.item.num} {props.item.topic} {props.item.name} 
        </div>
    )
}

export default FreeBoardItem;