import React ,{useState,useEffect}from "react";
import ImageItem from "./ImageItem";
const DetailImage =(props)=>{
const [isLoading, setIsLoading] = useState(true);
const [Data, setData] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        const apiKey = "yX8wx5nzKb42wtBThegyX7gb6G3xUCPCMfbzNYF1Gf0p0nSUn9ZeynPzokq9GNLvrFLmqQVbU9%2FQz9LckJpQLw%3D%3D";      
        const apiEndpoint = `https://apis.data.go.kr/B551011/KorService1/detailImage1?
serviceKey=${apiKey}&MobileOS=ETC&MobileApp=AppTest&_type=json&imageYN=Y&subImageYN=Y&numOfRows=10&pageNo=1&contentId=${props.item.contentid}`;
        fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            const elem = data.response.body.items.item;
            setData(elem);
            if(elem == undefined) setIsLoading(true);
            else setIsLoading(false);
        })
        .catch(error => {
            console.log(error);
            setIsLoading(false); // 데이터 로딩 실패
        });
  }, []);
  let Ilength;
  if(!isLoading) Ilength = (Data.length>4)?4:Data.length;
    return (
        <>
            {!isLoading && 
            <div className="detail-image-con">
                {Data.slice(0,Ilength).map(item=>{ 
                    return  <ImageItem item ={item}/>
                })}
            </div>
            }
        </>
    )
}

export default DetailImage;