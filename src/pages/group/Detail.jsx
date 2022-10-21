import styled from "styled-components";
import CrewInfo from "@components/cards/CrewInfo";
import { Divider, Modal } from "antd";
import List from "@components/list/MemberList";
import PhotoList from "@components/list/PhotoList";
import React, { useCallback, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "@components/button/PrimaryButton";
import SubButton from "@components/button/SubButton";
import {
  getGroupDetail,
  getMyGroupList,
  groupParticipating,
} from "@apis/group/group";
import { userApis } from "@apis/auth";
import { resetLayout, setLayout } from "@redux/layout";
import { selectTag } from "@redux/tags";
import { useDispatch, useSelector } from "react-redux";
import DevButton from "@components/button/DevButton";
import { tagSlice } from "../../redux/tags";
import GoBackButton from "../../components/button/GoBackButton";

// /grup
const GroupDetail = () => {
  const { groupId } = useParams();
  const [detail, setDetail] = useState();
  const [isParticipate, setIsParticipate] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const descRef = useRef()
  const myInfo = useSelector((state) => state.auth.principal);
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
      .catch((err) => {
        console.log(err);
      });
    getMyGroupList()
      .then((res) => {
        const result = res.data.find((el) => el?.groupId === groupId);
        if (result.length <= 0) setIsParticipate(false);
        else setIsParticipate(true);
      })
      .catch((err) => {
        setIsParticipate(false);
      });
  }, []);

  const leaveGroup = () => {
    Modal.confirm({
      okText: "탈퇴하기",
      cancelText: "취소하기",
      content: <>{detail?.title}에서 정말 탈퇴하시겠습니까?</>,
      onOk: () => {
        userApis.leaveGroup(groupId);
        <>탈퇴 되었습니다!</>;
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
  const onTagClick = (tag) => {
    navigate("/group");
    dispatch(selectTag(tag));
  };

  const isMember = detail?.memberList?.find(
    (member) => member?.memberId === myInfo?.memberId
  );
  
  const leader = detail?.writer;
  return (
    <StyledDiv>
      <ButtonDiv>
        <GoBackButton title={"뒤로가기"} to={state || -1}></GoBackButton>
      </ButtonDiv>
      <Container>
        <CrewInfo
          type="detail"
          imgUrl={detail?.imageId}
          {...detail}
          onTagClick={onTagClick}
        ></CrewInfo>
        <StyledGroupDesc ref={descRef}>{detail?.content}</StyledGroupDesc>
        {leader?.memberId === myInfo?.memberId ? (
          <PrimaryButton
            buttonName={"수정하기"}
            onClick={() => {
              navigate("/group/edit/" + groupId);
            }}
          />
        ) : isMember ? (
          <SubButton buttonName={"탈퇴하기"} onClick={leaveGroup} />
        ) : (
          <PrimaryButton buttonName={"가입하기"} onClick={joinGroup} />
        )}
        <Divider style={{ margin: "0" }}></Divider>
        <List data={{ title: "맴버들" }} {...detail} leader={leader} />
        <PhotoList
          height={"230"}
          groupId={groupId}
          list={detail?.certifyList}
          isMember={isMember}
        ></PhotoList>
      </Container>
    </StyledDiv>
  );
};

export default React.memo(GroupDetail);
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem 0;
`;
const StyledGroupDesc = styled.div`
  margin: 0 auto;
  width: 100%;
  outline: none;
  border: none;
  resize: none;
  background: transparent;
  padding: 1px 6px;
  color: #3a3a3a;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  .editButton {
    font-size: 11px;
  }
`;
