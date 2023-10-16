import React from "react";

const DetailTitle = (props)=>{

    return (
       <>
         <h2 className="d_title">{props.title}</h2>
         <ul className="d_address">
        {props.addr1 && <li><span>주소</span>{props.addr1}</li>}
        {props.tel &&  <li><span>전화번호</span>{props.tel}</li>}
        </ul>
       </>
    )
}
export default DetailTitle;