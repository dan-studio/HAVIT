import styled from "styled-components";
import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { UserOutlined } from "@ant-design/icons";
import { fileUrlHost } from "../../apis/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userApis } from "../../apis/auth";
import { useState } from "react";
import Count from "../alert/Count";

const MyProfileCard = ({ data, type = "shadow", nickName, myInfo ,certifies, getCount}) => {
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
            {!!myInfo?.imageId? (
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
              <span>{myInfo?.nickname}</span> 님 &nbsp;
              <Count getCount={getCount}/>
            </StyleUserName>
            <StyleUserContent>{myInfo?.introduce}</StyleUserContent>
            {/* <StylePercentage value="3" max="20"></StylePercentage> */}
            <StyleAchievements>
              {groups ? (
                <><p><b>{groups}</b> 개의 그룹에서 활동중이며</p>
                <p><b>{certifies}</b> 번의 인증을 하셨어요!</p></>
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
    </div>
  );
};
const StyleProfile = styled.div`
  height: 168px;
  width: 350px;
  margin: 0 auto 3.125rem;
  box-sizing: border-box;
  background: #ffffff;
  border-style: solid;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  display: flex;
  align-items: center;
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
  margin-top: 10px;
  p {
    font-size: 12px;
    margin: 0;
  }
  b{
    font-size: 14px;
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
export default MyProfileCard;
