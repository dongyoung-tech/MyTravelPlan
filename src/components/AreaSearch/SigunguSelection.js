import React from "react";

const SigunguSelection = (props) =>{

    return(
        <div className='select-sub-con'>
        <h5>시군구</h5>
        <select onChange={(e) => props.handleCatChange2(e.target.value)} value={props.cat2}>
          {props.optionData.map((option,idx) => (
            <option value={option.code} key={idx}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    )
}

export default SigunguSelection