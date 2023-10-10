import React, { useState, useEffect } from "react";
import axios from "axios";

const CartButton = (props) => {
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const [cartData, setCartData] = useState([]);
  const [isItemInCart, setIsItemInCart] = useState(false);

  const placeObject = {
    title: props.item.title,
    address: props.item.addr1,
    contentid: props.item.contentid,
    imgurl: props.item.firstimage,
  };

  const cartList = async () => {
    try {
      const response = await axios.post(
        "http://youngtour.dothome.co.kr/cart/cart_list.php",
        {
          userid: user.id,
        }
      );
      if (response.data !== "no data") {
        const parsedData = response.data;
        setCartData(JSON.parse(parsedData[0].info));
      } else {
        console.log("장바구니 아직 안만들어짐");
      }
    } catch (error) {
      console.error("Failed:", error);
    }
  };

  const cartInsert = async () => {
    const info = [...cartData, placeObject];
    let url = "";
    if(isItemInCart) {
      alert('이미 찜한 여행지 입니다.');
      return
    }
    if (cartData.length === 0)
      url = "http://youngtour.dothome.co.kr/cart/cart_list_insert.php";
    else url = "http://youngtour.dothome.co.kr/cart/cart_list_update.php";

    try {
      const response = await axios.post(url, {
        userid: user.id,
        info: JSON.stringify(info),
      });

      if (response.data === "저장하였습니다!" || response.data === "수정 하였습니다!") {
        alert("장바구니에 저장하였습니다.");
        setIsItemInCart(true); // 아이템이 장바구니에 있음을 표시
      } else {
        alert("장바구니에 저장 실패하였습니다.");
      }
    } catch (error) {
      console.error("Failed:", error);
    }
  };

  useEffect(() => {
    cartList();
  }, [isItemInCart]);

  useEffect(() => {
    // 컴포넌트가 렌더링될 때마다 아이템이 장바구니에 있는지 확인
    setIsItemInCart(cartData.some((item) => item.title === placeObject.title));
  }, [cartData, placeObject]);

  return (
    <>
      {cartData && user && (
        <button className="cart-button" onClick={cartInsert}>
          {isItemInCart ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </button>
      )}
    </>
  );
};

export default CartButton;
