import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { userApis } from "@apis/auth";

const NotificationReceived = ({
  content,
  createdAt,
  notificationId,
  read,
  setReadAlert,
  setNotifications,
}) => {
  const createdDate = createdAt.slice(2, 10).split("-");
  const createdTime = createdAt.slice(11, 16);
  const yyyy_mm_dd = () => {
    if (createdDate && createdDate.length > 0) {
      return (
        createdDate[0] +
        "년 " +
        createdDate[1] +
        "월 " +
        createdDate[2] +
        "일 " +
        createdTime
      );
    }
  };
  const [isRead, setRead] = useState(read);
  const readNotification = () => {
    userApis.readNotification(notificationId).then((res) => {
      setRead(res);
    });
    setReadAlert(true);
    setTimeout(() => {
      setReadAlert(false);
      userApis.DeleteNotification(notificationId).then((res) => {
        setNotifications((prev) =>{
          return {
            ...prev,
            notificationList: prev.notificationList.filter((notification)=>
            notification.notificationId!==notificationId
            )
          }
        }
        );
      });
    }, 3000);
  };

  return (
    <StyledDiv onClick={readNotification}>
      <div>{content}</div>
      <div>{yyyy_mm_dd()}</div>
      <div>{isRead ? "읽음" : "읽지 않음"}</div>
    </StyledDiv>
  );
};

export default NotificationReceived;

const StyledDiv = styled.div`
  box-shadow: 1px 2px 5px #b8b8b8;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`