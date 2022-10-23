import styled from "styled-components";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { fileUrlHost } from "../../apis/config";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import ChallengeCard from "./ChallengeCard";
import { useNavigate } from "react-router";
const ChallengeGroupCard = ({
  title,
  imageId,
  setToggleGroup,
  toggleGroup,
  myGroupMembers,
  groupId,
  groupList,
  myInfo,
  sentNotification,
  setSentNotification,
}) => {
  const navigate = useNavigate();
  const onClickRoute = () => {
    navigate("/group/" + groupId);
  };

  const onClickToggle = () => {
    if (toggleGroup === "") {
      setToggleGroup(groupId);
    } else if (toggleGroup !== groupId) {
      setToggleGroup(groupId);
    } else {
      setToggleGroup("");
    }
  };
  const authId = myInfo?.memberId;
  return (
    <GroupDiv>
      <Card>
        <CrewDiv onClick={onClickRoute}>
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
        <BellDiv onClick={onClickToggle}>
          {toggleGroup === groupId ? (
            <RiArrowDropUpLine color="#5e43ff" size="20" />
          ) : (
            <RiArrowDropDownLine color="#5e43ff" size="20" />
          )}
        </BellDiv>
      </Card>
      {toggleGroup === groupId && (
        <MembersDiv>
          {toggleGroup === groupId
            ? myGroupMembers?.map(
                (item, idx) =>
                  item.groupId === groupId &&
                  item.member.memberId !== myInfo?.memberId && (
                    <ChallengeCard
                      key={idx}
                      {...item.member}
                      authId={authId}
                      groupId={groupId}
                      sentNotification={sentNotification}
                      setSentNotification={setSentNotification}
                    />
                  )
              )
            : null}
        </MembersDiv>
      )}
    </GroupDiv>
  );
};

const GroupDiv = styled.div`
  z-index: 100;
`

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 2px 5px #b8b8b8;
  background-color: white;
  width: 90vw;
  margin: 2vh auto;
  border-radius: 10px;
  height: 8vh;
  z-index: 10;
`;
const CrewImg = styled.img`
  height: 55px;
  width: 55px;
  margin: 0 10px;
  border-radius: 10px;
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
  margin-left: 10px;
`;
const BellDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  width: 40px;
`;

const MembersDiv = styled.div`
  animation: dropdown 0.4s ease-in-out;
  @keyframes dropdown {
    from {
      transform: translateY(-5.5%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;

export default React.memo(ChallengeGroupCard);
