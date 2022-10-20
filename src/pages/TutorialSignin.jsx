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

// const TutorialSignin = (isTutorial,setIsTutorial,openModal) => {
  const TutorialSignin = () => {
  const [isTutorial, setIsTutorial] = useState(true);
  // const [isTutorial2, setIsTutorial2] = useState(false);
  console.log(isTutorial)

  const  openModal = () => {
    // setIsTutorial(true);
    // return null
      setIsTutorial(true);
  };
  // export function openModal=()=>{
  //   // setIsTutorial(true);
  //   // return null
  //     setIsTutorial(true);
  // }

  return (
    <div style={{ zIndex: '99' }}>
          <Modal 
          title='서비스 둘러보기' 
          centered 
          // open={isTutorial||isTutorial2} 
          open={isTutorial} 
          close={()=> setIsTutorial(false)}
          onOk={() => setIsTutorial(false)} 
          onCancel={() => setIsTutorial(false)} 
          bodyStyle={{ height: '440px' }} 
          // footer={null}
          >
            <img alt='img' 
            src='https://velog.velcdn.com/images/wildgallop/post/9307fe1f-3c0f-477d-b6a5-bfd49ef2b75c/image.png' 
            style={{height: '200px'}}
            />

          </Modal>
    </div>
  );
};

// const function name(params) {  
// }







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

// export {openModal}

// export {TutorialSignin, openModal}
export default TutorialSignin;
