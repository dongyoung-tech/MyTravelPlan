import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PlaceRippleList from "./PlaceRippleList";
import PlaceRippleForm from "./PlaceRippleForm";

const PlaceRipple = () => {
  let num;
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [contentid, setContent] = useState(1);
  const [Data, setData] = useState([]); // 이곳에서 Data 상태를 정의

  const fetchComments = () => {
    getUrl();
    setIsLoading(true);
    console.log(num);
    // param이 변경될 때마다 apiEndpoint를 생성
    const apiEndpoint = `http://youngtour.dothome.co.kr/repl/place-repl-list.php?parent=${num}`;
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Data 상태를 업데이트
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); // 데이터 로딩 실패
      });
  };

  const getUrl = () => {
    // URL 쿼리 파라미터 가져오기
    const searchParams = new URLSearchParams(location.search);
    num = searchParams.get("contentid");
    // name 변수에 파라미터 값 1이 저장됩니다.
    setContent(num);
  }

  useEffect(() => {
    fetchComments(); // 댓글 목록을 처음에도 불러옴
  }, [num]);

  return (
    <div className="repl-container">
      <p className="p_r_title">댓글</p>
      <div>
        {!isLoading &&
          Data.map((el, index) => {
            return <PlaceRippleList key={index} item={el} commentLoad={fetchComments}/>;
          })}
      </div>
      <PlaceRippleForm
        key="input"
        item={contentid}
        onCommentSubmit={fetchComments} // 댓글 제출 후 불러오기 함수 전달
      />
    </div>
  );
};

export default PlaceRipple;
