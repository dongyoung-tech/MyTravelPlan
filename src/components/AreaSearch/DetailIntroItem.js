import React from "react";

const DetailIntroItem = (props)=>{
    const data = props.item;
    const infotextHTML = { __html: data.infotext };
    return(
        <li className="Intro-item"><strong>{data.infoname}</strong><span dangerouslySetInnerHTML={infotextHTML}></span></li>
    )
}

export default DetailIntroItem;