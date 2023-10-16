import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PlaceDetail from "./PlaceDetail";
import Loading from "../../UI/Loading";
import axios from "axios";

const AreaDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Data, setData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const param = searchParams.get('contentid');
  const apiEndpoint = 'http://youngtour.dothome.co.kr/apiServer/DetailCommon.php';
  const getData = async() =>{
    try {
      // 서버로 로그인 요청을 보냅니다.
      const response = await axios.post(apiEndpoint, {
        contentid: param
      }); 
      if (response.status === 200) {
          setData(response.data.response.body.items.item);
          console.log(response.data.response.body.items.item);
          document.querySelector('.loading-con').classList.add('hide');
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
}, [param]);

  return (
    <div className="Area_Detail_con">
      <Loading/>
      {!isLoading && <PlaceDetail key="map" item={Data} />}
    </div>
  );
}

export default AreaDetail;
