import styled from 'styled-components';
import Profile from '@components/cards/Profile';
import CrewInfo from '@components/cards/CrewInfo';
import AlertUser from '@components/cards/AlertUser';

import { IoIosArrowForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { resetLayout, setLayout } from '../redux/layout';
import UserProfile from '../components/UserProfile';
import { userApis } from './../apis/auth';

const Mypage = () => {
  const invertHeader = useSelector(state => state.layout);
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState('');
  const [group, setGroup] = useState('');
  const [friends, setFriends] = useState('');

  // 레이아웃 관련 설정
  useEffect(() => {
    dispatch(setLayout({ isInvert: true }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

  // 내정보 가져오기
  useEffect(() => {
    userApis.userProfile().then(res => {
      setUserInfo(res.data);
      console.log('🚀 * userApis.userInfo * setUserInfo', setUserInfo);
    });
  }, []);

  // 그룹 가져오기
  useEffect(() => {
    userApis.getGroup().then(res => {
      setGroup(res.data);
      console.log('🚀 * userApis.getGroup * setGroup', setGroup);
    });
  }, []);

  // 사람 가져오기
  useEffect(() => {
    userApis.usersInfo().then(res => {
      setFriends(res.data);
      console.log('🚀 * userApis.userInfo * setFriends', setFriends);
    });
  }, []);

  return (
    <StyleWrap>
      {/* 프로필 */}
      <UserProfile />
      {/* {userInfo && userInfo((item, idx) => <UserProfile {...item} key={idx} />)} */}

      {/* 크루 정보 */}
      <StyleCrews>
        {/* <Bar /> */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2>내가 속한 크루</h2>
          <IoIosArrowForward style={{ fontSize: '20px', color: '#DE4242' }} />
        </div>
        {group && group.map((item, idx) => <CrewInfo {...item} key={idx} />)}
      </StyleCrews>

      {/* 알림 */}
      <StyleAlert>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2>알림</h2>
          <IoIosArrowForward style={{ fontSize: '20px' }} />
        </div>
        {friends && friends.map((item, idx) => <AlertUser {...item} key={idx} />)}
      </StyleAlert>
    </StyleWrap>
  );
};

const StyleWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  position: relative;
  background-color: #5e43ff;
`;

const StyleCrews = styled.div`
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

const StyleAlert = styled.div`
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
