import React ,{useState,useEffect}from "react";
import DetailIntroItem from "./DetailIntroItem";

const DetailIntro = (props) =>{
    const [data , setData] = useState();
    const [isLoading,setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        const apiKey = "yX8wx5nzKb42wtBThegyX7gb6G3xUCPCMfbzNYF1Gf0p0nSUn9ZeynPzokq9GNLvrFLmqQVbU9%2FQz9LckJpQLw%3D%3D";      
        const apiEndpoint = `https://apis.data.go.kr/B551011/KorService1/detailInfo1?serviceKey=${apiKey}&MobileOS=ETC&MobileApp=AppTest&_type=json&numOfRows=20&pageNo=1&contentId=${props.item[0]}&contentTypeId=${props.item[1]}`;
        fetch(apiEndpoint)
          .then(response => response.json())
          .then(data => {
            const elem = data.response.body.items.item;
            setData(elem);
            console.log(elem);
            if(elem) setIsLoading(false);
          })
          .catch(error => {
            console.log(error);
            setIsLoading(false); // 데이터 로딩 실패
          });
      }, []);
      if(data){
        return(
            <div className="sub-con">
                <h3 className="d_sub_title">정보</h3>
                <ul className="Intro-list">
                {!isLoading && data.map((item,idx)=>{
                    return <DetailIntroItem item={item} key ={idx}/>
                })}
                </ul>
            </div>
          )
      }
}

export default DetailIntro;