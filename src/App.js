import React from "react";
import RecommendPlace from "./components/Main/RecommendPlace/RecommendPlace";
import Area from "./components/AreaSearch/Area";
import CourseList from "./components/Course/CousreList";
import FreeBoard from "./components/FreeBoard/FreeBoard";
import FilterList from './components/Header/FilterList';
import './components/Main/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
      <>
      <Router basename="/">
      <FilterList/>
        <Routes>
          <Route key ="Main" path="/" element={<RecommendPlace />} />
          <Route key ="Area"   path="/Area/*" element={<Area />} />
          <Route key ="Course"  path="/Course/*" element={<CourseList />} />
          <Route key ="FreeBoard" path="/FreeBoard/*" element={<FreeBoard />} />
        </Routes>
      </Router>
      </>
    );
  };
export default App;
