import React from 'react';
import CourseCon from './CourseCon';
import CourseView from './CourseView';
import { Routes, Route } from 'react-router-dom';

const CourseList = () => {
  return (
    <div className='list-container'>
      <h2>여행코스 목록</h2>
      <Routes>
        <Route path="/" element={<CourseCon />} />
        <Route path="/CourseView" element={<CourseView />} />
      </Routes>
    </div>
  );
}

export default CourseList;
