import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from 'swiper';
import Modal from 'antd/lib/modal/Modal';
import 'swiper/css';
import 'swiper/css/pagination';
import { useCookies } from 'react-cookie';
import { CookiesProvider } from 'react-cookie';
import PrimaryButton from '@components/button/SubButton';
import SubButton from '@components/button/SubButton';

const TutorialList = () => {
  useEffect(() => {
    if (appCookies['MODAL_EXPIRES']) return;
    setHasCookie(false);
  }, []);
  const [isTutorial, setIsTutorial] = useState(true);
  const [hasCookie, setHasCookie] = useState(true);
  const [appCookies, setAppCookies] = useCookies();
  const getExpiredDate = days => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const closeModalUntilExpires = () => {
    if (!appCookies) return;

    const expires = getExpiredDate(1);
    setAppCookies('MODAL_EXPIRES', true, { path: '/', expires });

    setIsTutorial(false);
  };

  return (
    <div style={{ zIndex: '99' }}>
      <CookiesProvider>
        {isTutorial && !hasCookie && (
          <Modal title='튜토리얼' centered open={isTutorial} onOk={() => setIsTutorial(false)} onCancel={() => setIsTutorial(false)} bodyStyle={{ height: '440px' }} footer={null}>
            <Swiper
              pagination={{ clickable: true }} // 우측의 점을 클릭했을 때, 클릭한 슬라이드로 이동하게 됩니다.
              mousewheel // 마우스 휠 동작을 허용합니다.
              keyboard // 키보드 방향키에 의한 동작을 허용합니다.
              modules={[Pagination, Mousewheel, Keyboard]} // 페이지네이션, 마우스휠, 키보드 등을 사용하려면 모듈을 import해줘야 합니다.
              allowTouchMove // 터치 동작을 허용합니다.
              className='main_slider'
              threshold={20} // 터치 감도를 조정합니다. 숫자가 클수록 터치에 반응하지 않습니다.
              speed={1000} // 슬라이드가 넘어가는 속도를 조정합니다. 단위는 ms입니다.
              onActiveIndexChange={swiper => {}}
              height={'400px'}>
              <SwiperSlide>
                <StyledSwiper >
                  <img alt='img' align='center' src='https://velog.velcdn.com/images/wildgallop/post/177eead9-1e59-43ff-9d5e-5732dee4cdc3/image.png' />
                </StyledSwiper>
              </SwiperSlide>
              <SwiperSlide>
                <StyledSwiper>
                  <img alt='img' src='https://velog.velcdn.com/images/wildgallop/post/e908cedf-e17c-4c83-8fb7-b5e09010fb89/image.png' />
                </StyledSwiper>
              </SwiperSlide>
              <SwiperSlide>
                <StyledSwiper>
                  <img alt='img' src='https://velog.velcdn.com/images/wildgallop/post/6742f526-bb9d-4a7f-a4f4-0ef4efa12686/image.png' />
                </StyledSwiper>
              </SwiperSlide>
              <SwiperSlide>
                <StyledSwiper>
                  <img alt='img' src='https://velog.velcdn.com/images/wildgallop/post/2b2b283c-7c06-4807-aa09-af91913a5ba1/image.png' />
                </StyledSwiper>
              </SwiperSlide>
              <SwiperSlide>
                <StyledSwiper>
                  <img alt='img' src='https://velog.velcdn.com/images/wildgallop/post/b8206f75-19b0-466d-afcc-a5201705392d/image.png' />
                </StyledSwiper>
              </SwiperSlide>
              <SwiperSlide>
                <StyledSwiper>
                  <img alt='img' src='https://velog.velcdn.com/images/wildgallop/post/09ff2ab3-1c4b-46a5-a04b-5924876e4415/image.png' />
                </StyledSwiper>
              </SwiperSlide>
            </Swiper>
            <StyledButton onClick={closeModalUntilExpires}>오늘 하루동안 보지 않기</StyledButton>
          </Modal>
        )}
      </CookiesProvider>
    </div>
  );
};

const StyledSwiper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-self: auto; */
  background-color: red;
  & > img {
    width: 400px;
    height: auto;
    background-size: fill;
    overflow: hidden;
  }
`;
const StyledButton = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  right: 20px;
  bottom: 20px;
  z-index: 100;
`;
export default TutorialList;