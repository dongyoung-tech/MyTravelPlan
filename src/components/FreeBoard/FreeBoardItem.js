import React from "react";
import {useNavigate} from 'react-router-dom';

const FreeBoardItem = (props) =>{
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(`FreeBoardView?num=${props.item.num}`);
    }

    return(
        <ul className="list" onClick={clickHandler}>
            <li className="col">{props.item.num}</li><li className="col">{props.item.name}</li>
            <li className="col">{props.item.topic}</li> <li className="col">{props.item.regist}</li> 
        </ul>
    )
}

export default FreeBoardItem;