import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { AiFillBell } from "react-icons/ai";


const ChallengeCard = () => {

  const [memberImg, setmemberImg] = useState("");
  const [groupName, setGroupName] = useState("애플조아");


  return (
    <Challenge>
    <ChallengeMemberBox>

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
          <AiFillBell color="#5e43ff"  size="24" />
        </CardLeft>
      </Card>

    </ChallengeMemberBox>
  </Challenge>
  )
}

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
  margin: 5px 20px 5px 20px;
  padding: 15px;
  width: 347px;
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

  width: 36px;
  height: 36px;
  margin-right: 10px;
  background-color: red;
  border-radius: 9999px;
  overflow: hidden;
  & > img {
    width: 92px;
    height: 92px;
    /* width: 36px;
height: 36px; */
    object-fit: cover;
  }
  margin-top: 10px;
`;
const MemberHour = styled.div`
  margin-left: 5px;
  color: gray;
  padding: 15px 0 0 0;
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
    font-size: 1rem;
    font-weight: 700;
    line-height: 22px;
  }
  margin-top:15px;

`;


export default ChallengeCard