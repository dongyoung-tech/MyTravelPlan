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
            props.commentLoad();
            if (response.data != "success") {
              // 댓글 제출 성공 시, 부모 컴포넌트로 콜백 함수 호출
              // 입력 필드 초기화
              props.commentLoad();
              console.error("delete Failed");
            }
          } catch (error) {
            console.error("delete Failed:", error);
            props.commentLoad();
          }
    
    }
    const setRate = () =>{
      let buttons=[];
      for(var i=0; i<props.item.rate; i++){
        buttons.push(<i class="fa-solid fa-star"></i>);
      }
      return buttons;
    }
    return(
        <div className="p_list_con">
            {props.item.profile && <img src={`http://youngtour.dothome.co.kr/upload/${props.item.profile}`}></img>}
            <a href={`/User?user=${props.item.id}`}><span className="p_list_user">{props.item.name}</span></a>
            <span className="p_list_regist">{props.item.regist}</span>
            <span className="p_list_rate">{setRate()}</span>
            <p className="p_list_content">{props.item.content}</p>
            {Del && <button className="p_delete" onClick={deleteHandler}>x</button>}
        </div>
    )
    
}

export default PlaceRippleList;