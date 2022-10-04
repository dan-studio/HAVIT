import styled from "styled-components";
import { MdReply } from "react-icons/md";
// import ReComment from "./ReComment";
import { BsArrowUpCircleFill } from "react-icons/bs";
import React, { useEffect, useState, useRef } from "react";
import { userApis } from "../../apis/auth";
import CommentDetail from "./CommentDetail";


const Comment = ({ certifyId, groupDetail }) => {
  const [commentList, setCommentList] = useState([]);

  console.log(groupDetail)
  useEffect(() => {
    userApis.getCertifyDetail(certifyId).then((res) => {
      setCommentList(res.commentList);
      // setGroupId(res.groupId)
      console.log(res);
    });
  }, []);
  console.log(commentList);
  const [comment, setComment] = useState("");
  const commentHandler = (e) => {
    setComment(e.target.value);
  };
  console.log(comment);
  const addComment = () => {
    const commentMsg = {
      certifyId: certifyId,
      content: comment,
    };
    userApis
      .writeComment(commentMsg)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledDiv>
            <CommentDetail commentList={commentList} groupDetail={groupDetail}/>
      <CommentInputBox>
        <CommentInput
          placeholder="댓글입력"
          onChange={commentHandler}
        ></CommentInput>
        <CommnetRegister>
          <BsArrowUpCircleFill
            color="#5e43ff"
            size="18"
            zindex="100"
            onClick={addComment}
          />
        </CommnetRegister>
      </CommentInputBox>
    </StyledDiv>
  );
};

export default Comment;

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