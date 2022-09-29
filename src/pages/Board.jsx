import styled from 'styled-components';
import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Board = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const {id}  = useParams();
  // const certify_list = useSelector((state) => state.certify)
  // useEffect(() => {
  //   dispatch(getCertify(id))

  // }, []);

  return (
    <div>
      Board
      <IoSearch />
      <BoardBox>
        <Profile>
          <ProfilePhoto src='http://www.gugaktimes.com/data/photos/20211251/art_16403326245363_ac1021.jpg'></ProfilePhoto>
          <ProfileBox>
            <ProfileName>김병처리</ProfileName>
            {/* <ProfileName>{certify_list.crew_Name}</ProfileName> */}

            <ProfileRole>추장</ProfileRole>
            {/* <ProfileRole>{certify_list.member}</ProfileRole> */}
          </ProfileBox>
        </Profile>
        <Title>
          <ChallengeName>갓생의 시작 매일 6시 기상</ChallengeName>
          {/* <ChallengeName>{certify_list.title}</ChallengeName> */}

          <ChallengeBox>
            <ChallengeTitle>00월 00일 6시기상했어요</ChallengeTitle>
            {/* <ChallengeTitle>{certify_list.title}</ChallengeTitle> */}

            <ChallengeLocation>Seoul, Korea</ChallengeLocation>
          </ChallengeBox>
        </Title>
        <ChallengePhoto src='https://post.healthline.com/wp-content/uploads/2020/08/woman-sleeping-in-bed-thumbnail.jpg'></ChallengePhoto>
        <Comment>
          <ProfilePhoto src='http://file.osen.co.kr/article_thumb/2019/03/04/201903041941777108_5c7d015030247_300x.jpg'></ProfilePhoto>
          <CommentBox>
            <ProfileName>박병처리</ProfileName>
            <CommentMsg>저는 그날 늦었는데 ㅜㅜ</CommentMsg>
          </CommentBox>
          <ReplyIcon>아이콘</ReplyIcon>
        </Comment>
        <CommentInput></CommentInput>
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
`;
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 10px;
`;
const ProfilePhoto = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 25px;
  margin: 5px 0 0 10px;
`;
const ProfileName = styled.div`
  font-size: 15px;
`;
const ProfileRole = styled.div`
  color: gray;
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
`;
const ChallengeTitle = styled.div`
  font-size: 15px;
`;
const ChallengeLocation = styled.div`
  color: gray;
  font-size: 10px;
`;

const ChallengePhoto = styled.img`
  margin: 10px 10px 10px 10px;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: row;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 10px;
`;
const CommentMsg = styled.div``;
const CommentInput = styled.input`
  width: 340px;
  border-radius: 25px;
  border-color: gray;
  margin: 20px 20px 20px 20px;
`;

const ReplyIcon = styled.div`
  position: absolute;
  right: 0;
  margin: 0 10px 0 0;
`;
export default Board;
