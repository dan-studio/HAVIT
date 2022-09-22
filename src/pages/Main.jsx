import styled from "styled-components";
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";
import { MdPeopleAlt } from "react-icons/md";
import { AiFillBell } from "react-icons/ai";

import groupProfile from "../img/profile.jpg";
// import DayBadge from './DayBadge';
// import Tags from './Tag';
import { BsTrophy } from "react-icons/bs";
import UserProfile from "../components/UserProfile";
const Main = () => {
  const [memberImg, setmemberImg] = useState(groupProfile);
  const [groupName, setGroupName] = useState("애플조아");
  const [numberOfPeople, setNumberOfPeopf] = useState(1);

  return (

      <MainBox>
        <UserProfile/>
        <Group>
          <GroupTitle>김병처리님 이런 그룹은 어떠세요</GroupTitle>
          <GroupPhotoBox>
            <GroupPhoto src="https://file.mk.co.kr/meet/neds/2022/01/image_readmed_2022_65373_16434607774924988.jpg"></GroupPhoto>

            <GroupPhoto src="https://file.mk.co.kr/meet/neds/2022/01/image_readmed_2022_65373_16434607774924988.jpg"></GroupPhoto>
            <GroupPhoto src="https://file.mk.co.kr/meet/neds/2022/01/image_readmed_2022_65373_16434607774924988.jpg"></GroupPhoto>
            <GroupPhoto src="https://file.mk.co.kr/meet/neds/2022/01/image_readmed_2022_65373_16434607774924988.jpg"></GroupPhoto>
            <GroupPhoto src="https://file.mk.co.kr/meet/neds/2022/01/image_readmed_2022_65373_16434607774924988.jpg"></GroupPhoto>
          </GroupPhotoBox>

          <MdPeopleAlt color="#5e43ff" />
          <div>1명</div>
        </Group>
        <Challenge>
          <ChallengeTitle>함께 챌린지를 완수해요</ChallengeTitle>
          <ChallengeMemberBox>
            {/* <Card>
            <CardBox>
            <CardRight>
<MemberImg>
  <img src={memberImg} alt='group_image' />
</MemberImg>
<GroupInfo>
  <h2>{groupName}</h2>
</GroupInfo>
<MemberHour>12H</MemberHour>
</CardRight>
<CardLeft>
  아이콘
</CardLeft>
</CardBox>
</Card> */}
            <Card>
              <CardRight>
                <MemberImg>
                  <img src={memberImg} alt="group_image" />
                </MemberImg>
                <GroupInfo>
                  <h2>{groupName}</h2>
                </GroupInfo>
                <MemberHour>12H</MemberHour>
              </CardRight>
              <CardLeft>
                <AiFillBell />
              </CardLeft>
            </Card>
            <Card>
              <CardRight>
                <MemberImg>
                  <img src={memberImg} alt="group_image" />
                </MemberImg>
                <GroupInfo>
                  <h2>{groupName}</h2>
                </GroupInfo>
                <MemberHour>12H</MemberHour>
              </CardRight>
              <CardLeft>
                <AiFillBell />
              </CardLeft>
            </Card>
            <Card>
              <CardRight>
                <MemberImg>
                  <img src={memberImg} alt="group_image" />
                </MemberImg>
                <GroupInfo>
                  <h2>{groupName}</h2>
                </GroupInfo>
                <MemberHour>12H</MemberHour>
              </CardRight>
              <CardLeft>
                <AiFillBell />
              </CardLeft>
            </Card>
            <Card>
              <CardRight>
                <MemberImg>
                  <img src={memberImg} alt="group_image" />
                </MemberImg>
                <GroupInfo>
                  <h2>{groupName}</h2>
                </GroupInfo>
                <MemberHour>12H</MemberHour>
              </CardRight>
              <CardLeft>
                <AiFillBell />
              </CardLeft>
            </Card>

          </ChallengeMemberBox>
        </Challenge>
      </MainBox>

  );
};

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  height:100vh;
`;

const Group = styled.div`
  border-radius: 25px;
  border-color: black;
  border-style: solid;
  border: solid;
  height: 200px;
  width:360px;
  margin: 30px 10px 30px 10px;
`;


const GroupTitle = styled.div`
  position: absolute;
  left: 15%;
  font-weight:bold;
font-size:15px;

`;
const GroupPhotoBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
  height: 100px;
  margin: 40px 20px 5px;
  overflow-x: scroll;
  /* overflow-y: hidden; */
`;
const GroupPhoto = styled.img``;
const PhotoBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Challenge = styled.div``;
const ChallengeTitle = styled.div`
font-weight:bold;
font-size:20px;
margin-left:20px;
`;
const ChallengeMemberBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  /* overflow-x: hidden; */
`;
const Card = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  box-sizing: border-box;
  margin: 0 20px 0 20px;
  padding: 15px;
  /* width: 46.4vw; */
  height: 52px;
  border: 0.5px solid #eaeaea;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const CardBox = styled.div`
  /* display:flex;
flex-direction:row; */
  justify-content: space-between;
`;

const MemberImg = styled.div`
  width: 42px;
  height: 42px;
  margin-right: 20px;
  background-color: red;
  border-radius: 9999px;
  overflow: hidden;
  & > img {
    width: 92px;
    height: 92px;
    object-fit: cover;
  }
`;
const MemberHour = styled.div`
  margin-left: 10px;
  color: gray;
`;
const CardRight = styled.div`
  display: flex;
  flex-direction: row;
`;
const CardLeft = styled.div`
  position: absolute;
  left: 300px;
`;
const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  & > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 22px;
  }
`;

const DayInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export default Main;
