import React from "react";
import Card from "./Card";

const CardContainer = (props) =>{

    return(
        <div className="Card-Container">
        {props.item.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    )
}
export default CardContainer;