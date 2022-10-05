import { useState } from "react";
import axios from "axios";
import { kakaoApi } from "../../apis/config";
import React, { useEffect } from "react";

const CoordinateConvert = () => { 

    const [locationObj, setLocationObj] = useState({});
  const x = '126.9539484';
  const y = '37.3097165';


  // kakaoApi.get("https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=127.1086228&y=37.4012191")
  // curl -v -X GET "https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=127.1086228&y=37.4012191" \

  // kakaoApi.get("https://dapi.kakao.com/v2/local/search/address.json?analyze_type=similar&page=1&size=10&query=" + encodeURIComponent(fullAddress))
  const _callApi = () => {

  // kakaoApi.get("https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=127.1086228&y=37.4012191")
  kakaoApi.get(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${x}&y=${y}`)
  .then(res=>{
      if(res.status === 200){
          const temp = res.data.documents[0];
          setLocationObj(
            {
              "temp":temp,
              "si":temp.region_1depth_name,
              "gu":temp.region_2depth_name,
              "dong":temp.region_3depth_name,


            }
          )
          console.log(res)
      }
  })
  .catch((err)=>{console.log(err)})
  return console.log("test");
  };


  return (
  <>
      <div>
      {/* <Button title="Api 불러오기 버튼" onPress={_callApi} /> */}

        <button onClick={_callApi}>Api 불러오기 버튼 </button>
        <div>{locationObj.si}</div>
        <div>{locationObj.gu}</div>
        <div>{locationObj.dong}</div>

    </div>
  </>
  )
}

export default CoordinateConvert


