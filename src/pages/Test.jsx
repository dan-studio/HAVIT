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

const Test = () => {
  useEffect(() => {
    userApis.getmyGroup().then((res) => {
      setGroupList(res);
      console.log(res);
      console.log(res.data);
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
    Modal.confirm({
      title: "튜토리얼",
      content: (
        <div>
          <TutorialList />
        </div>
      ),
      cancelText: "닫기",
    });
  };

  return (
    <StyledDiv>
      aaa
      <button onClick={showModal}>모달 띄우기</button>
      {isTutorial && <ModalTutorial setIsTutorial={setIsTutorial} />}
      <button onClick={Tutorial}> antd 라이브러리</button>

      <SwipeBox2 styled={{ height: "fit-contents" }}>
        <CardTitle>튜토리얼</CardTitle>
        {/* <TutorialList styled={{ height: "fit-contents" }} /> */}
      </SwipeBox2>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  height: 84.7vh;
`;
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
const Event = styled.div`
  width: 650px;
  margin: 0 10px 0 10px;
  /* padding: 40px 0px; */
`;
export default Test;
