import React from "react";

const CategorySelection = (props) =>{

    return(
        <div className='select-sub-con'>
        <h5>관광지타입</h5>
          <select onChange={(e)=>props.handleCatChange3(e.target.value)} value={props.cat3}>
            {props.contentType.map(item=>{
              return <option value={item[1]}>{item[0]}</option>
            })}
          </select>
        </div>
    )
}
export default CategorySelection;