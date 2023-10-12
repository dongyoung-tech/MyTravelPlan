// FilterList 컴포넌트
import React ,{useState} from "react";
import Filter from "./Filter";
import './Filter.css'
import SearchFeild from "./Search-feild";
import LoginInfo from "./Login-Info";
import SideButton from "./SideButton";
const FilterList = () =>{
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const topic=["Area","Course","FreeBoard"];
    const [isClicked , setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!isClicked); // 클릭할 때마다 상태를 토글합니다.
      }
     const sideHandler = () =>{
        document.querySelector('.side-menu').style.display='block';
        document.querySelector('.side-overlay').style.display='block';
     }
    return(
        <div className="Nav-Bar">
            <div className="Nav-inner">
            <h2 className="logo"><a href='/'>마이트레블플랜</a></h2>
                <ul>
                   {topic.map((el,idx)=>{return <Filter key={idx} item={el}/>})}
                </ul>
                    <span className='search-icon' onClick={handleClick}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    {isClicked && <SearchFeild/>}
                    <span className="user-icon"><i className="fa-regular fa-user"></i><LoginInfo item={user}/></span>
                    <div className="side-button" onClick={sideHandler}></div>
            </div>
            <SideButton/>
        </div>
    );
}

export default FilterList;
