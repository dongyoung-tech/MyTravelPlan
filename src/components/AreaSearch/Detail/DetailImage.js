import React ,{useState,useEffect}from "react";
import ImageItem from "../ImageItem";
import DetailImageView from "./DetailImageView";  
import axios from "axios";
const DetailImage =(props)=>{  
const [isLoading, setIsLoading] = useState(true);
const [Data, setData] = useState([]);
const apiEndpoint = 'http://youngtour.dothome.co.kr/apiServer/DetailImage.php';
const getData = async() =>{
    try {
      // 서버로 로그인 요청을 보냅니다.
      const response = await axios.post(apiEndpoint, {
        contentid: props.item.contentid,
      }); 
      if (response.status === 200) {
          setData(response.data.response.body.items.item);
          setIsLoading(false);
      } else {
        console.log('Request failed with status:', response.status);
      }
  
    } catch (error) {
      console.error('Login Failed:', error);
    }
  }
useEffect(() => {
  getData();
}, [props.item]);

  let Ilength;
  if(Data &&  Data.length>0) Ilength = (Data.length>4)?4:Data.length;
    return (
        <>
            {Data && 
            <div className="detail-image-con">
                {Data.slice(0,Ilength).map((item,idx)=>{ 
                    return  <ImageItem item ={item} index={idx} key={idx}/>
                })}
            </div>
            }
            <DetailImageView item={Data} key ='view'/>
        </>
    )
}

export default DetailImage;