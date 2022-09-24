import styled from "styled-components";
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";
import { MdPeopleAlt } from "react-icons/md";
import { FaBell } from "react-icons/fa";

// import groupProfile from "../img/profile.jpg";

import { BsTrophy } from "react-icons/bs";

const UserProfile = () => {
  return (
    <div>
      <StProfile>
        <StUserBox>
          <StUserRight>
            <StUserPhoto src="https://images.unsplash.com/photo-1616994503361-04ac7f5f6aac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80"></StUserPhoto>
          </StUserRight>
          <StUserLeft>
            <UserName>
              <span>김병처리</span> 님
            </UserName>
            <StUserIntr>세상에서 제일가는 장난꾸러기</StUserIntr>
            <StPercentage value="50" max="100"></StPercentage>
            <StAchievements>
              <FaStarHalfAlt /> 시작이 반이다 <br />
              <BsTrophy /> 첫 완수
            </StAchievements>
          </StUserLeft>
          <StAlert>
            <FaBell />
            <StAlertSign></StAlertSign>
          </StAlert>
        </StUserBox>
      </StProfile>
    </div>
  );
};

const StProfile = styled.div`
  height: 168px;
  width: 350px;
  margin: 0 auto;
  box-sizing: border-box;
  background: #ffffff;
  border-style: solid;
  border-radius: 20px;
  padding: 20px;
`;
const StUserBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const StUserRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 10px;
`;

const StUserPhoto = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 0 20px 0 0;
  object-fit: cover;
`;

const StUserLeft = styled.div`
  margin: 5px 0 0 10px;
`;
const StPercentage = styled.progress`
  height: 8px;
  appearance: none;
  ::-webkit-progress-bar {
    background: white;
    border-radius: 10px;
    border: 0.3px solid #eaeaea;
  }
  ::-webkit-progress-value {
    border-radius: 10px;
    background: #2cdf3d;
  }
`;
const UserName = styled.div`
  font-size: 16px;
  span {
    font-size: 18px;
    font-weight: 700;
  }
`;
const StUserIntr = styled.div`
  color: gray;
  font-size: 12px;
`;
const StAchievements = styled.div`
  font-size: 10px;
`;
const StAlert = styled.div`
  position: relative;
  color: #d2d2d2;
`;
const StAlertSign = styled.div`
  position: absolute;
  top: 3px;
  right: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: red;
`;
export default UserProfile;
