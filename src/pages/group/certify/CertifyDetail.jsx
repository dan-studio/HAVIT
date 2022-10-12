import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IoLocationOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { BsArrowUpCircleFill } from 'react-icons/bs';
// import Comment from "@pages/comment/Comment";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { userApis } from '../../../apis/auth';
import { fileUrlHost } from '../../../apis/config';
import Comment from '../../../components/comment/Comment';
import crown from '@assets/leader.png';
import { useRef } from 'react';
import { kakaoApi } from '../../../apis/config';
import { getGroupDetail } from '@apis/group/group';
import { Image } from 'antd';

const CertifyDetail = () => {
  const { state } = useLocation();
  const { certifyId } = useParams();
  const [certifyDetail, setCertifyDetail] = useState({});
  const [groupDetail, setGroupDetail] = useState({});
  const [comment, setComment] = useState('');
  const [commentId, setCommentId] = useState('');
  const [myInfo, setMyInfo] = useState('');
  const [subCommentTo, setSubCommentTo] = useState('');
  const navigate = useNavigate();
  const { groupId } = useParams();
  const inputFocus = useRef();
  const commentHandler = e => {
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
      .then(res => {
        setGroupDetail(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    userApis
      .myProfile()
      .then(res => {
        setMyInfo(res);
      })
      .catch(err => {
        console.log(err);
      });
    userApis.getCertifyDetail(certifyId).then(res => {
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
              console.log('error');
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
  const leader = groupDetail?.writer;
  const imageId = certifyDetail?.profileImageId;
  return (
    <BoardBox>
      <Title>
        <ToGroup
          onClick={() => {
            navigate(state || -1, { state: '/group' });
          }}>
          <MdOutlineArrowBackIosNew style={{ fontSize: '20px', color: '#5E43FF', marginRight: '3px' }} />
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
        <Image style={{ objectFit: 'cover', width: '345px', height: '345px', marginbottom: '5px' }} src={fileUrlHost(certifyDetail.imageId)} />
        <Profile>
          {imageId ? (
            <ProfilePhoto src={fileUrlHost(certifyDetail.profileImageId)}></ProfilePhoto>
          ) : (
            <StyledProfileDiv>
              <UserOutlined style={{ fontSize: '20px' }}></UserOutlined>
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
      </StyledBox>
      <StyledCommentDiv>
        {commentList?.length > 0 ? commentList?.map((el, idx) => <Comment key={idx} {...el} authId={myInfo.memberId} subComment={subComment} setCertifyDetail={setCertifyDetail} />) : <p>아직 댓글이 없어요. 첫 댓글을 작성해 보세요!</p>}
      </StyledCommentDiv>
      <CommentBar>
        <CommentInput ref={inputFocus} value={comment} onChange={commentHandler}></CommentInput>
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
  padding: 0 1.5rem;
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
  font-size: 16px;
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
// const ChallengePhoto = styled.img`
//   object-fit: cover;
//   width: 345px;
//   height: 345px;
//   margin-bottom: 5px;
// `;

const CommentBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border: 1px solid lightgray;
  border-radius: 25px;
  margin-bottom: 72px;
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
const StyledBox = styled.div`
  width: 346px;
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
  width: 35px;
  height: 35px;
  border-radius: 100%;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
