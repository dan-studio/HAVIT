import styled from "styled-components";
// import ReComment from "./ReComment";
import React from "react";
import { userApis } from "../../apis/auth";
import CommentDetail from "./CommentDetail";
import { fileUrlHost } from "../../apis/config";

const Comment = ({
  certifyId,
  groupDetail,
  commentList,
  authId,
  subComment,
}) => {
  const deleteComment = (commentId) => {
    userApis
      .deleteComment(commentId)
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
                <div
                  onClick={() => {
                    subComment(el.nickname, el.commentId);
                  }}
                >
                  답글쓰기
                </div>
                {authId === el.memberId && (
                  <div
                    onClick={() => {
                      deleteComment(el.commentId);
                    }}
                  >
                    삭제하기
                  </div>
                )}
              </StyledOptions>
              <StyledSubCommentBox>
                {el.subCommentList &&
                  el.subCommentList?.map((el, idx) => (
                    <CommentDetail key={idx} {...el} authId={authId} />
                  ))}
              </StyledSubCommentBox>
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
  margin-bottom: 9px;
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
const StyledSubCommentBox = styled.div`
margin-top: 9px`;
