import styled from "styled-components";
import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { UserOutlined } from "@ant-design/icons";
import { fileUrlHost } from "../apis/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userApis } from "../apis/auth";
import { useState } from "react";
import { getGroupDetail } from "@apis/group/group";
import { FaRegHandPointLeft } from "react-icons/fa";

const UserProfile = ({ data, type = "shadow", nickName, myInfo }) => {
  const navigate = useNavigate();
  const [myGroups, setMyGroups] = useState([]);
  const toMyPage = () => {
    navigate("/mypage");
  };
  useEffect(() => {
    userApis.getmyGroup().then((res) => {
      setMyGroups(res.data);
    });
  }, []);
  const groups = myGroups?.length;

  return (
    <div>
      <StyleProfile>
        <StyleUserBox>
          <StyleUserRight>
            {!!myInfo?.imageId ? (
              <StyleUserPhoto
                alt="profile"
                src={fileUrlHost(myInfo.imageId)}
                onClick={toMyPage}
              ></StyleUserPhoto>
            ) : (
              <StyleUserNonePhoto onClick={toMyPage}>
                <UserOutlined />
              </StyleUserNonePhoto>
            )}
          </StyleUserRight>
          <StyleUserLeft>
            <StyleUserName onClick={toMyPage}>
              <span>{myInfo?.nickname}</span> 님
            </StyleUserName>
            <StyleUserContent>{myInfo?.introduce}</StyleUserContent>
            <StylePercentage value="3" max="20"></StylePercentage>
            <StyleAchievements>
              {groups ? (
                <span>{groups}개의 그룹에서 활동중입니다</span>
              ) : (
                <span>아직 가입하신 그룹이 없네요!</span>
              )}
            </StyleAchievements>
          </StyleUserLeft>
          <StyleUser>
            <HiUserCircle
              onClick={() => {
                navigate("/mypage/edit");
              }}
            />
          </StyleUser>
        </StyleUserBox>
      </StyleProfile>
      {groups ? null : (
        <NewMemberDiv>
          <div className="message">
            아래의 빨간 화살표를 클릭하여 그룹페이지로 이동해 주세요!
          </div>
          <NewMemberInnerDiv>
            <FaRegHandPointLeft style={{ fontSize: "40px" }} />
          </NewMemberInnerDiv>
        </NewMemberDiv>
      )}
    </div>
  );
};
const NewMemberDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14.5px;
  .message {
    color: white;
    font-weight: bold;
  }
`;
const NewMemberInnerDiv = styled.div`
  position: absolute;
  z-index: 999;
  top: 48vh;
  right: 5vw;
  rotate: -55deg;
  color: #5e43ff;
  animation: vibration 0.3s infinite;
  @keyframes vibration {
    0% {
      transform: rotate(-6deg);
      color: #2cdf3d;
    }
    50% {
      transform: rotate(6deg);
      color: #5e43ff;
    }
    100% {
      transform: rotate(-6deg);
      color: white;
    }
  }
`;
const StyleProfile = styled.div`
  height: 168px;
  width: 350px;
  margin: 0 auto 3.125rem;
  box-sizing: border-box;
  background: #ffffff;
  border-style: solid;
  border-radius: 20px;
  padding: 20px;
`;
const StyleUserBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyleUserRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 10px;
`;

const StyleUserPhoto = styled.img`
  width: 110px;
  height: 110px;
  margin: 0 20px 0 0;
  border-radius: 100%;
  border: 1px solid lightgray;
  object-fit: cover;
`;

const StyleUserNonePhoto = styled.div`
  width: 110px;
  height: 110px;
  margin: 0 20px 0 0;
  border-radius: 100%;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: gray;
`;

const StyleUserLeft = styled.div`
  margin: 5px 0 0 10px;
`;
const StylePercentage = styled.progress`
  height: 8px;
  appearance: none;
  ::-webkit-progress-bar {
    background: white;
    border-radius: 10px;
    border: 0.3px solid #eaeaea;
  }
  ::-webkit-progress-value {
    border-radius: 10px;
    background: #2cdf3d;
  }
`;
const StyleUserName = styled.div`
  font-size: 16px;
  span {
    font-size: 18px;
    font-weight: 700;
  }
`;
const StyleUserContent = styled.div`
  color: gray;
  font-size: 12px;
`;
const StyleAchievements = styled.div`
  font-size: 10px;
  margin-top: 8px;
  span {
    font-size: 12px;
  }
`;
const StyleUser = styled.div`
  font-size: 22px;
  position: relative;
  color: #5e43ff;
  cursor: pointer;
`;
// const StyleAlertSign = styled.div`
//   position: absolute;
//   top: 3px;
//   right: 0;
//   width: 6px;
//   height: 6px;
//   border-radius: 50%;
//   background-color: red;
// `;
export default UserProfile;
