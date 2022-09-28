import styled from "styled-components";
import CrewInfo from "@components/cards/CrewInfo";
import { Divider } from "antd";
import List from "@components/list/MemberList";
import PhotoList from "@components/list/PhotoList";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userApis } from "../../apis/auth";
import { useState } from "react";
import PrimaryButton from "../../components/button/PrimaryButton";
import SubButton from "../../components/button/SubButton";
import useDecodeToken from "../../hooks/useDecodeToken";

// /grup
const GroupDetail = () => {
  const [detail, setDetail] = useState();
  const navigate = useNavigate();
  const { groupId } = useParams();
  useEffect(() => {
    userApis
      .getGroupDetail(groupId)
      .then((res) => {
        setDetail(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const getToken = localStorage.getItem("APP_TOKEN_DATA");
  const accessToken = JSON.parse(getToken).access_token;
  const decode = useDecodeToken(accessToken);
  const joinGroup = () => {
    userApis.joinGroup(groupId)
      // setDetail((prev) => {
      //   return {
      //     ...prev,
      //     memberList: userApis.joinGroup(groupId)
      //   };
      // });
    alert("가입이 완료되었습니다");
  };
  const leaveGroup = () => {
    userApis.leaveGroup(groupId);
    alert("탈퇴 처리되었습니다");
    //새로고침 없이 탈퇴시 멤버리스트에서 제거
    // setDetail((prev) => {
    //   return {
    //     ...prev,
    //     memberList: prev.memberList.filter(
    //       (member) => member.memberId !== decode
    //     ),
    //   };
    // });
  };
  const members = detail?.memberList?.find(
    (member) => member.memberId === decode
  );
  return (
    <Container id={"content"}>
      <CrewInfo type="detail" {...detail}></CrewInfo>
      <StyledGroupDesc>{detail?.content}</StyledGroupDesc>
      <Divider style={{ margin: "0" }}></Divider>
      <List data={{ title: "맴버들" }} {...detail} />
      <PhotoList groupId={groupId}></PhotoList>
      <StyledButtonDiv>
        {members ? (
          <PrimaryButton buttonName={"탈퇴하기"} onClick={leaveGroup} />
        ) : (
          <PrimaryButton buttonName={"가입하기"} onClick={joinGroup} />
        )}
        <SubButton
          buttonName={"뒤로가기"}
          onClick={() => {
            navigate(-1);
          }}
        />
      </StyledButtonDiv>
    </Container>
  );
};

export default React.memo(GroupDetail);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
`;
const StyledButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledGroupDesc = styled.div`
  margin: 0 auto;
  width: 90%;
`;
