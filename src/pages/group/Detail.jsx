import styled from "styled-components";
import CrewInfo from "@components/cards/CrewInfo";
import { Divider, Modal } from "antd";
import List from "@components/list/MemberList";
import PhotoList from "@components/list/PhotoList";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "@components/button/PrimaryButton";
import SubButton from "@components/button/SubButton";
import {
  getGroupDetail,
  getMyGroupList,
  groupParticipating,
} from "../../apis/group/group";
import { userApis } from "../../apis/auth";
import { resetLayout, setLayout } from "../../redux/layout";
import { useDispatch } from "react-redux";

// /grup
const GroupDetail = () => {
  const { groupId } = useParams();
  const [detail, setDetail] = useState();
  const [myInfo, setMyInfo] = useState();
  const [isParticipate, setIsParticipate] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(detail);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setLayout({ smallType: true }));
    return () => {
      dispatch(resetLayout());
    };
  });

  React.useEffect(() => {
    getGroupDetail(groupId)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => {});
    getMyGroupList()
      .then((res) => {
        const result = res.data.find((el) => el?.groupId === groupId);
        if (result.length <= 0) setIsParticipate(false);
        else setIsParticipate(true);
      })
      .catch((err) => {
        setIsParticipate(false);
      });
    userApis
      .myProfile()
      .then((res) => {
        setMyInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const leaveGroup = () => {
    Modal.confirm({
      okText: "탈퇴하기",
      cancelText: "취소하기",
      content: <>{detail?.title}에서 정말 탈퇴하시겠습니까?</>,
      onOk: () => {
        userApis.leaveGroup(groupId);
        setDetail((prev) => {
          return {
            ...prev,
            memberList: prev.memberList.filter(
              (member) => member.memberId !== myInfo.memberId
            ),
          };
        });
      },
    });
  };
  const joinGroup = () => {
    Modal.confirm({
      okText: "가입하기",
      cancelText: "취소하기",
      content: <>{detail?.title}와 정말 함께하시겠습니까?</>,
      onOk: () => {
        userApis.joinGroup(groupId);
        setDetail((prev) => {
          return {
            ...prev,
            memberList: [...prev.memberList, myInfo],
          };
        });
      },
    });
  };
  const isMember = detail?.memberList?.find(
    (member) => member?.memberId === myInfo?.memberId
  );
  const leader = detail?.writer;
  return (
    <Container>
      <CrewInfo
        type="detail"
        imgUrl={detail?.imageId}
        leaderName={detail?.leaderName}
        crewName={detail?.crewName}
        {...detail}
      ></CrewInfo>
      <StyledGroupDesc value={detail?.content} disabled></StyledGroupDesc>
      <Divider style={{ margin: "0" }}></Divider>
      <List data={{ title: "맴버들" }} {...detail} leader={leader} />
      <PhotoList
        height={"230"}
        groupId={groupId}
        list={detail?.certifyList}
        isMember={isMember}
      ></PhotoList>
      <StyledButtonDiv>
        <div>
          {leader?.memberId === myInfo?.memberId ? (
            <PrimaryButton
              buttonName={"수정하기"}
              onClick={() => {
                navigate("/group/edit/" + groupId);
              }}
            />
          ) : isMember ? (
            <PrimaryButton buttonName={"탈퇴하기"} onClick={leaveGroup} />
          ) : (
            <PrimaryButton buttonName={"가입하기"} onClick={joinGroup} />
          )}
          <SubButton
            buttonName={"뒤로가기"}
            onClick={() => {
              navigate(state || -1);
            }}
          />
        </div>
      </StyledButtonDiv>
    </Container>
  );
};

export default React.memo(GroupDetail);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem 0;
`;
const StyledButtonDiv = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  margin: 0;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  div{
    margin: .75rem;
  }
`;
const StyledGroupDesc = styled.textarea`
  margin: 0 auto;
  width: 100%;
  outline: none;
  border: none;
  resize: none;
  background: transparent;
  padding: 1px 6px;
  height: 100px;
`;
