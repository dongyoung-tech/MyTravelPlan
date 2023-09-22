import React from "react";
import './SelectItem.css';
import { useDispatch } from "react-redux";
import  { addItem } from '../../store/authActions';

const SelectItem = (props) =>{
    const searchString = "http://tong.visitkorea.or.kr/cms/resource/";
    const Dispatch = useDispatch();
    const clickHandler = () =>{
        const newItem = {
             name: props.item.title,
             mapx:props.item.mapy,
             mapy: props.item.mapx,
             address:props.item.addr1,
             imgurl:props.item.firstimage.replace(searchString, ""),
             contentid:props.item.contentid
        }; // 추가하려는 객체
        Dispatch(addItem(newItem)); // 액션 디스패치
    }
    return(
        <div className ='Select-Item'onClick={clickHandler}>
            <img src={props.item.firstimage}></img>
            <div className='Select-text-box'>
                <h4>{props.item.title}</h4>
                <h5>{props.item.addr1}</h5>
            </div>
        </div>
    )
}

export default SelectItem;