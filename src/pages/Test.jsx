import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { removeToken } from "../apis/config";
import ToggleSwitch from "../components/button/ToggleSwitch";
import { SiInstagram, SiNotion } from "react-icons/si";
import logo from "../../src/assets/havit.png";
import Footer from "../components/layout/Footer";
import { Modal } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import TutorialList from "./TutorialList";

const Test = () => {

  const Tutorial = () => {
    Modal.confirm({
      title: "튜토리얼",
      content: (
        <div>
          <TutorialList/>
        </div>
      ),
      // okText: "확인",
      cancelText: "닫기",
      // onOk: () => {

      // },
    });
  }

  return (
    <StyledDiv>
        aaa
        <button onClick={Tutorial}> aa</button>
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
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
    </Swiper>

      <SwipeBox2 styled={{height:"fit-contents"}}>
        <CardTitle>
          튜토리얼
        </CardTitle>
        <TutorialList styled={{height:"fit-contents"}}/>

  
      </SwipeBox2>


    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  height: 84.7vh;
`
const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  background-color: #f6f9fa;
  width: 100%;
`;
const StyledIcons = styled.div`
  margin-top: 20px;
`;
const StyleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleSettingForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 21.875rem;
  margin: 0 1.25rem 2.1875rem;
`;

const StyledButton = styled.div`
  width: 30vw;
  display: flex;
  justify-content: center;
`;
const SwipeBox = styled.div`
  /* width: 100%; */
  /* min-width: 1050px; */
  height: 370px;
  object-fit: cover;
  margin: 50px 0 50px 0;
`;
const CardTitle = styled.div`
  color: rgb(51, 51, 51);
    font-size: 38px;
    line-height: 1.15;
    letter-spacing: -0.26px;
    font-weight: 500;
    text-align:center;
    vertical-align:middle;
    margin: 50px 0 50px 0;
`;
const SwipeBox2 = styled.div`
  width: 100%;
  min-width: 200px;
  height: "fit-contents";
  /* object-fit: cover; */
`;
const Event = styled.div`
width: 650px;
    margin: 0 10px  0 10px  ;
    /* padding: 40px 0px; */
`;
export default Test;
