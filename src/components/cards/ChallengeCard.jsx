import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { FaBell } from "react-icons/fa";

const ChallengeCard = () => {
  const [memberImg, setmemberImg] = useState(
    "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
  );
  const [friendName, setFriendName] = useState("애플조아");

  return (
    <Card>
      <MemberDiv>
        <MemberImg src={memberImg} alt="group_image" />
        <FriendName>{friendName}</FriendName>
        <MemberHour>12H</MemberHour>
      </MemberDiv>
      <BellDiv>
        <FaBell color="#5e43ff" size="16" />
      </BellDiv>
    </Card>
  );
};
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 2px 5px #b8b8b8;
  width: 90vw;
  margin: 2vh auto;
  border-radius: 10px;
  height: 6vh;
`;
const MemberImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0 10px;
  object-fit: cover;
`;

const MemberHour = styled.div`
  font-size: 12px;
  color: gray;
  margin-left: 10px;
`;

const FriendName = styled.div`
  font-weight: 600;
`;

const MemberDiv = styled.div`
  display: flex;
  align-items: center;
`;
const BellDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
export default ChallengeCard;
