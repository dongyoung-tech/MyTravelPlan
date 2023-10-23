import React,{useEffect,useState} from "react";
import CourseItem from "./CourseItem";

const CourseList = (props) =>{
    const [data,setData] = useState();
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{

        const url = `http://youngtour.dothome.co.kr/course/course-info-list.php?user=${props.item}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
          const elem = data;
          setData(elem);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false); // 데이터 로딩 실패
        });
    },[props.item]);
   if(data==undefined){
        return(
            <b>만든 여행코스가 없습니다</b>
        )
   }
   else{
    return(
        <>
        {!isLoading && data.map((item,idx)=>{
            return <CourseItem item ={item} key ={idx}/>
        })
        }
        </>
    )
   }
}

export default CourseList;