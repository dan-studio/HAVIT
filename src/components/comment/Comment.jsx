import styled from "styled-components";
// import ReComment from "./ReComment";
import { BsArrowUpCircleFill } from "react-icons/bs";
import React, { useEffect, useState, useRef } from "react";
import { userApis } from "../../apis/auth";
import { MdDelete, MdReply, MdModeEdit } from "react-icons/md";
import CommentDetail from "./CommentDetail";
import { fileUrlHost } from "../../apis/config";

const Comment = ({ certifyId, groupDetail, commentList }) => {
  const deleteComment = () => {
    userApis
      .deleteComment(commentList.commentId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
      {commentList?.map((el) => {
        return (
          <StyledDiv key={el.commentId}>
            <StyledProfileImg src={fileUrlHost(el.profileImageId)} />
            <StyledCommentBox>
              <StyledName>
                <div className="name">{el.nickname}</div>
                <div className="date">{el.dateTime}</div>
              </StyledName>
              <StyledContent>{el.content}</StyledContent>
              <StyledOptions>
                <div onClick={()=>{}}>답글쓰기</div>
                <div onClick={()=>{console.log("삭제")}}>삭제하기</div>
              </StyledOptions>
            </StyledCommentBox>
          </StyledDiv>
        );
      })}
    </>
  );
};

export default Comment;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
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
`
const StyledOptions = styled.div`
  display: flex;
  font-size: 10px;
  margin-top: 5px;
  div{
    margin-right: 7px;
  }
`