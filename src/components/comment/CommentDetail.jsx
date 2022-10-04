import styled from "styled-components";
// import ReComment from "./ReComment";
import { BsArrowUpCircleFill } from "react-icons/bs";
import React, { useEffect, useState, useRef } from "react";
import { userApis } from "../../apis/auth";
import { MdModeEdit, MdDelete, MdReply } from "react-icons/md";

// const CommentDetail = ({ commentList, groupDetail }) => {
const CommentDetail = ({ certifyId }) => {
  const [comments, setComments] = useState([])  
  const [isChange, setIsChange] = useState(false)
  useEffect(()=> {
  userApis.getCertifyDetail(certifyId)
  .then((res) => {
  setComments(res.commentList)
  })
  }, [isChange] ) 
  const deleteComment = (commentId) => {
    userApis
      .deleteComment(commentId)
      .then((res) => {
        setIsChange(!isChange)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(comments)
  return (
    <StyledDiv>
      {comments?.map((el) => {
        return (
          <StyledComment key={el.commentId}>
            <StyledProfilePhotoComment src="http://file.osen.co.kr/article_thumb/2019/03/04/201903041941777108_5c7d015030247_300x.jpg"></StyledProfilePhotoComment>
            <CommentBox>
              <StyledProfileName>
                {el.nickname}
                <StyledDate>{el.dateTime}</StyledDate>
              </StyledProfileName>
              <CommentMsg >
                {el.content}
              </CommentMsg>
            </CommentBox>
            <StyledReplyIcon>
              {/* <MdModeEdit color="#B7B7B7" size="15" /> */}
              {/* <MdReply color="#B7B7B7" size="15" /> */}
              <MdDelete color="#B7B7B7" size="15" onClick= {()=> {deleteComment(el.commentId)}} />
            </StyledReplyIcon>
          </StyledComment>
        );
      })}
      {/* <StyledRecommentDiv><ReComment /></StyledRecommentDiv> */}
    </StyledDiv>
  );
};

export default CommentDetail;

const StyledDiv = styled.div``;

const StyledComment = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 7px;
`;
const StyledProfilePhotoComment = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 25px;
  margin: 5px 0 0 10px;
  object-fit: cover;
`;
const StyledProfileName = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  color: #9c9c9c;
`;
const StyledDate = styled.div`
  display: flex;
  margin-top: 5px;
  font-size: 9px;
  margin-left: 10px;
  color: #9c9c9c;
`;
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 20px 10px;
  height: 26px;
`;
const StyledReplyIcon = styled.div`
  position: absolute;
  right: 0;
  margin: 20px 30px 0 0;
`;
const CommentMsg = styled.div`
  width: 290px;
`;
const StyledRecommentDiv = styled.div`
  margin-left: 10vw;
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
