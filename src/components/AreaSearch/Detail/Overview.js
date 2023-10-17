import React from "react";

const Overview = (props) =>{
    if(props.item.__html.length>3){
        return(
            <div className="sub-con">
            <h3 className="d_sub_title">소개</h3>
            <p className="overview" dangerouslySetInnerHTML={props.item}></p>
        </div>
        )
    }
}
export default Overview;