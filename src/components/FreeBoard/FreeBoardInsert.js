import React ,{useState} from "react";
import axios from 'axios';

const FreeBoardInsert = () =>{
    const [Maintopic,setTopic] = useState('');
    const [MainTxt,setTxt] = useState('');

    const TopicHandler = (event) =>{
        setTopic(event.target.value);
    }
    const TextHandler = (event) =>{
        setTxt(event.target.value);
    }
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const username = user.name;
    const userid = user.id;
    const content = MainTxt;
    const  topic = Maintopic;
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          // 서버로 로그인 요청을 보냅니다.
          const response = await axios.post('http://youngtour.dothome.co.kr/freeboard/freeboard-insert.php', {
            username,
            userid,
            content,
            topic
          });
          if(response.data != "Failed") window.location.href='/FreeBoard';
        } catch (error) {
          console.error('Login Failed:', error);
        }
      };
    
    return(
        <div style={{marginTop:"200px"}}>
            <h2>글쓰기</h2>
             <input placeholder="제목" onChange={TopicHandler}></input>
            <textarea placeholder="글내용" onChange={TextHandler}></textarea>
            <button onClick={handleSubmit}>글쓰기</button>
        </div>
    )
}

export default FreeBoardInsert;