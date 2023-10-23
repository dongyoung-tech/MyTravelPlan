import React,{useState,useEffect}from "react";
import BlogSearchItem from './BlogSearchItem';
const BlogSearch = (props) =>{
    const apiUrl = 'https://dapi.kakao.com/v2/search/blog';
    const [Data,setData] = useState([]);
    const BlogApi = async (apiUrl) => {
      try {
        const url = new URL(apiUrl);
        url.searchParams.append('query', props.item);
        url.searchParams.append('size', 4);
    
        const response = await fetch(url, { 
          method: 'GET',
          headers: {
            Authorization: 'KakaoAK f34a91ca9e1e99ad266cbc7e674571d2',

          },
        });
    
        if (!response.ok) {
          throw new Error('요청이 실패했습니다.');
        }
    
        const data = await response.json();
        setData(data.documents);
    
        // 여기에서 데이터를 처리하거나 상태를 업데이트할 수 있습니다.
      } catch (error) {
        console.error('에러 발생:', error);
      }
    };
    
    useEffect(() => {
      BlogApi(apiUrl);
    }, []);
    
      return(
          <div className="sub-con"> 
            <h3 className="d_sub_title">블로그 포스팅</h3>
            <div className="blog-sub-con">  
                {Data&& Data.map((item,idx)=>{
                return <BlogSearchItem item={item} key={idx}/>
            })}
            </div>
        </div>
      )
}

export default BlogSearch;