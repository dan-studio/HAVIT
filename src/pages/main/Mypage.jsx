import styled from "styled-components";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import React, { useEffect, useState } from "react";
import { resetLayout, setLayout } from "@redux/layout";
import MyProfileCard from "@components/profile/MyProfileCard";
import useSse from "@hooks/useSse";
import Alert from "@components/alert/Alert";
import NotificationList from "@components/alert/NotificationList";

const Mypage = () => {
  const principal = useSelector((state) => state.auth.principal, shallowEqual);
  const dispatch = useDispatch();
  const myInfo = useSelector((state) => state.auth.principal);
  const [readAlert, setReadAlert] = useState(false);
  const [unreadCount, setUnreadCount] = useState("");
  const getCount = (data) => {
    setUnreadCount(data);
  };
  useEffect(() => {
    dispatch(setLayout({ isInvert: false }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

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
      <MyProfileCard
        myInfo={principal}
        certifies={certifies}
        getCount={getCount}
      />
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
      <NotificationList setReadAlert={setReadAlert} unreadCount={unreadCount} />
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
  @keyframes dropdown {
    0% {
      top: -10%;
    }
    30% {
      top: 0%;
    }
    85% {
      top: 0%;
    }
    100% {
      top: -10%;
    }
  }
  @keyframes progress {
    25% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

export default Mypage;
