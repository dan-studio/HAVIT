import React, { useState } from "react";
import styled from "styled-components";
import { userApis } from "../../apis/auth";

const NotificationReceived = ({
  content,
  createdAt,
  groupUrl,
  notificationId,
  read,
  setReadAlert,
  setNotifiList,
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
      setRead((prev) => {
        return {
          ...prev,
          isRead:true
        };
      });
    });
    setReadAlert(true);
    setTimeout(() => {
      setReadAlert(false);
      userApis.DeleteNotification(notificationId).then((res) => {
        setNotifiList((prev) =>
          prev.filter((noti) => noti.notificationId !== notificationId)
        );
      });
    }, 3000);
  };
  return (
    <div onClick={readNotification}>
      <div>{content}</div>
      <div>{yyyy_mm_dd()}</div>
      <div>{isRead ? "읽음" : "읽지 않음"}</div>
    </div>
  );
};

export default NotificationReceived;
