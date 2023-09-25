// FilterList 컴포넌트
import React ,{useState} from "react";
import Filter from "./Filter";
import './Filter.css'
import SearchFeild from "./Search-feild";
import LoginInfo from "./Login-Info";
const FilterList = () =>{
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const topic=["","Area","Course","FreeBoard"];
    const [isClicked , setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!isClicked); // 클릭할 때마다 상태를 토글합니다.
      }
    return(
        <div className="Nav-Bar">
            <div className="Nav-inner">
            <img className="logo" src='http://youngtour.dothome.co.kr/images/letter-logo.png' alt='logo'></img>
                <ul>
                   {topic.map((el,idx)=>{return <Filter key={idx} item={el}/>})}
                </ul>
                    <span className='search-icon' onClick={handleClick}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    {isClicked && <SearchFeild/>}
                    <span className="user-icon"><i className="fa-regular fa-user"></i><LoginInfo item={user}/></span>
            </div>
        </div>
    );
}

export default FilterList;
