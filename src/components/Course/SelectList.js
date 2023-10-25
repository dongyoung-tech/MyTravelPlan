import React, { useState, useEffect } from "react";
import Pagination from "../UI/Pagination";
import axios from "axios";
const SelectList = (props) => {
  const [Data, setData] = useState([]);
  const apiEndpoint = 'http://youngtour.dothome.co.kr/apiServer/searchKeyword.php';
  const getData = async() =>{
    document.querySelector('.loading-con').classList.remove('hide');
    try {
      // 서버로 로그인 요청을 보냅니다.
      const response = await axios.post(apiEndpoint, {
        keyword: props.keyword
      });
      
      if (response.status === 200) {
          setData(response.data.response.body.items.item);
          document.querySelector('.loading-con').classList.add('hide')
      } else {
        console.log('Request failed with status:', response.status);
      }
  
    } catch (error) {
      console.error('Login Failed:', error);
    }
  }
  useEffect(() => {
  getData();
  }, [props.keyword]);
    return (
      <>
        <Pagination data={Data}/>
      </>
     );
  };
  



export default SelectList;
