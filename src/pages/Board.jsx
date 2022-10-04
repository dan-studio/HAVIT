import styled from "styled-components";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BsArrowUpCircleFill } from "react-icons/bs";
import Comment from "@pages/comment/Comment";
import PrimaryButton from "../components/button/PrimaryButton";
import SubButton from "../components/button/SubButton";
import { userApis } from "../apis/auth";
import { fileUrlHost } from "../apis/config";


const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { certifyId } = useParams();
  const [certifyDetail, setCertifyDetail] = useState({});
  const [groupDetail, setGroupDetail] = useState({});
  const [groupId, setGroupId] = useState();
  console.log(groupDetail)

  useEffect(() => {
    userApis.
    getCertifyDetail(certifyId)
    .then((res) =>{
    setCertifyDetail(res)
    setGroupId(res.groupId)
    console.log(res)
    //
    userApis.
    getGroupDetail(res.groupId)
    .then((res) =>{
      setGroupDetail(res)
      console.log(res)  
      } )
    } )
  }, []);

  console.log(groupId)  
  console.log("certifyDetail",certifyDetail)
  console.log("groupDetail",groupDetail)
  return (
    <div>
      <BoardBox>
        <Profile>
          {/* <ProfilePhoto src="http://www.gugaktimes.com/data/photos/20211251/art_16403326245363_ac1021.jpg"></ProfilePhoto> */}
          <ProfilePhoto src="http://www.gugaktimes.com/data/photos/20211251/art_16403326245363_ac1021.jpg"></ProfilePhoto>
          
          <ProfileBox>
            {/* <ProfileName>김병처리</ProfileName> */}
            <ProfileName>{certifyDetail.nickname}</ProfileName>

            <ProfileRole>{certifyDetail.crewName}</ProfileRole>
            {/* <ProfileRole>{certify_list.member}</ProfileRole> */}
          </ProfileBox>
        </Profile>
        <Title>
          {/* <ChallengeName>갓생의 시작 매일 6시 기상</ChallengeName> */}
          <ChallengeName>{groupDetail.title}</ChallengeName>

          <ChallengeBox>
            {/* <ChallengeTitle>00월 00일 6시기상했어요</ChallengeTitle> */}
            <ChallengeTitle>{certifyDetail.title}</ChallengeTitle>
            <LocationBox>
              <MdLocationOn color="red" size="25" />
              <ChallengeLocation>Seoul, Korea</ChallengeLocation>
            </LocationBox>
          </ChallengeBox>
        </Title>
        <ChallengePhoto src={fileUrlHost(certifyDetail.imageId)}></ChallengePhoto>
        {/* <ChallengePhoto src={certifyDetail.imageId}></ChallengePhoto> */}
        <StyledCommentDiv>
          <Comment certifyId={certifyId} groupDetail={groupDetail}/>
        </StyledCommentDiv>

        

        {/* <CommentInputBox>
          <CommentInput></CommentInput>
          <CommnetRegister>
            <BsArrowUpCircleFill color="#5e43ff" size="18" zindex="100" />
          </CommnetRegister>
        </CommentInputBox> */}
        <Btn style={{ marginTop: "5.625rem" }}>
            <PrimaryButton buttonName={"공유하기"}  />
            <SubButton buttonName={"뒤로가기"} 
             onClick={() => {
              navigate(-1)
            }}
            />
          </Btn>
      </BoardBox>
    </div>
  );
};

const BoardBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 10px;
`;
const ProfilePhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin: 5px 0 0 10px;
  object-fit: cover;
`;

const ProfileName = styled.div`
  font-size: 15px;
  color: black;
  font-weight: bold;
`;

const ProfileRole = styled.div`
  color: gray;
  font-size: 12px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 10px;
`;
const ChallengeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ChallengeName = styled.div`
  font-size: 7px;
  color: gray;
  font-weight: bolder;
`;
const ChallengeTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const ChallengeLocation = styled.div`
  color: gray;
  font-size: 13px;
  margin-top: 3px;
`;

const ChallengePhoto = styled.img`
  margin: 10px 10px 10px 10px;
`;

const CommentInput = styled.input`
  width: 300px;
  height: 20px;
  /* border-radius: 25px;
  border-color: gray; */
  border: transparent;
  margin: 20px 0 20px 20px;
  /* position: relative; */
`;

const LocationBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const CommentInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  width: 350px;
  height: 30px;
  /* border-color: gray; */
  margin-left: 15px;
  margin-top: 15px;
  border: 1px solid gray;
`;
const CommnetRegister = styled.div`
  margin: 3px 0 0 0;
  z-index: 100;
`;
const StyledCommentDiv = styled.div``;
const Btn = styled.div`
  display: flex;
  flex-direction: row;
  /* position: center; */
  margin: 0 auto;
`;

export default Board;