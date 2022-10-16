import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { fileUrlHost } from "../../apis/config";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { userApis } from "../../apis/auth";
import { getToken } from "../../apis/config";





const ChallengeCard = ({ memberId, nickname, imageId, modifiedAt, authId, groupId, sentNotification, setSentNotification}) => {
  const navigate = useNavigate()
  const lastChallenged = modifiedAt?.slice(0, 16);
  const [receiver , setReceiver] = useState(true)
  const [profile , setProfile] = useState()

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
        // console.log(res)
      })
    },3000)
  }
  const [notification, setNotification] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
        userApis
        .myProfile()
        .then(res=>{
          setProfile(res.memberId)
        })

  }, []);
  // console.log(profile)
  // console.log(process.env.REACT_APP_API_HOST + "/subscribe/" + profile)

  const source = new EventSource(
    process.env.REACT_APP_API_HOST + "/subscribe/"+profile ,  
  );

  // source.onmessage = (e) => {
  //     setNotification(e.data);
  //     // setNotification((prev) => [JSON.parse(e.data)]);
  //     setAlertOpen(true);
  //     console.log(notification)
  //     console.log(e.data)
  // };

  // console.log(source.onmessage)

  // source.addEventListener("error", function (e) {
  //   if (e) {
  //     source.close();
  //   }
  // });


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

const StyledTimer = styled.div`
z-index: 99;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(255,255,255, 0.4);
  height: 30px;
  font-weight: bold;
  color: #5e43ff;
  span {
    position: fixed;
  }
  .progressBar {
    display: flex;
    flex-direction: column;
    height: 3px;
    width: 35%;
    transform: translateY(15px);
  }
  .gauge{
    background-color: #2cdf3d;
    height:3px;
    width: 100%;
    animation: progress 3s ease;
  }
  @keyframes progress{
    from{
      width:0%
    }
    to{
      width:100%
    }
  }
`;
export default ChallengeCard;
