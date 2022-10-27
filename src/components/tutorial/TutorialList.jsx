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
         <Modal title='사용가이드' centered open={isTutorial} close={() => setIsTutorial(false)} onOk={() => setIsTutorial(false)} onCancel={() => setIsTutorial(false)} footer={null}>
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
           >
           <SwiperSlide style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: 'auto', height: '700px' }}>
             <SwiperImg alt='img' src='https://velog.velcdn.com/images/wildgallop/post/883d08a6-b537-49be-af12-6dbfc7c6dfde/image.png' />
           </SwiperSlide>
           <SwiperSlide style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: 'auto', height: '700px' }}>
             <SwiperImg alt='img' src='https://velog.velcdn.com/images/wildgallop/post/773de84f-2f74-40a9-b5df-1387aedd93c6/image.png' />
           </SwiperSlide>
           <SwiperSlide style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: 'auto', height: '700px' }}>
             <SwiperImg alt='img' src='https://velog.velcdn.com/images/wildgallop/post/fde1ea84-072a-464c-ab06-260b187532f1/image.png' />
           </SwiperSlide>
           <SwiperSlide style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: 'auto', height: '700px' }}>
             <SwiperImg alt='img' src='https://velog.velcdn.com/images/wildgallop/post/19f45201-200a-493d-8db3-41a740898c8e/image.png' />
           </SwiperSlide>
           <SwiperSlide style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: 'auto', height: '700px' }}>
             <SwiperImg alt='img' src='https://velog.velcdn.com/images/wildgallop/post/ae916ea4-51ea-4b0b-b706-d62d2f7f7482/image.png' />
           </SwiperSlide>
           <SwiperSlide style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: 'auto', height: '700px' }}>
             <SwiperImg alt='img' src='https://velog.velcdn.com/images/wildgallop/post/c647bdb6-2663-4fd1-91a7-d7e82c6a9e11/image.png' />
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
  bottom: 10px;
  z-index: 100;
`;

const SwiperImg = styled.img`
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  top: 0;
`;

export default TutorialList;