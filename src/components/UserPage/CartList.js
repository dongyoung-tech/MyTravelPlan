import React, { useEffect, useState } from "react";
import axios from "axios";
import CartItem from "./CartItem";
const CartList = (props) => {
  const [isLoad, setLoad] = useState(true);
  const [Data, setData] = useState([]);

  useEffect(() => {
    getCart(props.item);
  }, [props]);
  const user = JSON.parse(sessionStorage.getItem("userData"));

  const getCart = async (userid) => {
    try {
      // 서버로 로그인 요청을 보냅니다.
      const response = await axios.post(
        "http://youngtour.dothome.co.kr/member/cart_list.php",
        {
          userid: userid,
        }
      );
      if (response.data !== "no data") {
        setData(JSON.parse(response.data[0].info));
        setLoad(false);
      }
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  const updateData = async (title) =>{
    const updatedItems = Data.filter(item => item.title !== title);
    const url = "http://youngtour.dothome.co.kr/cart/cart_list_update.php";
    try {
      const response = await axios.post(url, {
        userid: props.item,
        info: JSON.stringify(updatedItems),
      });

      if (response.data === "저장하였습니다!" || response.data === "수정 하였습니다!") {
        alert("수정하였습니다.");
      } else {
        alert("수정 실패하였습니다.");
      }
    } catch (error) {
      console.error("Failed:", error);
    }
    setData(updatedItems);
  }

  if(Data.length==0){
    return <b>찜한 여행지가 없습니다.</b>
  }
  else{
    return (
      <div className="cart-list">
          {!isLoad && Data.map((item,idx)=>{
                return <CartItem item={item} key={idx} updateData = {updateData} user={user}/>
            })}
      </div>
    );
  }
};

export default CartList;
