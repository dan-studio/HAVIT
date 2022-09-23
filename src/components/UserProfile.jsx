import styled from 'styled-components';
import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { useState } from 'react';
import { MdPeopleAlt } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';

// import groupProfile from "../img/profile.jpg";

import { BsTrophy } from 'react-icons/bs';

const UserProfile = () => {
  return (
    <div>
      <Profile>
        <UserBox>
          <UserRight>
            <UserPhoto src='https://images.unsplash.com/photo-1616994503361-04ac7f5f6aac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80'></UserPhoto>
          </UserRight>

          <UserLeft>
            <UserName>
              <bold>김병처리</bold> 님
            </UserName>
            <UserIntr>세상에서 제일가는 장난꾸러기</UserIntr>
            <Percentage value='50' max='100'></Percentage>
            <Achievements>
              <FaStarHalfAlt /> 시작이 반이다 <br />
              <BsTrophy /> 첫 완수
            </Achievements>
          </UserLeft>
          <Alert>
            <FaBell />
            <AlertSign></AlertSign>
          </Alert>
        </UserBox>
      </Profile>
    </div>
  );
};

const Profile = styled.div`
  height: 168px;
  width: 350px;
  margin: 0 auto 3.125rem;
  box-sizing: border-box;
  background: #ffffff;
  border-style: solid;
  border-radius: 20px;
  padding: 20px;
`;
const UserBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const UserRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 10px;
`;

const UserPhoto = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 0 20px 0 0;
  object-fit: cover;
`;

const UserLeft = styled.div`
  margin: 5px 0 0 10px;
`;
const Percentage = styled.progress`
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
  font-size: 18px;
  bold {
    font-size: 20px;
    font-weight: 700;
  }
`;
const UserIntr = styled.div`
  color: gray;
  font-size: 12px;
`;
const Achievements = styled.div`
  font-size: 10px;
`;
const Alert = styled.div`
  position: relative;
  color: #d2d2d2;
`;
const AlertSign = styled.div`
  position: absolute;
  top: 3px;
  right: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: red;
`;
export default UserProfile;
