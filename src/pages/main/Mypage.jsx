import styled from "styled-components";
import Profile from "@components/cards/Profile";
import CrewInfo from "@components/cards/CrewInfo";
import AlertUser from "@components/cards/AlertUser";
import { userApis } from "../../apis/auth";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect, useState } from "react";
import { resetLayout, setLayout } from "@redux/layout";
import MyProfileCard from "@components/profile/MyProfileCard";
import { useNavigate } from "react-router-dom";
import NotificationReceived from "../../components/cards/NotificationReceived";

const Mypage = () => {
  const principal = useSelector((state) => state.auth.principal, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [readAlert, setReadAlert] = useState(false);
  const [notifiList, setNotifiList] = useState([]);
  const [friends, setFriends] = useState([]);
  const myInfo = useSelector(state=>state.auth.principal)
  const [showNotification, setShowNotification] = useState(false);

  const noti = useSelector((state) => state.noti.noti);

  // 레이아웃 관련 설정
  useEffect(() => {
    dispatch(setLayout({ isInvert: false }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

  useEffect(() => {
   setNotifiList(noti.notificationList)
  }, []);
 

  const notificationToggle = () => {
    setShowNotification(!showNotification);
  };
  const certifies = myInfo?.certifyList?.length;
  return (
    <StyledWrap>
      {/* 프로필 */}
      <MyProfileCard myInfo={principal} certifies={certifies}/>
        {readAlert && (
          <StyledTimer>
            <span>알림이 삭제되었습니다.</span>
            <div className="progressBar">
              <div className="gauge"></div>
            </div>
          </StyledTimer>
        )}
  
      {/* 알림 */}
      <StyledAlert>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2 onClick={notificationToggle}>
            알림 ({notifiList.length}) &nbsp;
          </h2>
          {notifiList.length > 0 && <div className="notiSign"></div>}
          {showNotification ? <span>▲</span> : <span>▼</span>}
        </div>
        {showNotification &&
          notifiList?.map((notification, idx) => (
            <NotificationReceived
              key={idx}
              {...notification}
              setReadAlert={setReadAlert}
              setNotifiList={setNotifiList}
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
    margin: 35px 20px 0 20px;
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
  span {
    position: fixed;
  }
  .progressBar {
    display: flex;
    flex-direction: column;
    height: 3px;
    width: 90%;
    transform: translateY(15px);
  }
  .gauge {
    background-color: #2cdf3d;
    height: 3px;
    width: 100%;
    animation: progress 3s ease;
  }
  @keyframes progress {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;
export default Mypage;
