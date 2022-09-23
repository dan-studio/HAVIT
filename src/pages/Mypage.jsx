import styled from 'styled-components';
import Profile from '@components/cards/Profile';
import CrewInfo from '@components/cards/CrewInfo';
import AlertUser from '@components/cards/AlertUser';

import { IoIosArrowForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetLayout, setLayout } from '../redux/layout';
import UserProfile from '../components/UserProfile';

const Mypage = () => {
  const invertHeader = useSelector(state=>state.layout)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setLayout({isInvert:true}))
    return ()=>{
      dispatch(resetLayout())
    }
  },[])

  return (
    <Wrap>
      {/* 프로필 */}
      <UserProfile />

      {/* 크루 정보 */}
      <Crews>
        {/* <Bar /> */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2>내가 속한 크루</h2>
          <IoIosArrowForward style={{ fontSize: '20px', color:'#DE4242' }} />
        </div>
        <CrewInfo />
        <CrewInfo />
        <CrewInfo />
      </Crews>

      {/* 알림 */}
      <Alert>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2>알림</h2>
          <IoIosArrowForward style={{ fontSize: '20px' }} />
        </div>
        <AlertUser />
        <AlertUser />
        <AlertUser />
      </Alert>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  background-color: #5e43ff;
`;

const Crews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0 30px 0;
  position: relative;
  background-color: #fff;
  border-radius: 30px 30px 0 0;

  & > div {
    margin: 35px 20px 0 20px;
    & > h2 {
      font-weight: 700;
      font-size: 20px;
      margin: 0;
      line-height: 24px;
    }
  }
`;

const Bar = styled.div`
  width: 50%;
  height: 5px;
  left: 20%;
  position: absolute;
  background: #eaeaea;
  border-radius: 5px;
`;

const Alert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0;
  /* height: 100vh; */
  background-color: #ededed;

  & > div {
    margin: 35px 20px 0 20px;
    & > h2 {
      font-weight: 700;
      font-size: 20px;
      margin: 0;
      line-height: 24px;
    }
  }
`;

export default Mypage;
