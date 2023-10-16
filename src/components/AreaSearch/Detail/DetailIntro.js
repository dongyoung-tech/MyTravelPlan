import React ,{useState,useEffect}from "react";
import DetailIntroItem from "./DetailIntroItem";
import axios
 from "axios";
const DetailIntro = (props) =>{
    const [data , setData] = useState();
    const [isLoading,setIsLoading] = useState(true);
    const apiEndpoint = 'http://youngtour.dothome.co.kr/apiServer/DetailInfo.php';
    const getData = async() =>{
      try {
        // 서버로 로그인 요청을 보냅니다.
        const response = await axios.post(apiEndpoint, {
          contentid: props.item[0],
          category: props.item[1],
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
      if(data){
        return(
            <div className="sub-con">
                <h3 className="d_sub_title">정보</h3>
                <ul className="Intro-list">
                {!isLoading && data.map((item,idx)=>{
                    return <DetailIntroItem item={item} key ={idx} cat={props.item[1]}/>
                })}
                </ul>
            </div>
          )
      }
}

export default DetailIntro;