import React from 'react';
import CourseCon from './CourseCon';
import CourseView from './CourseView';
import { Routes, Route} from 'react-router-dom';
import MakeCourse from './MakeCourse';

const CourseList = () => {

  return (
    <>
      <div className='Area-photo'><p>여행 코스</p></div>
        <Routes>
          <Route path="/" element={<CourseCon />} />
          <Route path="/CourseView" element={<CourseView />} />
          <Route path="/MakeCourse" element={<MakeCourse />} />
        </Routes> 
    </>
  );
}

export default CourseList;
