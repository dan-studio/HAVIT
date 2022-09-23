import styled from "styled-components";
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";
import { MdPeopleAlt } from "react-icons/md";
import { AiFillBell } from "react-icons/ai";

// import groupProfile from "../img/profile.jpg";

import { BsTrophy } from "react-icons/bs";


const UserProfile = () => {

  


  return (
    <div>
              <Profile>
          <UserBox>
            <UserRight>
              <UserPhoto src="https://t1.daumcdn.net/cfile/tistory/99D8AA4B5C5621621C"></UserPhoto>
            </UserRight>

            <UserLeft>
              <UserName>김병처리d</UserName>
              <UserIntr>세상에서 제일가는 장난꾸러기</UserIntr>
              <Percentage value="50" max="100"></Percentage>
              <Achievements>
                업적 <br />
                <FaStarHalfAlt /> 시작이 반이다 <br />
                <BsTrophy /> 첫 완수
              </Achievements>
            </UserLeft>
            <AiFillBell style= {{color: '@lightgray', opacity: '0.4', fontSize: '20px' }} />

          </UserBox>
        </Profile>

    </div>
  )
}

const Profile = styled.div`

  height: 168px;
  width: 350px;
  margin: 30px 20px 10px 20px;

  box-sizing: border-box;
background: #FFFFFF;
border-style: solid;
border: 1px solid #EAEAEA;
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
`;

const UserLeft = styled.div`
  margin: 5px 0 0 10px;
`;
const Percentage = styled.progress``;
const UserName = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
const UserIntr = styled.div`
  color: gray;
  font-size:12px;
`;
const Achievements = styled.div`
font-size:10px;
`;

export default UserProfile