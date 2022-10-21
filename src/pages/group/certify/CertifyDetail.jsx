import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IoLocationOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { BsArrowUpCircleFill } from 'react-icons/bs';
// import Comment from "@pages/comment/Comment";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { userApis } from "../../../apis/auth";
import { fileUrlHost } from "../../../apis/config";
import Comment from "../../../components/comment/Comment";
import crown from "@assets/leader.png";
import { useRef } from "react";
import { kakaoApi } from "../../../apis/config";
import { getGroupDetail } from "@apis/group/group";
import { Alert, Image } from "antd";
import { useSelector } from 'react-redux';
import useSse from '../../../hooks/useSse';

const CertifyDetail = () => {
  const { state } = useLocation();
  const { certifyId } = useParams();
  const [certifyDetail, setCertifyDetail] = useState({});
  const [groupDetail, setGroupDetail] = useState({});
  const [comment, setComment] = useState('');
  const [commentId, setCommentId] = useState('');
  const [subCommentTo, setSubCommentTo] = useState('');
  const navigate = useNavigate();
  const { groupId } = useParams();
  const inputFocus = useRef();
  const myInfo = useSelector(state=>state.auth.principal)
  const authId = myInfo?.memberId;
  const memberId = certifyDetail?.memberId;
  const ca = (certifyDetail.createdAt)
  const createdDate = ca?.slice(2, 10).split("-");
  const createdTime = ca?.slice(11, 16)
  const yyyy_mm_dd = () => {
    if (createdDate && createdDate.length > 0) {
      return (
        createdDate[0] + "년 " + createdDate[1] + "월 " + createdDate[2] + "일 "+ createdTime
      );
    }
  };
  const toMemberPage = () => {
    if (memberId === authId) {
      navigate("/mypage");
    } else {
      navigate("/mypage/" + memberId);
    }
  };
  const commentHandler = (e) => {
    setComment(e.target.value);
    if (comment === '') {
      setCommentId('');
    }
  };
  const commentList = certifyDetail?.commentList;
  const [locationObj, setLocationObj] = useState({});
  const [coordinate, setCoordinate] = useState({});
  useEffect(() => {
    getGroupDetail(groupId)
      .then((res) => {
        setGroupDetail(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    userApis.getCertifyDetail(certifyId).then((res) => {
      setCertifyDetail(res);
      setCoordinate({
        latitude: res.latitude,
        longitude: res.longitude,
      });
      if (res.longitude !== null && res.latitude !== null) {
        kakaoApi
          .get(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${res?.longitude}&y=${res?.latitude}`)
          .then(res => {
            if (res.status === 200) {
              const temp = res.data.documents[0];
              setLocationObj({
                temp: temp,
                si: temp.region_1depth_name,
                gu: temp.region_2depth_name,
                dong: temp.region_3depth_name,
              });
            } else {
              console.log("error");
            }
          })
          .catch();
      }
    });
  }, []);

  const addComment = commentId => {
    const commentMsg = {
      certifyId: certifyId,
      content: comment,
    };
    const subCommentMsg = {
      commentId: commentId,
      content: comment,
    };
    if (comment === '') return;
    if (commentId && comment) {
      userApis
        .writeSubComment(subCommentMsg)
        .then(res => {
          setCertifyDetail(prev => {
            return {
              ...prev,
              commentList: prev.commentList.map(comment =>
                comment.commentId === commentId
                  ? {
                      ...comment,
                      subCommentList: [...comment?.subCommentList, res.data],
                    }
                  : comment
              ),
            };
          });
          setComment('');
        })
        .catch(err => {
          console.log(err);
        });
      return;
    }
    userApis
      .writeComment(commentMsg)
      .then(res => {
        setCertifyDetail(prev => {
          return {
            ...prev,
            commentList: [...prev.commentList, { ...res.data, subCommentList: [] }],
          };
        });
        setComment('');
      })
      .catch(err => {
        console.log(err);
      });
  };
  const subComment = (nickname, commentId) => {
    inputFocus.current.focus();
    setSubCommentTo('@' + nickname + ' ');
    setComment(subCommentTo);
    setCommentId(commentId);
  };

    // 알림 수신 팝업
    const [alertPopUp, setAlertPopUp] = useState(false)
    const [popUpData,popUp]=useSse()
    useEffect(()=>{
      setAlertPopUp(popUp)
    },[popUpData])
    const message = ()=>{
      const data = JSON.parse(popUpData)
    if(popUpData){
      return data.content
    }
    }
    //

  const leader = groupDetail?.writer;
  const imageId = certifyDetail?.profileImageId;
  return (
    <BoardBox>
      {/* 알림 수신 */}
      {alertPopUp&&(
        <Alert message={message} setAlertPopUp={setAlertPopUp}/>
      )}
      <Title>
        <ToGroup
          onClick={() => {
            navigate(state || -1, { state: '/group' });
          }}>
          <MdOutlineArrowBackIosNew style={{ fontSize: '15px', color: '#5E43FF', marginRight: '3px' }} />
          <ChallengeName>{groupDetail.title}</ChallengeName>
        </ToGroup>
        {myInfo?.memberId === certifyDetail?.memberId && (
          <div
            className='editButton'
            onClick={() => {
              navigate('edit');
            }}>
            수정하기
          </div>
        )}
      </Title>
      <StyledBox>
        <Image
          style={{
            objectFit: "cover",
            width: "345px",
            height: "345px",
            marginbottom: "5px",
          }}
          src={fileUrlHost(certifyDetail.imageId)}
        />
        <Profile>
          {imageId ? (
            <ProfilePhoto
              src={fileUrlHost(certifyDetail.profileImageId)}
              onClick={toMemberPage}
            ></ProfilePhoto>
          ) : (
            <StyledProfileDiv onClick={toMemberPage}>
              <UserOutlined style={{ fontSize: "20px" }}></UserOutlined>
            </StyledProfileDiv>
          )}
          {certifyDetail?.memberId === leader?.memberId && <Crown src={crown} alt='' />}
          <ProfileBox>
            <InnerBox>
              <ProfileName>{certifyDetail.nickname}</ProfileName>
              <ProfileRole>{certifyDetail?.memberId === leader?.memberId ? groupDetail.leaderName : groupDetail.crewName}</ProfileRole>
            </InnerBox>
            <ChallengeLocation>
              {locationObj.si !== undefined ? (
                <IoLocationOutline
                  style={{
                    fontSize: '12px',
                    color: '#DE4242',
                    marginRight: '5px',
                  }}
                />
              ) : (
                <div></div>
              )}
              {locationObj.si === undefined ? '' : locationObj.si + ' ' + locationObj.gu + ' ' + locationObj.dong}
            </ChallengeLocation>
          </ProfileBox>
        </Profile>
        <StyledTitleDiv>
          <ChallengeTitle>{certifyDetail.title}</ChallengeTitle>
        </StyledTitleDiv>
            <CreatedAt>{yyyy_mm_dd()}</CreatedAt>
      </StyledBox>
      <StyledCommentDiv>
        {commentList?.length > 0 ? (
          commentList?.map((el, idx) => (
            <Comment
              key={idx}
              {...el}
              authId={authId}
              subComment={subComment}
              setCertifyDetail={setCertifyDetail}
            />
          ))
        ) : (
          <p>아직 댓글이 없어요. 첫 댓글을 작성해 보세요!</p>
        )}
      </StyledCommentDiv>
      <CommentBar>
        <CommentInput ref={inputFocus} value={comment} onChange={commentHandler} ></CommentInput>
        <BsArrowUpCircleFill
          color='#5e43ff'
          size='22'
          zindex='100'
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
  justify-content: flex-start;
  padding: 0 1rem;
  /* height: 80vh; */
`;
const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;
const ToGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 10px 0;
`;
const ProfilePhoto = styled.img`
  width: 41px;
  height: 41px;
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
  margin-left: 5px;
  color: gray;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 9px;
  .editButton {
    font-size: 11px;
  }
`;

const ChallengeName = styled.div`
  font-size: 14px;
  color: gray;
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
const InnerBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: start;
  width: 100%;
`;
const CommentBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border: 1px solid lightgray;
  width: 346px;
  margin: auto;
  border-radius: 25px;
  padding: 4px 8px;
  background-color: white;
`;
const CommentInput = styled.input`
  width: 346px;
  border: none;
  :focus {
    outline: none;
  }
`;
const StyledBox = styled.div`
  width: 346px;
  margin: auto;
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: 30px;
`;
const StyledTitleDiv = styled.div`
  width: 345px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;
const ChallengeTitle = styled.div`
  font-size: 0.8rem;
  z-index: 10;
  opacity: 1;
  margin: 10px 0;
`;
const Crown = styled.img`
  position: absolute;
  height: 33px;
  transform: translate(-6px, -25px);
`;

const StyledCommentDiv = styled.div`
  p {
    display: flex;
    justify-content: center;
  }
`;
const StyledProfileDiv = styled.div`
  width: 41px;
  height: 41px;
  border-radius: 100%;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CreatedAt = styled.div`
  font-size: 11px;
  margin-bottom: 5px;
`