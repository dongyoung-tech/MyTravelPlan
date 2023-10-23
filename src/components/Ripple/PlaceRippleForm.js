import React, { useState } from "react";
import axios from "axios";
import './Ripple.css';
import Ratecon from "./Ratecon";
const PlaceRippleForm = (props) => {
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const ClickHandler = async (event) => {
    event.preventDefault();
    if(!user){
      alert('로그인 후 이용해주세요!');
      return;
    }
    if(document.querySelector('.repl-input').value.trim().length==0){
      alert('한 글자 이상 작성해주세요');
      return;
    } 
    const username = user.name;
    const id = user.id;
    const profile = user.file_copied || 'profile.png';
    const checkedInput =  document.querySelector(`input[name="rate"]:checked`);
    try {
      const content = document.querySelector(".repl-input").value;
      let InputValue = (checkedInput == null)?0:checkedInput.value;
      let rate = InputValue;
      // 서버로 요청을 보냅니다.
      const response = await axios.post(
        "http://youngtour.dothome.co.kr/repl/place-repl-insert.php",
        {
          contentid: props.item,
          id,
          content,
          username,
          rate,
          profile
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data === "success") {
        // 댓글 제출 성공 시, 부모 컴포넌트로 콜백 함수 호출
        props.onCommentSubmit();
        // 입력 필드 초기화
        document.querySelector(".repl-input").value = "";
      } else {
        console.error("Insert Failed");
      }
    } catch (error) {
      console.error("Insert Failed:", error);
    }
  };

  return (
    <div className="p_repl_form">
        <Ratecon/>
        <textarea className="repl-input"></textarea>
        <button onClick={ClickHandler}>제출</button>
    </div>
  );
};

export default PlaceRippleForm;
