import React , {useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import PlaceDetail from "./PlaceDetail";

const AreaDetail = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const [Data, setData] = useState([]);
    let num;
    const [pram , setParam] = useState();
    const location = useLocation();
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        num = searchParams.get('contentid');
        setParam(num);
      }, [location.search]);


useEffect(() => {
    setIsLoading(true);
    const apiKey = "yX8wx5nzKb42wtBThegyX7gb6G3xUCPCMfbzNYF1Gf0p0nSUn9ZeynPzokq9GNLvrFLmqQVbU9%2FQz9LckJpQLw%3D%3D";      
    const apiEndpoint = `http://apis.data.go.kr/B551011/KorService1/detailCommon1?
serviceKey=${apiKey}&MobileOS=ETC&MobileApp=AppTest&_type=json&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=200&pageNo=1&contentId=${num}`;

    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        const elem = data.response.body.items.item;
        setData(elem);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false); // 데이터 로딩 실패
      });
  }, [num]);

    return(
    <>
       {!isLoading && <PlaceDetail key="map" item={Data} />}
    </>
    )
}
export default AreaDetail;