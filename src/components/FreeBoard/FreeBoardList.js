import React,{useState,useEffect} from "react";
import FreeBoardItem from "./FreeBoardItem";

const FreeBardList = () =>{
    const [Data,setData] = useState([]);
    const apiEndpoint = 'http://youngtour.dothome.co.kr/freeboard/freeboard-list.php';
    useEffect(() => {
        fetch(apiEndpoint)
          .then(response => response.json())
          .then(data => {
            console.log("fetch")
            const elem = data;
            setData(elem);
          })
          .catch(error => {
            console.log(error);
          }
          );
      },
       []); 
    return(
        <div>
            {Data.map((item,idx)=>{
              return <FreeBoardItem key={idx} item={item}/> 
            })}
        </div>
    )
}

export default FreeBardList;