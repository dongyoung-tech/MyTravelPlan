import React from "react";
import axios from "axios";

const FreeBardRippleItem = (props) =>{
    const user = JSON.parse(sessionStorage.getItem("userData"));
    let Del = false;
    if(user && user.name === props.item.name){
        Del = true;
    }
    const deleteHandler = async()=>{
        try {
            // 서버로 요청을 보냅니다.
            const response = await axios.post(
              "http://youngtour.dothome.co.kr/repl/FreeBoard-repl-delete.php",
              {
                num:props.item.num
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
              props.commentLoad();
            } else {
              console.error("Insert Failed");
            }
          } catch (error) {
            console.error("Insert Failed:", error);
          }
    }
    return(
        <div className="repl-list">
            <a href={`/User?user=${props.item.id}`}><span className="r_item_title">{props.item.name}</span></a>
            <span className="r_item_regist">{props.item.regist}</span>
            <span className="r_item_content">{props.item.content}</span>
            {Del && <div className="r_delete" onClick={deleteHandler}>x</div>}
        </div>
    )
}

export default FreeBardRippleItem