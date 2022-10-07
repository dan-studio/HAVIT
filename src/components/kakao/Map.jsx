import React, { useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
const KakaoMap = ({pos,...props})=>{
    const [position, setPosition] = React.useState(pos ? pos : {lat:37.566826,lng: 126.9786567});
    const [draggable, setDraggable] = React.useState(false);
    const [zoomable, setZoomable] = React.useState(false)

    useEffect(()=>{
        setPosition(pos ? pos : {lat:37.566826,lng: 126.9786567});
    },[pos])
    return (
    <>
    <Map // 로드뷰를 표시할 Container
      center={position}
      style={{
        width: "340px",
        height: "340px",
      }}
      level={3}
      draggable={draggable}
      zoomable={zoomable}
    >
        <MapMarker // 마커를 생성합니다
        position={position}
      />
    </Map>
    </>
    )
}

export default React.memo(KakaoMap);