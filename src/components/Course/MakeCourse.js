import React from "react";
import MakeMap from "./MakeMap";
import SelectList from "./SelectList";
import CourseInput from "./CourseInput";
const MakeCourse = () =>{

    return(
        <div className="Map-container">
            <MakeMap/>
            <SelectList/>
            <CourseInput></CourseInput>
        </div>
    )
}

export default MakeCourse;