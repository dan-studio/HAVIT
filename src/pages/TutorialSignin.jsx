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

const TutorialSignin = ({isTutorial,setIsTutorial}) => {

  return (
    <div style={{ zIndex: '99' }}>
          <StyledDiv>
          <Modal 
          title='서비스 둘러보기' 
          centered 
          open={isTutorial} 
          close={()=> setIsTutorial(false)}
          onOk={() => setIsTutorial(false)} 
          onCancel={() => setIsTutorial(false)} 
          bodyStyle={{ height: '440px' }} 
          // footer={null}
          >
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
            <img alt='img' 
            src='https://velog.velcdn.com/images/wildgallop/post/9307fe1f-3c0f-477d-b6a5-bfd49ef2b75c/image.png' 
            style={{height: '200px'}}
            />
            </StyledSwiper>
            </SwiperSlide>
            <SwiperSlide>
                <StyledSwiper >                
            <img alt='img' 
            src='https://velog.velcdn.com/images/wildgallop/post/9307fe1f-3c0f-477d-b6a5-bfd49ef2b75c/image.png' 
            style={{height: '200px'}}
            />
            </StyledSwiper>
            </SwiperSlide>
            </Swiper>

          </Modal>
          </StyledDiv>
    </div>
  );
};






const StyledDiv = styled.div`

`
const StyledSwiper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-self: auto; */
  background-color: red;
  height:200px;
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

// export {openModal}

// export {TutorialSignin, openModal}
export default TutorialSignin;
