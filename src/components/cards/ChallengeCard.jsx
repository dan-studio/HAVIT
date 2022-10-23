import styled from "styled-components";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { fileUrlHost } from "../../apis/config";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { userApis } from "../../apis/auth";
const ChallengeCard = ({ memberId, nickname, imageId, modifiedAt, authId, groupId, sentNotification, setSentNotification}) => {
  const navigate = useNavigate()
  const lastChallenged = modifiedAt?.slice(0, 16);
  const [receiver , setReceiver] = useState(true)
  const toMemberPage = () => {
    if (memberId === authId) {
      navigate("/mypage");
    } else {
      navigate("/mypage/" + memberId);
    }
  };

  const sendNotification = () => {
    const data = {
      memberId,
      groupId
    }
    setSentNotification(true)
    setReceiver(false)
    setTimeout(()=>{
      setSentNotification(false)
      userApis.sendNotification(data).then(res=>{
      }).catch(err=>{
        if(err.code==="ERR_BAD_RESPONSE"){
          alert("알림 전송에 실패했습니다.\n 잠시후 다시 시도해주세요.")
        }
      })
    },3000)
  }
  return (
    <Card>
      <MemberDiv>
        {imageId ? (
          <MemberImg src={fileUrlHost(imageId)} alt="" onClick={toMemberPage}/>
        ) : (
          <StyledProfileDiv onClick={toMemberPage}>
            <UserOutlined style={{ fontSize: "20px" }}></UserOutlined>
          </StyledProfileDiv>
        )}
        <MemberHour>{lastChallenged}</MemberHour>
        <FriendName>{nickname}</FriendName>
      </MemberDiv>
      <BellDiv>
        {receiver&&
        <IoIosNotificationsOutline color="#5e43ff" size="20" onClick={sendNotification}/>
        }
      </BellDiv>
    </Card>
  );
};
const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
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

export default React.memo(ChallengeCard);