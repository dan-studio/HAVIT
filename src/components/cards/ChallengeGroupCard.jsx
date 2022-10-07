import styled from "styled-components";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { fileUrlHost } from "../../apis/config";
import { RiArrowDropDownLine } from "react-icons/ri";
import ChallengeCard from "./ChallengeCard";
const ChallengeGroupCard = ({
  title,
  imageId,
  countMembers,
  setToggleGroup,
  toggleGroup,
  myGroupMembers,
  groupId,
  groupList,
  myInfo,
}) => {
  const onClick = () => {
    if (toggleGroup === "") {
      setToggleGroup(groupId);
    } else if (toggleGroup !== groupId) {
      setToggleGroup(groupId);
    } else {
      setToggleGroup("");
    }
  };
  console.log(myGroupMembers);
  return (
    <>
      <Card onClick={onClick}>
        <CrewDiv>
          {imageId ? (
            <CrewImg src={fileUrlHost(imageId)} alt="" />
          ) : (
            <StyledProfileDiv>
              <UserOutlined style={{ fontSize: "20px" }}></UserOutlined>
            </StyledProfileDiv>
          )}
          <CrewTitle>{title}</CrewTitle>
          <FriendName>{}</FriendName>
        </CrewDiv>
        <BellDiv>
          <RiArrowDropDownLine color="#5e43ff" size="20" />
        </BellDiv>
      </Card>
      {toggleGroup === groupId
        ? myGroupMembers?.map(
            (item, idx) =>
              item.groupId === groupId &&
              item.member.memberId !== myInfo?.memberId && (
                <ChallengeCard key={idx} {...item.member} />
              )
          )
        : null}
    </>
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
const CrewImg = styled.img`
  height: 40px;
  width: 40px;
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
const CrewTitle = styled.div`
  font-size: 14px;
  margin: 0 10px;
`;

const FriendName = styled.div`
  font-weight: 600;
`;

const CrewDiv = styled.div`
  display: flex;
  align-items: center;
`;
const BellDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
export default ChallengeGroupCard;
