import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useInputs from "@hooks/useInput";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";

const CertifyDetail = ()=>{
    const {groupId, id} = useParams();
    const [form, onChange, reset] = useInputs({
      groupId:groupId,
      longitude:null,
      latitude:null,
      title:null,
      imageId:null
    });
    
    return (
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
    
                <ChallengeLocation>
                <IoLocationOutline
                style={{
                  fontSize: "12px",
                  color: "#DE4242",
                  marginRight: "5px",
                }} />Seoul, Korea
                </ChallengeLocation>
              </ChallengeBox>
            </Title>
            <ChallengePhoto src='https://post.healthline.com/wp-content/uploads/2020/08/woman-sleeping-in-bed-thumbnail.jpg'></ChallengePhoto>
            <Comment>
              <ProfilePhoto src='http://file.osen.co.kr/article_thumb/2019/03/04/201903041941777108_5c7d015030247_300x.jpg'></ProfilePhoto>
              <CommentBox>
                <div>
                    <ProfileName>박병처리 <span>하루전</span></ProfileName>
                    <ReplyIcon><AiOutlineComment></AiOutlineComment></ReplyIcon>
                </div>
                <CommentMsg>저는 그날 늦었는데 ㅜㅜ</CommentMsg>
              </CommentBox>
            </Comment>
            <CommentInput></CommentInput>
          </BoardBox>
      );
}


export default React.memo(CertifyDetail);

const BoardBox = styled.div`
  display: flex;
  flex-direction: column;
  padding:0 1.5rem;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
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
  color:black;
  font-weight:bold;
  &>span{
    font-size:10px;
    color:lightgray;
  }
`;
const ProfileRole = styled.div`
font-size: 12px;
line-height:10px;
color: gray;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:15px;
`;
const ChallengeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;

`;

const ChallengeName = styled.div`
  font-size: 10px;
  color: gray;
  font-weight:bold;
`;
const ChallengeTitle = styled.div`
  font-size: 1.5rem;
  font-weight:bold;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
`;
const ChallengeLocation = styled.div`
  color: gray;
  font-size: 10px;
  display:flex;
  align-items:center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChallengePhoto = styled.img`
    width:354px;
    height:354px;
`;

const Comment = styled.div`
  margin-top:2rem;
  display: flex;
  flex-direction: row;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction:column;
  margin: 0 10px 0 10px;
  width:80%;
  &>div{
    display:flex;
    justify-content:space-between;
  }
`;
const CommentMsg = styled.div``;
const CommentInput = styled.input`
  width: 100%;
  border:1px solid lightgray;
  border-radius: 25px;
  margin-top:15px;
  padding:4px 8px;
  :focus{
    outline:none;
    border:1px solid ${({theme})=>{ return theme.color.primary_color}};
  }
`;

const ReplyIcon = styled.div`
  color:gray;
`;