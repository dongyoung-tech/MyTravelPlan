import React from "react";

const BlogSearchItem =(props) =>{
    const contentHTML = { __html: props.item.contents };
    const titleHTML = { __html: props.item.title };
    return(
        <a href={props.item.url} target='blank'> 
        <div>
            <div className="b_title"><b dangerouslySetInnerHTML={titleHTML}></b></div>
            <div className="b_content"><p dangerouslySetInnerHTML={contentHTML}></p></div>
            <div className="b_user_info">
                <img className="b_user_icon" src={props.item.thumbnail}></img>
                <span className="b_user">블로그명 : {props.item.blogname}</span>
            </div>
        </div>
        </a>
    )
} 

export default BlogSearchItem;