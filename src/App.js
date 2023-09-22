import React from "react";
import RecommendPlace from "./components/Main/RecommendPlace/RecommendPlace";
import Area from "./components/AreaSearch/Area";
import CourseList from "./components/Course/CousreList";
import FreeBoard from "./components/FreeBoard/FreeBoard";
import FilterList from './components/Header/FilterList';
import Login from './components/Login/Login';
import './components/Main/main.css';
import KeyWord from "./components/Keyword/KeyWord";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from "./components/UserPage/User";
const App = () => {
    return (
      <>
      <Router basename="/">
      <FilterList/>
        <Routes>
          <Route key ="Main" path="/" element={<RecommendPlace />} />
          <Route key ="Area"   path="/Area/*" element={<Area />} />
          <Route key ="keyword"   path="/keyword/*" element={<KeyWord />} />
          <Route key ="Course"  path="/Course/*" element={<CourseList />} />
          <Route key ="FreeBoard" path="/FreeBoard/*" element={<FreeBoard />} />
          <Route key ="Login" path="/Login/*" element={<Login />} />
          <Route key ="User" path="/User/*" element={<User />} />
        </Routes>
      </Router>
      </>
    );
  };
export default App;
