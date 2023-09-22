import React from "react";
import { useSelector } from "react-redux";
import axios from 'axios';

const CourseInput = () => {
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const courseData = useSelector((state) => state).items;

    const InputHandler = async (event) => {
        event.preventDefault();
        const username = user.name;
        const coursename = document.querySelector('.coursename').value;
        const startDate = document.querySelector('.course-start-date').value;
        const lastDate = document.querySelector('.course-last-date').value;
        if(coursename.trim().length==0){
            alert("한글자 이상 입력해주세요!");
            return;
        }
        if(!startDate || !lastDate){
            alert("여행 날짜를 선택 해 주세요!");
            return;
        }
        if(courseData.length ==0){
            alert("여행지는 한곳 이상 선택해주세요");
            return;
        } 
        // courseData 객체 내부의 함수를 제거한 복사본 생성
        console.log(username,coursename,courseData,startDate,lastDate);
        try {
            // 서버로 요청을 보냅니다.
            const response = await axios.post('http://youngtour.dothome.co.kr/course/course-list-insert.php', {
                username:username,
                coursename:coursename,
                startDate:startDate,
                lastDate:lastDate,
                courseData: JSON.stringify(courseData), // 정제된 데이터를 보냅니다.
                headers: {
                    'Content-Type': 'application/json', // Content-Type 설정
                },
            });
            console.log(response.data);
            if (response.data === "저장하였습니다!") {
                window.location.href = '/Course';
            }
        } catch (error) {
            console.error('Insert Failed:', error);
        }
        
    }

    return (
        <div className="c_save_form">
            <input className='coursename' type='text' name='coursename' placeholder="코스 이름을 적어주세요"></input>
            <input className="course-start-date" type='date' placeholder="시작 일"></input>
            <input className="course-last-date" type='date'></input>
            <button onClick={InputHandler}>저장</button>
        </div>
    )
}

export default CourseInput;
