import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { resetLayout, setLayout } from "../redux/layout";
import UserProfile from "../components/UserProfile";
import GroupCard from "../components/cards/GroupCard";
import ChallengeCard from "../components/cards/ChallengeCard";
const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout({ isInvert: true }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);
  return (
    <>
      <StyledTopDiv>
        <UserProfile />
      </StyledTopDiv>
      <StyledBottomDiv>
        <Group>
          <GroupTitle>김병처리님 이런 그룹은 어떠세요</GroupTitle>
          <GroupPhotoBox>
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
          </GroupPhotoBox>
        </Group>
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
    </>
  );
};

export default Index;

const StyledTopDiv = styled.div`
  background-color: #5e43ff;
  height: 40vh;
`;
const StyledBottomDiv = styled.div`
  position: absolute;
  top: 37vh;
  background-color: white;
  border-radius: 30px;
  height: 60vh;
  width: 100vw;
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
  position: absolute;
  top: 7vh;
`;
const GroupTitle = styled.div`
  margin: 0 10px 10px;
  font-weight: bold;
  font-size: 15px;
`;
const GroupPhotoBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 22vh;
  overflow-x: scroll;
  overflow-y: hidden;
`;
const Challenge = styled.div`
  position: absolute;
  top: 35vh;
  width: 100vw;
  margin: 0 auto;
`;
const ChallengeTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
`;
