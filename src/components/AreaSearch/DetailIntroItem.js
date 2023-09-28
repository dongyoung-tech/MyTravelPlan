import React from "react";

const DetailIntroItem = (props)=>{
    const data = props.item;
    let infotextHTML = { __html: data.infotext };
    if(data.contenttypeid == 32) infotextHTML = { __html: data.roomintro };
    if(data.contenttypeid == 32){
        return (
            <li className="Intro-item"><strong>{data.roomtitle}</strong><span dangerouslySetInnerHTML={infotextHTML}></span></li>
        )
    }
    return(
        <li className="Intro-item"><strong>{data.infoname}</strong><span dangerouslySetInnerHTML={infotextHTML}></span></li>
    )
}

export default DetailIntroItem;