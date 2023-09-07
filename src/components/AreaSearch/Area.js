import React  from "react";
import AreaSelect from './AreaSelect.js';
import AreaDetail from "./AreaDetail.js";
import { Routes, Route } from 'react-router-dom';
const Area = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<AreaSelect/>} />
                <Route path="/AreaDetail" element={<AreaDetail/>}/>
            </Routes>
        </div>
    )
}

export default Area;