import React ,{useState}from "react";
import FreeBoardRippleList from "./FreeBoardRippleList";
import axios from "axios";

const FreeBoardRippleForm = (props) =>{
    const user = JSON.parse(sessionStorage.getItem("userData"));
    const [refresh, setRefresh] = useState(false); // 추가
    const ClickHandler = async (event) =>{
        event.preventDefault();
        if(!user){
            alert("로그인 후 이용 가능하십니다.");
            return;
        }
        const content = document.querySelector(".r_form textarea").value;
        if(content.trim().length==0){
            alert("한글자 이상 작성해주세요.");
            return;
        }
        const username = user.name;
        const id = user.id;
        try {
            // 서버로 요청을 보냅니다.
            const response = await axios.post(
              "http://youngtour.dothome.co.kr/repl/FreeBoard-repl-insert.php",
              {
                parent:props.item,
                id,
                content,
                username,
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
              setRefresh(!refresh);
              document.querySelector(".r_form textarea").value = "";
            } else {
              console.error("Insert Failed");
            }
          } catch (error) {
            console.error("Insert Failed:", error);
          }
    }
    return(
        <>
         <p className="r_title">댓글</p>
         <div className="r_list_con">
           <FreeBoardRippleList key={refresh ? "refreshed" : "not-refreshed"}/>
         </div>
         <div className="r_form">
            <textarea></textarea>
            <button onClick={ClickHandler}>등록</button>
         </div>
        </>
    )
}

export default FreeBoardRippleForm;