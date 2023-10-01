import React  from "react";
import AreaSelect from './AreaSelect.js';
import AreaDetail from "./AreaDetail.js";
import { Routes, Route } from 'react-router-dom';
import Footer from '../Main/Footer'
const Area = () =>{
    return(
        <div className="Area_main_con">
            <Routes>
                <Route path="/" element={<AreaSelect/>} />
                <Route path="/AreaDetail" element={<AreaDetail/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default Area;