import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect } from "react";


const ModalTutorial = ({ setIsTutorial }) => {
  const closeModal = () => {
    setIsTutorial(false);
};

  return (
    <div>
      모달창 떴다!
      <Swiper
        // direction={'vertical'} // 슬라이드의 방향을 수직으로 설정합니다.
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
        <SwiperSlide> <Slide1/> <div>문자열추가</div> </SwiperSlide>
        <SwiperSlide> Slide2 </SwiperSlide>
        <SwiperSlide> Slide3 </SwiperSlide>
        <SwiperSlide> Slide4 </SwiperSlide>
        <SwiperSlide> Slide5 </SwiperSlide>
      </Swiper>

      <button onClick={closeModal}>
                X
            </button>
    </div>
  )
}

const Slide1 = ()=> {
  return (
    <div> slide1입니다</div>
  )
}
const Slide2 = ()=> {
  return (
    <div> slide2입니다</div>
  )
}
const Slide3 = ()=> {
  return (
    <div> slide3입니다</div>
  )
}
const Slide4 = ()=> {
  return (
    <div> slide4입니다</div>
  )
}
const Slide5 = ()=> {
  return (
    <div> slide5입니다</div>
  )
}
const Slide6 = ()=> {
  return (
    <div> slide6입니다</div>
  )
}




export default ModalTutorial