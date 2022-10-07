import styled from "styled-components";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { fileUrlHost } from "../../apis/config";
import { IoIosNotificationsOutline } from "react-icons/io";
const ChallengeCard = ({ memberId, nickname, imageId, modifiedAt }) => {
  const lastChallenged = modifiedAt?.slice(0, 16);

  return (
    <Card>
      <MemberDiv>
        {imageId ? (
          <MemberImg src={fileUrlHost(imageId)} alt="" />
        ) : (
          <StyledProfileDiv>
            <UserOutlined style={{ fontSize: "20px" }}></UserOutlined>
          </StyledProfileDiv>
        )}
        <MemberHour>{lastChallenged}</MemberHour>
        <FriendName>{nickname}</FriendName>
      </MemberDiv>
      <BellDiv>
        <IoIosNotificationsOutline color="#5e43ff" size="20" />
      </BellDiv>
    </Card>
  );
};
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 2px 5px #b8b8b8;
  width: 80vw;
  margin: 2vh auto;
  border-radius: 10px;
  height: 6vh;
`;
const MemberImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 10px;
  object-fit: cover;
`;
const StyledProfileDiv = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-left: 10px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MemberHour = styled.div`
  font-size: 12px;
  color: gray;
  margin: 0 10px;
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
