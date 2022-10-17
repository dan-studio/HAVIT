import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper";

const TutorialList = () => {
  const infoList = ["test1", "test2", "test3"];
  return (
    <div>
      aaa
      <Swiper
        pagination={{ clickable: true }} // 우측의 점을 클릭했을 때, 클릭한 슬라이드로 이동하게 됩니다.
        mousewheel // 마우스 휠 동작을 허용합니다.
        keyboard // 키보드 방향키에 의한 동작을 허용합니다.
        modules={[Pagination, Mousewheel, Keyboard]} // 페이지네이션, 마우스휠, 키보드 등을 사용하려면 모듈을 import해줘야 합니다.
        allowTouchMove // 터치 동작을 허용합니다.
        className="main_slider"
        threshold={20} // 터치 감도를 조정합니다. 숫자가 클수록 터치에 반응하지 않습니다.
        speed={1000} // 슬라이드가 넘어가는 속도를 조정합니다. 단위는 ms입니다.
        onActiveIndexChange={(swiper) => {
          console.log(swiper.activeIndex);
        }}
      >
        <SwiperSlide>
          <StyledSwiper>
            <img
              alt="img"
              src="https://cdnweb01.wikitree.co.kr/webdata/editor/202008/20/img_20200820140252_0ddb8cb7.webp"
              style={{ height: "300px" }}
            ></img>
          </StyledSwiper>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
      {/* <div>사진</div>
    <img alt = "img" src="https://cdnweb01.wikitree.co.kr/webdata/editor/202008/20/img_20200820140252_0ddb8cb7.webp"
    style={{width:"200px"}}
    ></img>
    <div>설명</div>
    <div>기타</div> */}
    </div>
  );
  
};




const DivSt = styled.div``;
const StyledSwiper = styled.div`
  height: 400px;
`;

export default TutorialList;
