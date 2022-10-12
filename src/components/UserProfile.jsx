import styled from "styled-components";
import React from "react";
import { HiUserCircle } from "react-icons/hi";
import {
  UserOutlined
} from '@ant-design/icons';
import { fileUrlHost } from "../apis/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userApis } from "../apis/auth";
import { useState } from "react";
import { getGroupDetail } from "@apis/group/group";

const UserProfile = ({ data, type = 'shadow', nickName, myInfo }) => {
  const navigate = useNavigate()
  const [myGroups, setMyGroups] = useState([])
  const toMyPage = () => {
    navigate('/mypage')
  }
  useEffect(()=>{
    userApis.getmyGroup().then(res=>{
      setMyGroups(res.data)
    })
  },[])
  const groups = myGroups?.length

  return (
    <div>
      <StyleProfile>
        <StyleUserBox>
          <StyleUserRight>
            {!!myInfo?.imageId ? (<StyleUserPhoto alt='profile' src = {fileUrlHost(myInfo.imageId)} onClick={toMyPage}></StyleUserPhoto>) 
            : (<StyleUserNonePhoto onClick={toMyPage}><UserOutlined /></StyleUserNonePhoto>)}
          </StyleUserRight>
          <StyleUserLeft>
            <StyleUserName onClick={toMyPage}>
              <span>{myInfo?.nickname}</span> 님
            </StyleUserName>
            <StyleUserContent>{myInfo?.introduce}</StyleUserContent>
            <StylePercentage value='3' max='20'></StylePercentage>
            <StyleAchievements>
              {groups?
              <span>{groups}개의 그룹에서 활동중입니다</span>:
              null
              }
            </StyleAchievements>
          </StyleUserLeft>
          <StyleUser>
            <HiUserCircle onClick={()=>{navigate('/mypage/edit')}}/>
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
  border-radius:100%;
  border:1px solid lightgray;
  object-fit: cover;
`;

const StyleUserNonePhoto = styled.div`
  width:110px;
  height:110px;
  margin:0 20px 0 0;
  border-radius:100%;
  border:1px solid lightgray;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:2.5rem;
  color:gray;
`

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
  span{
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
