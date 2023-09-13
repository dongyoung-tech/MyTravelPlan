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
        // courseData 객체 내부의 함수를 제거한 복사본 생성
        console.log(username,coursename,courseData);
        try {
            // 서버로 요청을 보냅니다.
            const response = await axios.post('http://youngtour.dothome.co.kr/course/course-list-insert.php', {
                username,
                coursename,
                courseData:JSON.stringify(courseData), // 정제된 데이터를 보냅니다.
                headers: {
                    'Content-Type': 'application/json', // Content-Type 설정
                  },
            });

            if (response.data === "저장하였습니다!") {
                window.location.href = '/Course';
            }
        } catch (error) {
            console.error('Insert Failed:', error);
        }
    }

    return (
        <form>
            <input className='coursename' type='text' name='coursename'></input>
            <button onClick={InputHandler}>저장하기</button>
        </form>
    )
}

export default CourseInput;
