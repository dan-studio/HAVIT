import React from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import TutorialList from "./TutorialList";
import { userApis } from "../apis/auth";
import ModalTutorial from "./ModalTutorial";

const Tutorial = () => {
  useEffect(() => {
    userApis.getmyGroup().then((res) => {
      setGroupList(res);
      // console.log(res);
      // console.log(res.data);
      res.data.length === 0 ? setIsTutorial(false) : setIsTutorial(true);
      console.log(isTutorial);
    });
  }, []);

  const [isTutorial, setIsTutorial] = useState(false);
  const [groupList, setGroupList] = useState([]);

  const showModal = () => {
    setIsTutorial(true);
  };

  const Tutorial = () => {
    setIsTutorial(true)
  };

  return (
    <StyledDiv>
      <button onClick={showModal}>모달 띄우기</button>
      {isTutorial && <ModalTutorial setIsTutorial={setIsTutorial} />}
      <button onClick={Tutorial}> antd 라이브러리</button>
      <SwipeBox2 styled={{ height: "fit-contents" }}>
        <CardTitle>튜토리얼</CardTitle>
      </SwipeBox2>
      {/* <Modal
        title="튜토리얼"
        centered
        open={isTutorial}
        onOk={() => setIsTutorial(false)}
        onCancel={() => setIsTutorial(false)}
        bodyStyle={{height: 420}}
      > */}
        <TutorialList />

      {/* </Modal> */}
    <Modal/>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  height: 84.7vh;
`;

const CardTitle = styled.div`
  color: rgb(51, 51, 51);
  font-size: 38px;
  line-height: 1.15;
  letter-spacing: -0.26px;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  margin: 50px 0 50px 0;
`;
const SwipeBox2 = styled.div`
  width: 100%;
  min-width: 200px;
  height: "fit-contents";
  /* object-fit: cover; */
`;

export default Tutorial;