import styled from "styled-components";
// import ReComment from "./ReComment";
import { BsArrowUpCircleFill } from "react-icons/bs";
import React, { useEffect, useState, useRef } from "react";
import { userApis } from "../../apis/auth";
import { MdModeEdit, MdDelete, MdReply } from "react-icons/md";
import { fileUrlHost } from "../../apis/config";


const CommentDetail = ({ certifyId,commentList }) => {
  const [comments, setComments] = useState([])  
  const [isChange, setIsChange] = useState(false)
  useEffect(()=> {

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

  return (
    <StyledDiv>
      {commentList?.map((el) => {
        return (
          <StyledComment key={el.commentId}>

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