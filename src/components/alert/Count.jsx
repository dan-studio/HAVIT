import React, { useCallback, useEffect } from "react";
import { userApis } from "@apis/auth";
import { useState } from "react";
import styled from "styled-components";
const Count = ({ getCount }) => {
  const [count, setCount] = useState("");
  const unreadCount = () => {
    userApis.getNotification().then((res) => {
      const unread = res.unreadCount;
      setCount(unread);
      getCount(unread)
    });
  };

  useEffect(() => {
    unreadCount();
  });

  return <StyledDiv>{count}</StyledDiv>;
};

export default Count;

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
