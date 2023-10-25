import React from "react";
import "./Course.css";
import {useNavigate} from 'react-router-dom';
const SelectItem = (props) =>{
    const navigate = useNavigate();
    const clickHandler = () =>{
           navigate(`/Area/AreaDetail?contentid=${props.item.contentid}`);
    }

    const imgSrc =props.item.imgurl?`http://tong.visitkorea.or.kr/cms/resource/${props.item.imgurl}`
    :`http://youngtour.dothome.co.kr/images/error.png`;

    return(
        <div className="c_item" onClick={clickHandler}>
            <div className="marker-img">{props.idx+1}</div>
            <div className="c_s_con">
                <img className ='c_s_img'src={imgSrc}></img>
                <div>
                    <h4>{props.item.name}</h4>
                    <p>{props.item.address}</p>
                </div>
            </div>
        </div>
    )
}

export default SelectItem;