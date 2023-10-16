import React from "react";

const DetailIntroItem = (props)=>{
    const data = props.item;
    const cat = props.cat;
    const subIntro = cat==32?data.roomintro:cat==25?data.subdetailoverview:data.infotext;
    const infotextHTML = { __html: subIntro};
    const subTitle = cat==32?data.roomtitle:cat==25?data.subname:data.infoname;
    return(
        <li className="Intro-item"><strong>{subTitle}</strong><span dangerouslySetInnerHTML={infotextHTML}></span></li>
    )
}

export default DetailIntroItem;