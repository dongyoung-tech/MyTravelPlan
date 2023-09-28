import React ,{useState,useEffect} from "react";
import axios from "axios";
const CartButton = (props) =>{
    const user = JSON.parse(sessionStorage.getItem("userData")); 
    const [cartData , setData] = useState([]);
    const placeObject = {
        title:props.item.title,
        address:props.item.addr1,
        contentid:props.item.contentid,
        imgurl:props.item.firstimage
    }
    
    const cartList = async () => {
        try {
          const response = await axios.post('http://youngtour.dothome.co.kr/cart/cart_list.php', {
            userid:user.id,
          });
          if (response.data !== "no data") {
            const parsedData = response.data;

            setData(JSON.parse(parsedData[0].info));
          } else if (response.data === "no data") {
            console.log('장바구니 아직 안만듬');
          }
        } catch (error) {
          console.error('Failed:', error);
        }
      }
    const cartInsert = async() =>{
      const info = [...cartData, placeObject];
        let url='';
        console.log("저장된",cartData);
        if(cartData.length ==0) url = 'http://youngtour.dothome.co.kr/cart/cart_list_insert.php';
        else url = 'http://youngtour.dothome.co.kr/cart/cart_list_update.php';
        try {
            // 서버로 로그인 요청을 보냅니다.
            const response = await axios.post(url, {
              userid:user.id,
              info:JSON.stringify(info)
            });
            if(response.data == "저장하였습니다!") alert('장바구니에 저장 하였습니다.');
            else if(response.data == "수정 하였습니다!") alert('장바구니에 저장 하였습니다.');
            else  alert('장바구니에 저장 실패 하였습니다.');
          } catch (error) {
            console.error('Failed:', error);
          }
    }
    
    useEffect(()=>{
        cartList();
    },[]);
    const clickHandler = () =>{
      const isItemInCart = cartData.some(item => item.title === placeObject.title);
      if (isItemInCart) {
        alert('이미 장바구니에 있는 아이템입니다.');
      } else {
        // 중복되지 않는 경우에만 추가
        cartInsert();
      }
    }
    return(
        <>
        {cartData && user &&  <button className="cart-button" onClick={clickHandler}>찜하기</button>}
        </>
    )
}

export default CartButton;