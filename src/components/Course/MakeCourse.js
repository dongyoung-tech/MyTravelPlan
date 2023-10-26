import React ,{useState} from "react";
import MakeMap from "./MakeMap";
import SelectList from "./SelectList";
import CourseInput from "./CourseInput";
import { useLocation ,useNavigate } from "react-router-dom";
const MakeCourse = () =>{
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [keyword,setKeyword] = useState(searchParams.get('keyword') || '서울');
    const Navigate = useNavigate();
    const keyWordHandler = (event)=>{
        event.preventDefault();
        const searchkey = document.querySelector('.search_input').value;
        if(searchkey.trim().length==0){
            alert('한 글자 이상 입력해주세요!');
            return;
        }
        setKeyword(searchkey);
        Navigate(`/Course/MakeCourse?keyword=${searchkey}`);
    }
    return(
        <>
        <div className="Map-container" id="Make">
        <div className="course-topic_m"><h2>여행코스 만들기</h2></div>
                <div className="Map-view">
                   <MakeMap/>
               </div>
                <div className="select_con">
                    <form className="course_search_form" action="/Course/MakeCourse" onSubmit={keyWordHandler}>
                        <input placeholder="키워드를 입력해주세요" name="keyword" className="search_input"></input>
                        <button onClick={keyWordHandler}><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                    <SelectList keyword={keyword}/>
                </div>
                <CourseInput/>      
        </div>
        </>
    )
}

export default MakeCourse;