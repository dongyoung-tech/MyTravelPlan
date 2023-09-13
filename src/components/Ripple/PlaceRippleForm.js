import React, { useState } from "react";
import axios from "axios";

const PlaceRippleForm = (props) => {
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const ClickHandler = async (event) => {
    event.preventDefault();
    const username = user.name;
    const id = user.id;

    try {
      const content = document.querySelector(".repl-input").value;
      // 서버로 요청을 보냅니다.
      const response = await axios.post(
        "http://youngtour.dothome.co.kr/repl/place-repl-insert.php",
        {
          contentid: props.item,
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
    <form>
      <textarea className="repl-input"></textarea>
      <button onClick={ClickHandler}>제출</button>
    </form>
  );
};

export default PlaceRippleForm;
