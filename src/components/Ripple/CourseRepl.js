import React,{useState,useEffect} from "react";
import CourseReplItem from "./CourseRepItem";
import CourseReplForm from "./CourseRippleForm";

const CouseRepl = (props) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [Data, setData] = useState([]); // 이곳에서 Data 상태를 정의
    const fetchComments = () => {
      setIsLoading(true);
      // param이 변경될 때마다 apiEndpoint를 생성
      const apiEndpoint = `http://youngtour.dothome.co.kr/repl/Course-repl-list.php?parent=${props.item.name}`;
      fetch(apiEndpoint)
        .then((response) => response.json())
        .then((data) => {
          setData(data); // Data 상태를 업데이트
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false); // 데이터 로딩 실패
        });
    };
    useEffect(() => {
        fetchComments(); // 댓글 목록을 처음에도 불러옴
      }, [props.item]);
    
    return(
        <>
            <div className="c_repl_con">
            <p class="r_title">댓글</p>
                {!isLoading && Data.map(item=>{
                    return <CourseReplItem items={item} onCommentLoad={fetchComments}/>
                })}      
            </div>
            {!isLoading && <CourseReplForm  item={props.item.name} onCommentLoad={fetchComments}/>} 
        </>
    );
}
export default CouseRepl;