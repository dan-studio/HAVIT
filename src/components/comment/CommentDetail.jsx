import styled from "styled-components";
// import ReComment from "./ReComment";
import React, { useEffect, useState, useRef } from "react";
import { userApis } from "../../apis/auth";
import { fileUrlHost } from "../../apis/config";

const CommentDetail = ({ subCommentId, profileImageId,nickname, content, memberId, dateTime, authId }) => {
  const deleteSubComment = (subCommentId) => {
    userApis.deleteSubComment(subCommentId).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  } 
  return (
    <>
      <StyledDiv>
        <StyledProfileImg src={fileUrlHost(profileImageId)} />
        <StyledCommentBox>
          <StyledName>
            <div className="name">{nickname}</div>
            <div className="date">{dateTime}</div>
          </StyledName>
          <StyledContent>{content}</StyledContent>
          <StyledOptions>
            {authId === memberId && (
                  <div onClick={()=>{deleteSubComment(subCommentId)}}>삭제하기</div>
                )}
          </StyledOptions>
        </StyledCommentBox>
      </StyledDiv>
    </>
  );
};

export default CommentDetail;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  margin-bottom: 20px;
`;
const StyledProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 5px 0;
  object-fit: cover;
`;
const StyledCommentBox = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`;

const StyledName = styled.div`
  display: flex;
  .name {
    font-size: 14px;
    font-weight: bold;
    color: #9c9c9c;
  }
  .date {
    margin-top: 5px;
    font-size: 9px;
    margin-left: 10px;
    color: #9c9c9c;
  }
`;
const StyledContent = styled.div`
  width: 100%;
  word-break: break-all;
`;
const StyledOptions = styled.div`
  display: flex;
  font-size: 10px;
  margin-top: 5px;
  div {
    margin-right: 7px;
  }
`;
