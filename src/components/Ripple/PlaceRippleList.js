import React from "react";
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("userData"));

const PlaceRippleList = (props) =>{
    let Del = false;
    if(user && user.name === props.item.name){
        Del = true;
    }
    const deleteHandler = async () =>{
        try {
            // 서버로 요청을 보냅니다.
            const response = await axios.post(
              "http://youngtour.dothome.co.kr/repl/Place-repl-delete.php",
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
        <div className="p_list_con">
            <a href={`/User?user=${props.item.id}`}><span className="p_list_user">{props.item.name}</span></a>
            <span className="p_list_regist">{props.item.regist}</span>
            <span className="p_list_regist"> 평점 {props.item.rate}</span>
            <p className="p_list_content">{props.item.content}</p>
            {Del && <span className="p_delete" onClick={deleteHandler}>삭제하기</span>}
        </div>
    )
    
}

export default PlaceRippleList;