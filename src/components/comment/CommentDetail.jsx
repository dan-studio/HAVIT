import styled from "styled-components";
// import ReComment from "./ReComment";
import React, { useEffect, useState, useRef } from "react";
import { userApis } from "../../apis/auth";
import { fileUrlHost } from "../../apis/config";
import { Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const CommentDetail = ({
  subCommentId,
  profileImageId,
  nickname,
  content,
  memberId,
  dateTime,
  authId,
  commentId,
  setCertifyDetail,
}) => {
  const navigate = useNavigate()
  const toMemberPage = () => {
    if (memberId === authId) {
      navigate("/mypage");
    } else {
      navigate("/mypage/" + memberId);
    }
  };
  const ModalDelete = () => {
    Modal.confirm({
      title: "안내",
      content: (
        <div>
          <div>정말 댓글을 삭제하시겠습니까?</div>
        </div>
      ),
      okText: "확인",
      cancelText: "취소",
      onOk: () => {
        userApis
          .deleteSubComment(subCommentId)
          .then((res) => {
            setCertifyDetail((prev) => {
              return {
                ...prev,
                commentList: prev.commentList.map((comment) =>
                  comment.commentId === commentId
                    ? {
                        ...comment,
                        subCommentList: comment.subCommentList.filter(
                          (subComment) =>
                            subComment.subCommentId !== subCommentId
                        ),
                      }
                    : comment
                ),
              };
            });
          })
          .catch((err) => {
            console.log(err);
          });
      },
    });
  };
  return (
    <>
      <StyledDiv>
        {profileImageId ? (
          <StyledProfileImg src={fileUrlHost(profileImageId)} onClick={toMemberPage}/>
        ) : (
          <StyledProfileDiv onClick={toMemberPage}>
            <UserOutlined style={{ fontSize: "20px" }}></UserOutlined>
          </StyledProfileDiv>
        )}
        <StyledCommentBox>
          <StyledName>
            <div className="name">{nickname}</div>
            <div className="date">{dateTime}</div>
          </StyledName>
          <StyledContent>{content}</StyledContent>
          <StyledOptions>
            {authId === memberId && <div onClick={ModalDelete}>삭제하기</div>}
          </StyledOptions>
        </StyledCommentBox>
      </StyledDiv>
    </>
  );
};

export default CommentDetail;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
const StyledProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 5px 0;
  object-fit: cover;
`;
const StyledCommentBox = styled.div`
  margin-left: 10px;
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
const StyledProfileDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;
