import React from "react";
import axios from "axios";
const CourseReplItem = (props) =>{
    const user = JSON.parse(sessionStorage.getItem("userData"));
    let Del = false;
    if(user && user.name === props.items.name){
        Del = true;
    }
    const deleteHandler = async()=>{
        try {
            // 서버로 요청을 보냅니다.
            const response = await axios.post(
              "http://youngtour.dothome.co.kr/repl/Course-ripple-delete.php",
              {
                num:props.items.num
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            props.onCommentLoad();
            if (response.data !== "success") {
  
              console.error("Delete Failed");
            }
          } catch (error) {
            console.error("Delete Failed:", error);

          }
    }
    return(
        <div className="c_repl_item">
            {props.items.profile && <img src={`http://youngtour.dothome.co.kr/upload/${props.items.profile}`}></img>}
            <a href={`/User?user=${props.items.id}`}><span className="c_r_user">{props.items.name}</span></a>
            <span className="c_r_regist">{props.items.regist}</span>
            <p className="c_r_content">{props.items.content}</p>
            {Del && <button className="c_r_delete" onClick={deleteHandler}>x</button>}
        </div>
    )
}

export default CourseReplItem;