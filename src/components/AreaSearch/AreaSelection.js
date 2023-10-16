import React from "react";

const AreaSelection = (props) =>{

return(
    <div className='select-sub-con'>
    <h5>지역</h5>
        <select onChange={(e) => props.handleCatChange(e.target.value)} value={props.cat}>
            {props.area.map((item, index) => (
            <option value={item} key={item}>
                {props.areaTxt[index]}
            </option> ))}
        </select>
    </div>
)
}

export default AreaSelection;