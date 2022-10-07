import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { resetLayout, setLayout } from "@redux/layout";
import UserProfile from "@components/UserProfile";
import GroupCard from "@components/cards/GroupCard";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { getAllGroupList } from "@apis/group/group";
import { userApis } from "../../apis/auth";
import ChallengeGroupCard from "@components/cards/ChallengeGroupCard";

const Main = () => {
  const principal = useSelector((state) => state.auth.principal, shallowEqual);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [myGroupMembers, setMyGroupMembers] = useState([]);
  const [countMembers, setCountMembers] = useState([]);
  const [groupList, setGroupList] = useState([]);
  const [myInfo, setMyInfo] = useState("");
  const [nullMsg, setNullMsg] = useState("");
  const [toggleGroup, setToggleGroup] = useState([]);
  useEffect(() => {
    dispatch(setLayout({ isInvert: true }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);
  const [crew, setCrew] = useState();
  useEffect(() => {
    userApis
      .myProfile()
      .then((res) => {
        setMyInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
    getAllGroupList().then((res) => {
      setCrew(res.data);
    });
    userApis.getMyMembers().then((res) => {
      setMyGroupMembers(res);
      if (res.code === "PARTICIPATION_NOT_FOUND") {
        setNullMsg(res.message);
        return;
      }
      const getId = [...new Set(res.map((group) => group.groupId))];
      const countMember = {};
      const getGroupId = res.map((member) => member.groupId);
      getGroupId.forEach(
        (members) => (countMember[members] = (countMember[members] || 0) + 1)
      );
      const arr = Object.entries(countMember);
      setCountMembers(arr);
      getId.map((id) =>
        userApis.getGroupDetail(id).then((res) => {
          setGroupList((prev) => [...prev, res.data]);
        })
      );
    });
  }, []);
  useEffect(() => {});
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#5e43ff",
      }}
    >
      <UserProfile myInfo={principal} />
      <StyledBottomDiv>
        <StyledGroup>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2>{principal?.nickname}님 이런 그룹은 어떠세요?</h2>
            <IoIosArrowForward
              style={{ fontSize: "20px", color: "#DE4242", cursor: "pointer" }}
              onClick={() => {
                navigate("/group");
              }}
            />
          </div>
        </StyledGroup>
        <StyledGroupPhotoBox>
          {crew?.map((item, idx) => (
            <GroupCard
              {...item}
              imgUrl={item?.imageId}
              key={idx}
              groupId={item.groupId}
              onClick={() => {
                navigate(`/group/${item?.groupId}`);
              }}
            />
          ))}
        </StyledGroupPhotoBox>
        <StyledChallengeTitle>함께 챌린지를 완수해요!</StyledChallengeTitle>
        <StyledChallenge>
          {groupList?.length > 0 ? (
            groupList?.map((group, idx) => (
              <ChallengeGroupCard
                key={idx}
                groupList={groupList}
                {...group}
                countMembers={countMembers}
                toggleGroup={toggleGroup}
                setToggleGroup={setToggleGroup}
                myGroupMembers={myGroupMembers}
                myInfo={myInfo}
              />
            ))
          ) : (
            <StyledNullMsg>{nullMsg}</StyledNullMsg>
          )}
        </StyledChallenge>
        <StyledDragLine></StyledDragLine>
      </StyledBottomDiv>
    </div>
  );
};

export default Main;

const StyledBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0 30px 0;
  position: relative;
  background-color: #fff;
  border-radius: 30px 30px 0 0;
`;
const StyledDragLine = styled.div`
  position: absolute;
  top: 2vh;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 4px;
  border-radius: 25px;
  background-color: ${({ theme }) => {
    return theme.color.lightgray;
  }};
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0 30px 0;
  position: relative;
  background-color: #fff;
  border-radius: 30px 30px 0 0;

  & > div {
    margin: 35px 20px 0 20px;
    & > h2 {
      font-weight: 700;
      font-size: 20px;
      margin: 0;
      line-height: 24px;
    }
  }
`;
const StyledGroupPhotoBox = styled.div`
  display: flex;
  width: 100vw;
  height: 12.5rem;
  margin-bottom: 70px;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const StyledChallenge = styled.div`
  /* position: absolute; */
  /* top: 35vh; */
  width: 100vw;
  margin: 0 auto;
  overflow-y: scroll;
`;
const StyledChallengeTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
`;

const StyledNullMsg = styled.div`
  display: flex;
  margin: 50px;
  justify-content: center;
`;
