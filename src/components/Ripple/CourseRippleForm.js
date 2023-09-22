import React ,{useState} from "react";
import axios from "axios";
const CourseReplForm = (props) =>{
    const user = JSON.parse(sessionStorage.getItem("userData"));
    const [refresh, setRefresh] = useState(false); // 추가
    const ClickHandler = async (event) =>{
        event.preventDefault();
        if(!user){
            alert("로그인 후 이용 가능하십니다.");
            return;
        }
        const content = document.querySelector(".c_form textarea").value;
        if(content.trim().length==0){
            alert("한글자 이상 작성해주세요.");
            return;
        }
        const username = user.name;
        const id = user.id;
        try {
            // 서버로 요청을 보냅니다.
            const response = await axios.post(
              "http://youngtour.dothome.co.kr/repl/Course-ripple-insert.php",
              {
                coursename:props.item,
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
              document.querySelector(".c_form textarea").value = "";
              props.onCommentLoad();
            } else {
              console.error("Insert Failed");
            }
          } catch (error) {
            console.error("Insert Failed:", error);
          }
    }
    return(
    
        <div className="c_form">
            <textarea></textarea>
            <button onClick={ClickHandler}>제출</button>
        </div>
    )
}

export default CourseReplForm;