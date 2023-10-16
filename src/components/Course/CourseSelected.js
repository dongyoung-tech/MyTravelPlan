import React from "react";
import CourseRepl from "../Ripple/CourseRepl";
import SelectedItem from "./SelectedItem";
const CourseSelected = (props) =>{

    return(
        <div className="c_info_con">
        <div className="c_info_p_list">
          {props.Data.info.map((item, idx) => (
            <SelectedItem idx={idx} item={item} key={idx} />
          ))}
        </div>
        <CourseRepl item={props.Data} />
      </div>
    )
}
export default CourseSelected;