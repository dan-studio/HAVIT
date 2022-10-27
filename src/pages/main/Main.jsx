import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { resetLayout, setLayout } from "@redux/layout";
import MyProfileCard from "@components/profile/MyProfileCard";
import GroupCard from "@components/cards/GroupCard";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { userApis } from "@apis/auth";
import ChallengeGroupCard from "@components/cards/ChallengeGroupCard";
import ReactGA from "react-ga";
import TutorialList from "@components/tutorial/TutorialList";
import useSse from "@hooks/useSse";
import Alert from "../../components/alert/Alert";
const Main = () => {
  const myInfo = useSelector((state) => state.auth.principal, shallowEqual);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [myGroupMembers, setMyGroupMembers] = useState([]);
  const [groupList, setGroupList] = useState([]);
  const [nullMsg, setNullMsg] = useState("");
  const [toggleGroup, setToggleGroup] = useState([]);
  const [myGroups, setMyGroups] = useState([]);
  const [sentNotification, setSentNotification] = useState(false);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  useEffect(() => {
    dispatch(setLayout({ isInvert: true }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

  const [crew, setCrew] = useState();

  useEffect(() => {
    userApis.getAllGroupList().then((res) => {
      setCrew(res);
    });

    userApis.getMyMembers().then((res) => {
      setMyGroupMembers(res);
      if (res.code === "PARTICIPATION_NOT_FOUND") {
        setNullMsg(res.message);
        return;
      }

      const getId = [...new Set(res.map((group) => group.groupId))];
      getId.map((id) =>
        userApis.getGroupDetail(id).then((res) => {
          setGroupList((prev) => [...prev, res.data]);
        })
      );
    });

    userApis.getMyGroup().then((res) => {
      setMyGroups(res.data);
    });
  }, []);
  // 알림 수신 팝업
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

  const myGroupLists = myGroups?.length;

  //최근 생성된 그룹 4개
  const groups = crew?.slice(0, 5);
  const certifies = myInfo?.certifyList?.length;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#5e43ff",
      }}
    >
      {/* 알림 발송 */}
      {sentNotification && (
        <StyledTimer>
          <span>알림이 전송중입니다.</span>
          <div className="progressBar">
            <div className="gauge"></div>
          </div>
        </StyledTimer>
      )}
      {/* 알림 수신 */}
      {alertPopUp && <Alert message={message} setAlertPopUp={setAlertPopUp} />}
      <MyProfileCard myInfo={myInfo} certifies={certifies} />
      {myGroupLists ? null : (
        <NewMemberDiv>
          <div className="message">
            아래의 빨간 화살표를 클릭하여 그룹페이지로 이동해 주세요!
          </div>
        </NewMemberDiv>
      )}

      <StyledBottomDiv>
        <StyledGroup>
          <div
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => {
              navigate("/group");
            }}
          >
            <h2>{myInfo?.nickname}님 이런 그룹은 어떠세요?</h2>
            <IoIosArrowForward
              style={{ fontSize: "20px", color: "#DE4242", cursor: "pointer" }}
            />
          </div>
        </StyledGroup>
        {myGroupLists === 0 || undefined && <TutorialList />}
        <StyledGroupPhotoBox>
          {groups?.map((item, idx) => (
            <GroupCard
              {...item}
              imgUrl={item?.imageId}
              key={idx}
              groupId={item.groupId}
              onClick={() => {
                navigate(`/group/${item?.groupId}`);
              }}
            />
          ))}
        </StyledGroupPhotoBox>
        <StyledChallengeTitle>함께 챌린지를 완수해요!</StyledChallengeTitle>
        <StyledChallenge>
          {groupList?.length > 0 ? (
            groupList?.map((group) => (
              <ChallengeGroupCard
                key={group?.groupId}
                groupList={groupList}
                {...group}
                toggleGroup={toggleGroup}
                setToggleGroup={setToggleGroup}
                myGroupMembers={myGroupMembers}
                myInfo={myInfo}
                sentNotification={sentNotification}
                setSentNotification={setSentNotification}
              />
            ))
          ) : (
            <StyledNullMsg>{nullMsg}</StyledNullMsg>
          )}
        </StyledChallenge>
        <StyledDragLine />
      </StyledBottomDiv>
    </div>
  );
};

export default Main;

const StyledBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0 30px 0;
  position: relative;
  background-color: #fff;
  border-radius: 30px 30px 0 0;
`;
const StyledDragLine = styled.div`
  position: absolute;
  top: 2vh;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 4px;
  border-radius: 25px;
  background-color: ${({ theme }) => {
    return theme.color.lightgray;
  }};
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0 30px 0;
  position: relative;
  background-color: #fff;
  border-radius: 30px 30px 0 0;

  & > div {
    margin: 35px 20px 0 20px;
    & > h2 {
      font-weight: 700;
      font-size: 19px;
      margin: 0;
      line-height: 24px;
    }
  }
`;
const StyledGroupPhotoBox = styled.div`
  display: flex;
  width: 100vw;
  height: 12.5rem;
  margin-bottom: 70px;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const StyledChallenge = styled.div`
  /* position: absolute; */
  /* top: 35vh; */
  width: 100vw;
  margin: 0 auto;
  overflow-y: scroll;
`;
const StyledChallengeTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
`;

const StyledNullMsg = styled.div`
  display: flex;
  margin: 50px;
  justify-content: center;
`;

const NewMemberDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14.5px;
  color: white;
  .message {
    font-weight: bold;
  }
`;

const StyledTimer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  right: 5px;
  width: 50%;
  background-color: white;
  height: 50px;
  font-weight: bold;
  box-shadow: 10px 5px 20px #1f1f1f8c;
  border-radius: 10px;
  z-index: 99;
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
    animation: progress 2.5s ease;
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
