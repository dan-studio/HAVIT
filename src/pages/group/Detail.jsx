import styled from "styled-components";
import {motion} from "framer-motion";
import CrewInfo from "@components/cards/CrewInfo";
import { Divider, Modal } from "antd";
import List from "@components/list/MemberList";
import PhotoList from "@components/list/PhotoList";
import React , { useState }from "react";
import { useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "@components/button/PrimaryButton";
import SubButton from "@components/button/SubButton";
import { getGroupDetail, getMyGroupList, groupParticipating } from "../../apis/group/group";

// /grup
const GroupDetail = () => {
  const { groupId } = useParams();
  const [detail, setDetail] = useState();
  const [isParticipate, setIsParticipate] = useState(false);
  const navigate = useNavigate();

  React.useEffect(()=>{
    getGroupDetail(groupId).then((res)=>{
        setDetail(res.data);
    }).catch(err=>{});
    getMyGroupList().then(res=>{
        const result = res.data.filter((el)=>(el?.groupId === groupId));
        if(result.length <= 0)setIsParticipate(false);
        else setIsParticipate(true);
    }).catch(err=>{
        setIsParticipate(false);
    })
  },[])
  const leaveGroup = ()=>{
    // groupParticipating(groupId)
  }
  const joinGroup = ()=>{
    Modal.confirm({
        okText:"가입하기", 
        cancelText:"취소하기",
        content:<>
            {detail?.title}와 정말 함께 하시겠습니까?
        </>,
        // onOk:()=>{
        //     get
        // }
    })
  }
  return (
    <Container>
      <CrewInfo type="detail" imgUrl={detail?.imageId} leaderName={detail?.leaderName} crewName={detail?.crewName} {...detail}></CrewInfo>
      <StyledGroupDesc value={detail?.content} disabled></StyledGroupDesc>
      <Divider style={{ margin: "0" }}></Divider>
      <List data={{ title: "맴버들" }} {...detail} />
      <PhotoList groupId={groupId} list={detail?.certifyList}></PhotoList>
      <StyledButtonDiv>
        {isParticipate ? (
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
  align-items:center;
  padding:1rem;
  gap: 1rem 0;
`;
const StyledButtonDiv = styled.div`
  display: flex;
  margin:2rem 0;
  align-items: center;
  justify-content: center;
`;
const StyledGroupDesc = styled.textarea`
  margin: 0 auto;
  width: 100%;
  outline:none;
  border:none;
  resize: none;
  background: transparent;
  padding: 1px 6px;
  height:190px;
`;
