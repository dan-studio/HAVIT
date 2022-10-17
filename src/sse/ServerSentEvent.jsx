import React, { useEffect } from "react";
import { userApis } from "../apis/auth";
import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const ServerSentEvent = ({ authId, setNotifiList }) => {
  const url = process.env.REACT_APP_API_HOST + "/subscribe/" + authId;
  const [notifications, setNotifications] = useState("");

  const noti = useSelector((state) => state.noti.noti);
  const sse = new EventSource(url);
  // sse.addEventListener("open", (e) => {
  //   // setNotifications(noti);
  //   console.log(e)
  // });
  sse.onopen = (e) => {
    const res = e;
    console.log(res);
  };
  sse.onmessage = (e) => {
    console.log("message sent");
  };
  sse.addEventListener("error", () => {
    sse.close();
  });
  sse.addEventListener("close", () => {
    sse.close();
  });
  // sse.addEventListener("open", () => {
  //   console.log("open")
  // });
  // sse.onerror = function (e) {
  //   console.log(e);
  // };
  const count = notifications?.unreadCount;
  return <StyledDiv>{count}</StyledDiv>;
};

export default ServerSentEvent;

const StyledDiv = styled.div`
  border-radius: 50%;
  height: 15px;
  min-width: 15px;
  background-color: #5e43ff;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;
