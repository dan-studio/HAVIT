import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper";
import Modal from "antd/lib/modal/Modal";
import "swiper/css";
import "swiper/css/pagination";


const TutorialList = () => {
  const [isTutorial, setIsTutorial] = useState(true);

  return (
    <div style={{zIndex: "99" }}>

      <Modal
              title="튜토리얼"
              centered
              open={isTutorial}
              onOk={() => setIsTutorial(false)}
              onCancel={() => setIsTutorial(false)}
              bodyStyle={{height: 370}}
              footer= {null}
      > 
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
            allign="center"
            src="https://velog.velcdn.com/images/wildgallop/post/177eead9-1e59-43ff-9d5e-5732dee4cdc3/image.png"
            style={{ height: "300px" }}
          ></img>
                    </StyledSwiper>

        </SwiperSlide>
        <SwiperSlide>
        <StyledSwiper>

          <img
            alt="img"
            src="https://velog.velcdn.com/images/wildgallop/post/e908cedf-e17c-4c83-8fb7-b5e09010fb89/image.png"
            style={{ height: "300px" }}
          ></img>
                    </StyledSwiper>

        </SwiperSlide>
        <SwiperSlide>
        <StyledSwiper>

          <img
            alt="img"
            src="https://velog.velcdn.com/images/wildgallop/post/6742f526-bb9d-4a7f-a4f4-0ef4efa12686/image.png"
            style={{ height: "300px" }}
          ></img>
                    </StyledSwiper>

        </SwiperSlide>
        <SwiperSlide>
        <StyledSwiper>

          <img
            alt="img"
            src="https://velog.velcdn.com/images/wildgallop/post/2b2b283c-7c06-4807-aa09-af91913a5ba1/image.png"
            style={{ height: "300px" }}
          ></img>
                    </StyledSwiper>

        </SwiperSlide>
        <SwiperSlide>
        <StyledSwiper>

          <img
            alt="img"
            src="https://velog.velcdn.com/images/wildgallop/post/b8206f75-19b0-466d-afcc-a5201705392d/image.png"
            style={{ height: "300px" }}
          ></img>
                    </StyledSwiper>

        </SwiperSlide>
        <SwiperSlide>
        <StyledSwiper>

          <img
            alt="img"
            src="https://velog.velcdn.com/images/wildgallop/post/09ff2ab3-1c4b-46a5-a04b-5924876e4415/image.png"
            style={{ height: "300px" }}
          ></img>
                    </StyledSwiper>

        </SwiperSlide>
      </Swiper>
      </Modal>
    </div>
  );
};

const DivSt = styled.div``;
const StyledSwiper = styled.div`
  height: 320px;
  text-align : center;
`;

export default TutorialList;
