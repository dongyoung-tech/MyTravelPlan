import React from "react";

const ImageItem = (props)=>{
    const ImageViewHandler = () =>{
        document.querySelector('.detail-image-view-con').style.display='flex';
        document.querySelector('.detail-image-view').setAttribute('src',props.item.originimgurl);
        document.querySelector('.detail-image-view').setAttribute('value',parseInt(props.index));
    }

    return (<>
        <img src={props.item.originimgurl} onClick={ImageViewHandler}></img>
        
    </>)
}

export default ImageItem;
