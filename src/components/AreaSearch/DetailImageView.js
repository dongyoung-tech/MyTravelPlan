import React ,{useState} from "react";

const DetailImageView = props =>{
    const ClickHandler = () =>{
        document.querySelector('.detail-image-view-con').style.display='none';
    }
    const ImageLeftHandler = () =>{
        let imgnum = parseInt(document.querySelector('.detail-image-view').getAttribute('value'));
        if(imgnum == props.item.length-1) imgnum = -1;
        document.querySelector('.detail-image-view').setAttribute('value',imgnum+1);
        document.querySelector('.detail-image-view').setAttribute('src',props.item[imgnum+1].originimgurl);
    }
    const ImageRightHandler = () =>{
        let imgnum = parseInt(document.querySelector('.detail-image-view').getAttribute('value'));
        if(imgnum == 0) imgnum = props.item.length;
        document.querySelector('.detail-image-view').setAttribute('value',imgnum-1);
        document.querySelector('.detail-image-view').setAttribute('src',props.item[imgnum-1].originimgurl);
    }

    return(
        <div className="detail-image-view-con">
            <button className="image-left-btn" onClick={ImageLeftHandler}><i class="fa-solid fa-arrow-left"></i></button>
            <img className="detail-image-view"></img>
            <button className="image-right-btn" onClick={ImageRightHandler}><i class="fa-solid fa-arrow-right"></i></button>
            <button className="close-btn" onClick={ClickHandler}><i class="fa-solid fa-xmark"></i></button>
        </div>
    )
}

export default DetailImageView;