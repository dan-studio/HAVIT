import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { userApis } from "../../apis/auth";
import { notification } from "../../redux/notification";
import NotificationReceived from "./NotificationReceived";

const NotificationList = ({ setReadAlert, unreadCount }) => {
  const [showNotification, setShowNotification] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const notificationToggle = () => {
    setShowNotification(!showNotification);
  };

  const getData = async() => {
    await userApis.getNotification().then((res) => {
      setNotifications(res)
    });
  };

  useEffect(() => {
    getData();
  }, [unreadCount]);

  return (
    <StyledAlert>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 onClick={notificationToggle}>알림 ({unreadCount}) &nbsp;</h2>
        {notification.unreadCount > 0 && <div className="notiSign"></div>}
        {showNotification ? <span>▲</span> : <span>▼</span>}
      </div>
      <NotificationsDiv>
        {showNotification &&
          notifications?.notificationList?.map((notification) => (
            <NotificationReceived
              key={notification?.notificationId}
              {...notification}
              setReadAlert={setReadAlert}
              setNotifications={setNotifications}
            />
          ))}
      </NotificationsDiv>
    </StyledAlert>
  );
};
export default NotificationList;

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

const NotificationsDiv = styled.div`
  animation: dropdown 0.4s ease-in-out;
  @keyframes dropdown {
    from {
      transform: translateY(-1.5%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;
