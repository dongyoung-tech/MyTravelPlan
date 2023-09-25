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
            if (response.data === "success") {
              // 댓글 제출 성공 시, 부모 컴포넌트로 콜백 함수 호출
              // 입력 필드 초기화
              props.onCommentLoad();
            } else {
              console.error("Insert Failed");
            }
          } catch (error) {
            console.error("Insert Failed:", error);
          }
    }
    return(
        <div className="c_repl_item">
            <a href={`/User?user=${props.items.id}`}><span className="c_r_user">{props.items.name}</span></a>
            <span className="c_r_regist">{props.items.regist}</span>
            <p className="c_r_content">{props.items.content}</p>
            {Del && <span className="c_r_delete" onClick={deleteHandler}>삭제하기</span>}
        </div>
    )
}

export default CourseReplItem;