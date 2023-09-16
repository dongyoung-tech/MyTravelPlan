import React ,{useState} from "react";
import MakeMap from "./MakeMap";
import SelectList from "./SelectList";
import CourseInput from "./CourseInput";
const MakeCourse = () =>{
    const [keyword,setKeyword] = useState('서울');
    const keyWordHandler = ()=>{
        setKeyword(document.querySelector('.course_search_form input').value);
    }
    return(
        <div className="Map-container">
            <MakeMap/>
            <div className="course_container">
                <div className="course_search_form">
                    <input placeholder="키워드를 입력해주세요"></input>
                    <button onClick={keyWordHandler}><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <SelectList keyword={keyword}/>
                <CourseInput/>
            </div>
        </div>
    )
}

export default MakeCourse;