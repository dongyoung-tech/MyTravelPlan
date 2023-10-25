import React ,{useState,useEffect}from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const FreeBoardModify = () =>{
    const [Maintopic,setTopic] = useState('');
    const [MainTxt,setTxt] = useState('');
    const location = useLocation();
    const [Data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let num;
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        num = searchParams.get('num');
    }, [location.search]);

    useEffect(() => {
        setIsLoading(true);
        // param이 변경될 때마다 apiEndpoint를 생성
        const apiEndpoint = `http://youngtour.dothome.co.kr/freeboard/freeboard-list.php?num=${num}`;
        
        fetch(apiEndpoint)
          .then(response => response.json())
          .then(data => {
            const elem = data;
            setData(elem);
            setIsLoading(false);
          })
          .catch(error => {
            console.log(error);
            setIsLoading(false); // 데이터 로딩 실패
          });
      }, [num]);

    const TopicHandler = (event) =>{
        setTopic(event.target.value);
    }
    const TextHandler = (event) =>{
        setTxt(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(document.querySelector(".f_title_input").value.trim() ==0){
          alert("제목을 작성해주세요!");
          return;
        }
        if(document.querySelector(".f_content_area").value.trim() ==0){
          alert("본문을 작성해주세요!");
          return;
        }
        try {
          // 서버로 로그인 요청을 보냅니다.
          const response = await axios.post('http://youngtour.dothome.co.kr/freeboard/freeboard-update.php', {
            num: Data[0].num,
            content:MainTxt,
            topic:Maintopic
          });
          if(response.data != "Failed" && !isLoading) window.location.href='/FreeBoard';
        } catch (error) {
          console.error('Update Failed:', error);
        }
      };
    if(!isLoading){
        return(
            <div style={{padding:"10px"}}>
                <h2>수정하기</h2>
                <input className ='f_title_input'placeholder={`이전 제목 : ${Data[0].topic}`} onChange={TopicHandler}></input>
                <textarea className="f_content_area" placeholder="글내용" onChange={TextHandler}>{Data[0].content}</textarea>
                <button  className='f_button'onClick={handleSubmit}>글쓰기</button>
            </div>
        )
    }
}

export default FreeBoardModify;