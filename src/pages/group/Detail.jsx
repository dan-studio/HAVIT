import styled from "styled-components";
import CrewInfo from "@components/cards/CrewInfo";
import { Divider } from "antd";
import List from "@components/list/MemberList";
import PhotoList from "@components/list/PhotoList";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { userApis } from "../../apis/auth";
import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import SubButton from "../../components/SubButton";

// /grup
const GroupDetail = () => {
  const [detail, setDetail] = useState();
  const { groupId } = useParams();
  console.log(groupId);
  useEffect(() => {
    userApis
      .getGroupDetail(groupId)
      .then((res) => {
        console.log(res);
        setDetail(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(detail);
  return (
    <Container id={"content"}>
      <CrewInfo type="detail" {...detail}></CrewInfo>
      <StyledGroupDesc>
     ✅ 갓생을 희망하지만 마음으로만 실천하고 계시는 분들!
🌞 우리 모두 6시에 일어나기부터 해봅시다!

⏰ 매일 아침 6시 각자 활동 인증샷을 올려주세요!
     </StyledGroupDesc>
      <Divider style={{ margin: "0" }}></Divider>
      <List data={{ title: "맴버들" }} />
      <PhotoList groupId={groupId}></PhotoList>
      <StyledButtonDiv>
        <PrimaryButton buttonName={'가입하기'}/>
        <SubButton buttonName={'뒤로가기'}/>
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
`