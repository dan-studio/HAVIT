import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { IoLocationOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowUpCircleFill } from "react-icons/bs";
// import Comment from "@pages/comment/Comment";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { userApis } from "../../apis/auth";
import { fileUrlHost } from "../../apis/config";
import Comment from "../../components/comment/Comment";
import crown from "@assets/leader.png";
import { useRef } from "react";
import { kakaoApi } from "../../apis/config";

const CertifyDetail = () => {
  const { state } = useLocation();
  const { certifyId } = useParams();
  const [certifyDetail, setCertifyDetail] = useState({});
  const [groupDetail, setGroupDetail] = useState({});
  const [comment, setComment] = useState("");
  const [commentId, setCommentId] = useState("");
  const [myInfo, setMyInfo] = useState("");
  const [subCommentTo, setSubCommentTo] = useState("");
  const navigate = useNavigate();
  const { groupId } = useParams();
  const inputFocus = useRef();
  const commentHandler = (e) => {
    setComment(e.target.value);
    if (comment === "") {
      setCommentId("");
    }
  };
  const commentList = certifyDetail?.commentList;
  const [locationObj, setLocationObj] = useState({});
  const [coordinate, setCoordinate] = useState({});

  useEffect(() => {
    userApis
      .getGroupDetail(groupId)
      .then((res) => {
        setGroupDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    userApis
      .myProfile()
      .then((res) => {
        setMyInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
    userApis.getCertifyDetail(certifyId).then((res) => {
      setCertifyDetail(res)
      setCoordinate({
        latitude: res.latitude,
        longitude: res.longitude,
      })
      kakaoApi.get(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${res.longitude}&y=${res.latitude}`)
      .then(res=>{
        if(res.status === 200){
            const temp = res.data.documents[0];
            setLocationObj(
              {
                "temp":temp,
                "si":temp.region_1depth_name,
                "gu":temp.region_2depth_name,
                "dong":temp.region_3depth_name,  
              }
            )
        }
    })
    });
  }, []);

  const addComment = (commentId) => {
    const commentMsg = {
      certifyId: certifyId,
      content: comment,
    };
    const subCommentMsg = {
      commentId: commentId,
      content: comment,
    };
    if (commentId && comment) {
      userApis
        .writeSubComment(subCommentMsg)
        .then((res) => {
          console.log(res);
          setCertifyDetail((prev)=>{
            return {
              ...prev,
              commentList: prev.commentList.map(comment=>comment.commentId===commentId?{...comment, subCommentList:[...comment.subCommentList, res.data]}:comment)
            }
          })
          setComment("");
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }
    userApis
      .writeComment(commentMsg)
      .then((res) => {
        console.log(res);
        setCertifyDetail((prev)=>{
          return {
            ...prev,
            commentList: [...prev.commentList, res.data]
          }
        })
        setComment("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const subComment = (nickname, commentId) => {
    inputFocus.current.focus();
    setSubCommentTo("@" + nickname + " ");
    setComment(subCommentTo);
    setCommentId(commentId);
  };

  const leader = groupDetail?.writer;
  return (
    <BoardBox>
      <Profile>
        <MdOutlineArrowBackIosNew
          style={{ fontSize: "20px", color: "#5E43FF", marginRight: "10px" }}
          onClick={() => {
            navigate(state || -1, { state: "/group" });
          }}
        />
        <ProfilePhoto
          src={fileUrlHost(certifyDetail.profileImageId)}
        ></ProfilePhoto>
        {certifyDetail?.memberId === leader?.memberId && (
          <Crown src={crown} alt="" />
        )}
        <ProfileBox>
          <ProfileName>{certifyDetail.nickname}</ProfileName>
          <ProfileRole>
            {certifyDetail?.memberId === leader?.memberId
              ? groupDetail.leaderName
              : groupDetail.crewName}
          </ProfileRole>

          {/* 리더/크루원 구분 필요 */}
        </ProfileBox>
      </Profile>
      <Title>
        <ChallengeName>{groupDetail.title}</ChallengeName>
        <ChallengeBox>
          <ChallengeLocation>
            <IoLocationOutline
              style={{
                fontSize: "12px",
                color: "#DE4242",
                marginRight: "5px",
              }}
            />
            {locationObj.si}{locationObj.gu}{locationObj.dong}
          </ChallengeLocation>
        </ChallengeBox>
      </Title>
      <ChallengePhoto src={fileUrlHost(certifyDetail.imageId)} />
      <StyledTitleDiv>
        <ChallengeTitle>{certifyDetail.title}</ChallengeTitle>
      </StyledTitleDiv>
      <StyledCommentDiv>
        {commentList &&
          commentList?.map((el, idx) => (
            <Comment
              key={idx}
              {...el}
              authId={myInfo.memberId}
              subComment={subComment}
            />
          ))}
      </StyledCommentDiv>
      <CommentBar>
        <CommentInput
          ref={inputFocus}
          value={comment}
          onChange={commentHandler}
        ></CommentInput>
        <BsArrowUpCircleFill
          color="#5e43ff"
          size="18"
          zindex="100"
          onClick={() => {
            addComment(commentId);
          }}
        />
      </CommentBar>
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
  object-fit: cover;
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
  font-size: 15px;
  color: gray;
  font-weight: bold;
`;
const ChallengeTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  z-index: 10;
  opacity: 1;
  margin-left: 10px;
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
  width: 345px;
  height: 345px;
  margin: 10px auto;
  border: 1px solid #e8e8e8;
`;

const CommentBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border: 1px solid lightgray;
  border-radius: 25px;
  margin: 10px 0;
  padding: 4px 8px;
  background-color: white;
`;
const CommentInput = styled.input`
  width: 90%;
  border: none;
  :focus {
    outline: none;
  }
`;
const StyledTitleDiv = styled.div`
  height: 40px;
  width: 345px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translateY(-50px);
  display: flex;
  align-items: center;
`;
const Crown = styled.img`
  position: absolute;
  height: 33px;
  transform: translate(23px, -23px);
`;

const StyledCommentDiv = styled.div``;