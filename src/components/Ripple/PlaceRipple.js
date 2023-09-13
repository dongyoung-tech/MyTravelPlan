import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PlaceRippleList from "./PlaceRippleList";
import PlaceRippleForm from "./PlaceRippleForm";

const PlaceRipple = () => {
  let num;
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [contentid, setContent] = useState(1);

  const fetchComments = () => {
    alert('repl-load');
    setIsLoading(true);
    // param이 변경될 때마다 apiEndpoint를 생성
    const apiEndpoint = `http://youngtour.dothome.co.kr/repl/place-repl-list.php?parent=${num}`;
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        const elem = data;
        const newComment = { /* 새로운 댓글 데이터 */ };
        setData((prevData) => [...prevData, newComment]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); // 데이터 로딩 실패
      });
  };

  useEffect(() => {
    // URL 쿼리 파라미터 가져오기
    const searchParams = new URLSearchParams(location.search);
    num = searchParams.get("contentid");

    // name 변수에 파라미터 값 1이 저장됩니다.
    console.log(num);
    setContent(num);
  }, [location.search]);

  const [Data, setData] = useState([]);
  useEffect(() => {
    fetchComments(); // 댓글 목록을 처음에도 불러옴
  }, [num]);

  return (
    <div>
      <PlaceRippleForm
        key="input"
        item={contentid}
        onCommentSubmit={fetchComments} // 댓글 제출 후 불러오기 함수 전달
      />
      <div>
        {!isLoading &&
          Data.map((el) => {
            return <PlaceRippleList key="ripple" item={el} />;
          })}
      </div>
    </div>
  );
};

export default PlaceRipple;
