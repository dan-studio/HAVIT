import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { resetLayout, setLayout } from "../redux/layout";
import UserProfile from "../components/UserProfile";
import GroupCard from "../components/cards/GroupCard";
import ChallengeCard from "../components/cards/ChallengeCard";

import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { userApis } from "../apis/auth";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout({ isInvert: true }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

  const [myInfo, setMyInfo] = useState();
  useEffect(() => {
    userApis
      .myProfile()
      .then((res) => {
        setMyInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#5e43ff",
      }}
    >
      {/* <StyledTopDiv> */}
      <UserProfile myInfo={myInfo} />
      {/* </StyledTopDiv> */}
      <StyledBottomDiv>
        <StyledGroup>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2>김병처리님 이런그룹은 어떠세요?</h2>
            <IoIosArrowForward
              style={{ fontSize: "20px", color: "#DE4242" }}
              onClick={() => {
                navigate("/group");
              }}
            />
          </div>
        </StyledGroup>
        <StyledGroupPhotoBox>
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </StyledGroupPhotoBox>
        <StyledChallenge>
          <StyledChallengeTitle>함께 챌린지를 완수해요</StyledChallengeTitle>
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
        </StyledChallenge>
        <StyledDragLine></StyledDragLine>
      </StyledBottomDiv>
    </div>
  );
};

export default Main;

const StyledBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0 30px 0;
  position: relative;
  background-color: #fff;
  border-radius: 30px 30px 0 0;
`;
const StyledDragLine = styled.div`
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

const StyledGroup = styled.div`
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

const StyledGroupTitle = styled.div`
  margin: 0 10px 10px;
  font-weight: bold;
  font-size: 15px;
`;
const StyledGroupPhotoBox = styled.div`
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
const StyledChallenge = styled.div`
  /* position: absolute; */
  /* top: 35vh; */
  width: 100vw;
  margin: 0 auto;
`;
const StyledChallengeTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
`;
