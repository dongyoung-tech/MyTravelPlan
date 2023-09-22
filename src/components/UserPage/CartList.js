import React, { useEffect, useState } from "react";
import axios from "axios";
import CartItem from "./CartItem";
const CartList = (props) => {
  const [isLoad, setLoad] = useState(true);
  const [Data, setData] = useState([]);

  useEffect(() => {
    getCart(props.item);
  }, [props]);

  const getCart = async (userid) => {
    try {
      // 서버로 로그인 요청을 보냅니다.
      const response = await axios.post(
        "http://youngtour.dothome.co.kr/member/cart_list.php",
        {
          userid: userid,
        }
      );
      if (response.data !== "Failed") {
        console.log(JSON.parse(response.data[0].info));
        setData(JSON.parse(response.data[0].info));
        setLoad(false);
      }
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  if(Data == undefined){
    return <b>찜한 여행지가 없습니다.</b>
  }
  else{
    return (
      <div>
          {!isLoad && Data.map((item,idx)=>{
              return <CartItem item={item} key={idx}/>
          })}
      </div>
    );
  }
};

export default CartList;
