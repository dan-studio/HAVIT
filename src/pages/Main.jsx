import styled from "styled-components";
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";
import { MdPeopleAlt } from "react-icons/md";
import { AiFillBell } from "react-icons/ai";
import GroupCard from "../components/cards/GroupCard";
// import groupProfile from "../img/profile.jpg";
// import DayBadge from './DayBadge';
// import Tags from './Tag';
import { BsTrophy } from "react-icons/bs";
import UserProfile from "../components/UserProfile";
import ChallengeCard from "../components/cards/ChallengeCard";

const Main = () => {
  const [memberImg, setmemberImg] = useState("");
  const [groupName, setGroupName] = useState("애플조아");
  const [numberOfPeople, setNumberOfPeopf] = useState(1);

  return (

      <MainBox>
        <UserProfile/>
        <GroupMemberBox>
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

          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>
          <ChallengeCard/>

        </Challenge>
        </GroupMemberBox>
      </MainBox>

  );
};

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  /* height:100vh; */
  background-color: #5e43ff;

`;

const Group = styled.div`
  /* border-radius: 25px;
  border-color: black;
  border-style: solid;
  border: solid; */
  /* height: 220px; */
  height: 220px;
  width:360px;
  margin: 30px 10px 30px 10px;
`;


const GroupTitle = styled.div`
font-weight:bold;
font-size:15px;


`;
const GroupPhotoBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  height: 250px;
  margin: 15px 5px 5px 5px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const Challenge = styled.div``;
const ChallengeTitle = styled.div`
font-weight:bold;
font-size:20px;
margin-left:20px;
`;
const GroupMemberBox = styled.div`
background-color:white;
border-radius:25px;
margin-top: 25px;

`

export default Main;
