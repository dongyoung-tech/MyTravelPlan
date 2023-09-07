import React,{useState,useEffect} from "react";
import CourseItem from "./CourseItem";

const CourseCon = () =>{
    const [Data,setData] = useState([]);
    const apiEndpoint = 'http://youngtour.dothome.co.kr/course/course-info-list.php';
    useEffect(() => {
        fetch(apiEndpoint)
          .then(response => response.json())
          .then(data => {
            console.log("fetch");
            
            const elem = data;
            setData(elem);
          })
          .catch(error => {
            console.log(error);
          }
          );
      },
       []); // 빈 배열로 설정하여 컴포넌트 마운트 시에만 호출되도록 함
    return(            
        <div>
           {Data.map((item,index)=> {
          return <CourseItem key ={index} item={item}/>
        })}
        </div>
    )
}

export  default CourseCon; 