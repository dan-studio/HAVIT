import React, { useEffect } from "react";
import { userApis } from "../apis/auth";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import notification from "../redux/notification";
const ServerSentEvent = ({ authId }) => {
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState("");
  const noti = useSelector((state) => state.notification.notification);
useEffect(()=>{
  setNotifications(noti?.unreadCount)
},[noti])
  // const url = process.env.REACT_APP_API_HOST + "/subscribe/" + authId; //authId=로그인한 사용자 ID
  // const sse = new EventSource(url);
  // const count = noti?.unreadCount;
  // // console.log(count)
  // useEffect(() => {
  //   sse.addEventListener("sse", (e) => {
  //     console.log("sse connected")
  //     setNotifications(count)
  //     sse.close()
  //     console.log("sse closed")
  //   });
  // }, []);

  // sse.onopen = (e) => {
  //   const res = e;
  //   console.log(res);
  // };

  // sse.onmessage = (e) => {
  //   var data = JSON.parse(e.data)
  //   console.log(data.id, data.msg)
  // };
  // sse.onerror = (e) => {
  //   sse.close();
  // };
  // sse.addEventListener("close", () => {
  //   sse.close();
  // });

  // sse.addEventListener("ping", (event) => {
  //   const newElement = document.createElement("li");
  //   const eventList = document.getElementById("list");
  //   const time = JSON.parse(event.data).time;
  //   newElement.textContent = `ping at ${time}`;
  //   eventList.appendChild(newElement);
  // });

  // sse.addEventListener("open", () => {
  //   console.log("open")
  // });
  // sse.onerror = function (e) {
  //   console.log(e);
  // };
  return <StyledDiv>{notifications}</StyledDiv>;
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
