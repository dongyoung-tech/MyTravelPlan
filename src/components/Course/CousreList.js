import React from 'react';
import CourseCon from './CourseCon';
import CourseView from './CourseView';
import { Routes, Route,useNavigate } from 'react-router-dom';
import MakeCourse from './MakeCourse';
import Footer from '../Main/Footer';
const CourseList = () => {
  const navigate = useNavigate();
  const ClickHandler = () =>{
      navigate('MakeCourse');
  }
  const user = JSON.parse(sessionStorage.getItem('userData'));
  return (
    <>
      <div className='Area-photo'><p>여행 코스</p></div>
      <div className='list-container'>
        <h2>여행코스 목록</h2>
        <Routes>
          <Route path="/" element={<CourseCon />} />
          <Route path="/CourseView" element={<CourseView />} />
          <Route path="/MakeCourse" element={<MakeCourse />} />
        </Routes> 
        {user&& <button onClick={ClickHandler}>코스 만들기</button>}
      </div>
      <Footer/>
    </>
  );
}

export default CourseList;
