import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useInputs from "@hooks/useInput";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BsArrowUpCircleFill } from "react-icons/bs";
// import Comment from "@pages/comment/Comment";
import PrimaryButton from "../../components/button/PrimaryButton";
import SubButton from "../../components/button/SubButton";
import { userApis } from "../../apis/auth";
import { fileUrlHost } from "../../apis/config";
import Comment from "../../components/comment/Comment";

const CertifyDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { certifyId } = useParams();
  const [certifyDetail, setCertifyDetail] = useState({});
  const [groupDetail, setGroupDetail] = useState({});
  const [groupId, setGroupId] = useState();
  console.log("groupdetail", groupDetail);
  console.log("certifyId", certifyId);

  useEffect(() => {
    userApis.getCertifyDetail(certifyId).then((res) => {
      setCertifyDetail(res);
      setGroupId(res.groupId);
      userApis.getGroupDetail(res.groupId).then((res) => {
        setGroupDetail(res.data);
      });
    });
  }, []);
  console.log("certifyDetail", certifyDetail);
  console.log("groupDetail", groupDetail);
  return (
    <BoardBox>
      <Profile>
        <ProfilePhoto src="http://www.gugaktimes.com/data/photos/20211251/art_16403326245363_ac1021.jpg"></ProfilePhoto>
        <ProfileBox>
          <ProfileName>{certifyDetail.nickname}</ProfileName>
          <ProfileRole>{certifyDetail.crewName}</ProfileRole>
          {/* 리더/크루원 구분 필요 */}
        </ProfileBox>
      </Profile>
      <Title>
        <ChallengeName>{groupDetail.content}</ChallengeName>
        <ChallengeBox>
          <ChallengeTitle>{certifyDetail.title}</ChallengeTitle>

          <ChallengeLocation>
            <IoLocationOutline
              style={{
                fontSize: "12px",
                color: "#DE4242",
                marginRight: "5px",
              }}
            />
            Seoul, Korea
          </ChallengeLocation>
        </ChallengeBox>
      </Title>
      <ChallengePhoto src={fileUrlHost(certifyDetail.imageId)}></ChallengePhoto>
      <StyledCommentDiv>
        <Comment certifyId={certifyId} groupDetail={groupDetail} />
      </StyledCommentDiv>
      <CommentInput></CommentInput>
    </BoardBox>
  );
};

export default React.memo(CertifyDetail);

const BoardBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 10px;
`;
const ProfilePhoto = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100%;
`;
const ProfileName = styled.div`
  font-size: 15px;
  color: black;
  font-weight: bold;
  & > span {
    font-size: 10px;
    color: lightgray;
  }
`;
const ProfileRole = styled.div`
  font-size: 12px;
  line-height: 10px;
  color: gray;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;
const ChallengeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ChallengeName = styled.div`
  font-size: 10px;
  color: gray;
  font-weight: bold;
`;
const ChallengeTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ChallengeLocation = styled.div`
  color: gray;
  font-size: 10px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChallengePhoto = styled.img`
  object-fit: cover;
  width: 354px;
  height: 354px;
`;

const Comments = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 10px;
  width: 80%;
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;
const CommentMsg = styled.div``;
const CommentInput = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 25px;
  margin-top: 15px;
  padding: 4px 8px;
  :focus {
    outline: none;
    border: 1px solid
      ${({ theme }) => {
        return theme.color.primary_color;
      }};
  }
`;

const ReplyIcon = styled.div`
  color: gray;
`;
const StyledCommentDiv = styled.div``;
