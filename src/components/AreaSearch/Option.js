const Option = async (Cat) => {
  const apiKey = "yX8wx5nzKb42wtBThegyX7gb6G3xUCPCMfbzNYF1Gf0p0nSUn9ZeynPzokq9GNLvrFLmqQVbU9%2FQz9LckJpQLw%3D%3D";
  const apiEndpoint = `https://apis.data.go.kr/B551011/KorService1/areaCode1?numOfRows=40&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&serviceKey=${apiKey}&areaCode=${Cat}`;

  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    const elem = data.response.body.items.item;
    return elem;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default Option;
