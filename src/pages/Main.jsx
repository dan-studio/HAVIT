import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { resetLayout, setLayout } from '../redux/layout';
import UserProfile from '../components/UserProfile';
import GroupCard from '../components/cards/GroupCard';
import ChallengeCard from '../components/cards/ChallengeCard';

import { IoIosArrowForward } from 'react-icons/io';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout({ isInvert: true }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', background: '#5e43ff' }}>
      {/* <StyledTopDiv> */}
      <UserProfile />
      {/* </StyledTopDiv> */}
      <StyledBottomDiv>
        <Group>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2>김병처리님 이런그룹은 어떠세요?</h2>
            <IoIosArrowForward style={{ fontSize: '20px', color: '#DE4242' }} />
          </div>
        </Group>
        <GroupPhotoBox>
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </GroupPhotoBox>
        <Challenge>
          <ChallengeTitle>함께 챌린지를 완수해요</ChallengeTitle>
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
        </Challenge>
        <DragLine></DragLine>
      </StyledBottomDiv>
    </div>
  );
};

export default Index;

const StyledBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0 30px 0;
  position: relative;
  background-color: #fff;
  border-radius: 30px 30px 0 0;
`;
const DragLine = styled.div`
  position: absolute;
  top: 2vh;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 4px;
  border-radius: 25px;
  background-color: ${({ theme }) => {
    return theme.color.lightgray;
  }};
`;

const Group = styled.div`
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

const GroupTitle = styled.div`
  margin: 0 10px 10px;
  font-weight: bold;
  font-size: 15px;
`;
const GroupPhotoBox = styled.div`
  display: flex;
  width: 100vw;
  height: 12.5rem; 
  margin-bottom: 70px;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Challenge = styled.div`
  /* position: absolute; */
  /* top: 35vh; */
  width: 100vw;
  margin: 0 auto;
`;
const ChallengeTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
`;
