import styled from "styled-components";
import Profile from "@components/cards/Profile";
import CrewInfo from "@components/cards/CrewInfo";
import AlertUser from "@components/cards/AlertUser";
import { userApis } from "../../apis/auth";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import React, { useEffect, useState } from "react";
import { resetLayout, setLayout } from "@redux/layout";
import MyProfileCard from "@components/profile/MyProfileCard";
import { useNavigate } from "react-router-dom";
import NotificationReceived from "../../components/cards/NotificationReceived";
import useSse from "../../hooks/useSse";
import Alert from "../../components/alert/Alert";

const Mypage = () => {
  const principal = useSelector((state) => state.auth.principal, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [readAlert, setReadAlert] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState([])
  const [friends, setFriends] = useState([]);
  const myInfo = useSelector((state) => state.auth.principal);
  const [showNotification, setShowNotification] = useState(true);
  // console.log(noti)
  // 레이아웃 관련 설정
  const count = notifications?.unreadCount
  useEffect(() => {
    dispatch(setLayout({ isInvert: false }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

  const getCount = (count) => {
    setUnreadCount(count)
  }
  
  useEffect(() => {
    const getData = async() => {
      await userApis.getNotification().then(res=>{
        setNotifications(res)
      })
    }
    getData()
  }, [unreadCount]);

  const notificationToggle = () => {
    setShowNotification(!showNotification);
  };

  // 알림 팝업
  const [alertPopUp, setAlertPopUp] = useState(false);
  const [popUpData, popUp] = useSse();
  useEffect(() => {
    setAlertPopUp(popUp);
  }, [popUpData]);
  const message = () => {
    const data = JSON.parse(popUpData);
    if (popUpData) {
      return data.content;
    }
  };
  //
  const certifies = myInfo?.certifyList?.length;
  return (
    <StyledWrap>
      {/* 프로필 */}
      <MyProfileCard myInfo={principal} certifies={certifies} getCount={getCount}/>
      {readAlert && (
        <StyledTimer>
          <span>알림이 삭제되었습니다.</span>
          <div className="progressBar">
            <div className="gauge"></div>
          </div>
        </StyledTimer>
      )}
      {alertPopUp && <Alert message={message} setAlertPopUp={setAlertPopUp} />}
      {/* 알림 */}
      <StyledAlert>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2 onClick={notificationToggle}>
            알림 ({notifications?.unreadCount}) &nbsp;
          </h2>
          {notifications?.unreadCount > 0 && <div className="notiSign"></div>}
          {showNotification ? <span>▲</span> : <span>▼</span>}
        </div>
        {showNotification &&
          notifications?.notificationList?.map((notification) => (
            <NotificationReceived
              key={notification?.notificationId}
              {...notification}
              setReadAlert={setReadAlert}
              setNotifications={setNotifications}
            />
          ))}
        {friends &&
          friends.map((item, idx) => <AlertUser {...item} key={idx} />)}
      </StyledAlert>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  position: relative;
`;

const StyledAlert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0;
  /* height: 100vh; */
  background-color: #ffffff;
  border-radius: 30px 30px 0 0;
  & > div {
    margin: 15px 20px 0 20px;
    & > h2 {
      font-weight: 700;
      font-size: 20px;
      margin: 0;
      line-height: 24px;
    }
  }
  .notiSign {
    height: 8px;
    width: 8px;
    background-color: #2cdf3d;
    border-radius: 50%;
    position: absolute;
    transform: translate(-10px, -10px);
  }
`;
const StyledTimer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  right: 5px;
  width: 40%;
  background-color: #5e43ff;
  height: 50px;
  font-weight: bold;
  color: #ffffff;
  z-index: 99;
  box-shadow: 10px 5px 20px #1f1f1f8c;
  border-radius: 10px;
  animation: dropdown 3s ease-in-out;
  span {
    position: fixed;
  }
  .progressBar {
    display: flex;
    flex-direction: column;
    height: 3px;
    width: 100%;
    transform: translateY(15px);
  }
  .gauge {
    background-color: #2cdf3d;
    height: 3px;
    width: 100%;
    animation: progress 2.5s ease-in-out;
  }
  @keyframes dropdown{
    0%{
      top: -10%
    }
    30%{
      top: 0%
    }
    85%{
      top: 0%
    }
    100%{
      top: -10%
    }
  }
  @keyframes progress {
    25%{
      width: 0%;
    }
    100%{
      width: 100%;
    }
  }
`;export default Mypage;
