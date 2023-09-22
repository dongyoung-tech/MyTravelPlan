import React ,{useState}from "react";

const FreeBoardModify = () =>{
    const [Maintopic,setTopic] = useState('');
    const [MainTxt,setTxt] = useState('');
    const TopicHandler = (event) =>{
        setTopic(event.target.value);
    }
    const TextHandler = (event) =>{
        setTxt(event.target.value);
    }

    const handleSubmit = () =>{

    }
    return(
        <div style={{marginTop:"50px"}}>
            <h2>수정하기</h2>
            <input className ='f_title_input'placeholder="제목" onChange={TopicHandler}></input>
            <textarea className="f_content_area" placeholder="글내용" onChange={TextHandler}></textarea>
            <button  className='f_button'onClick={handleSubmit}>글쓰기</button>
        </div>
    )
}

export default FreeBoardModify;