import React , {useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import KeyWordList from "./KeyWordList";
const KeyWord = () =>{
    const location = useLocation();
    const [keyWord , setKey] = useState('');
    const [isLoading,setLoad] = useState(true); 
    let keyword;
    useEffect(() => {
        // URL 쿼리 파라미터 가져오기
        const searchParams = new URLSearchParams(location.search);
        keyword = searchParams.get('keyword');
        // name 변수에 파라미터 값 1이 저장됩니다.
        setKey(keyword);
        setLoad(false);
      }, [location.search]);
      return(
         <>
         <div className='Area-photo'><p>키워드 검색</p></div>
            <div className="Area-Container">
                  <h3 className="result-text">{keyWord} 검색결과</h3>
                  <div>
                     {!isLoading && <KeyWordList item={keyWord}/>}
            </div>
          </div>
         </>
      )
    
}

export default KeyWord;