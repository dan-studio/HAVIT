import styled from "styled-components";
import React from "react";
import { BsPeopleFill } from "react-icons/bs";

const GroupCard = () => {
  return (
    <div>
      <GroupCardBox>
        <GroupPhoto src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></GroupPhoto>
        <GroupTitle>오운완챌린지ㅋ</GroupTitle>
        <HeadBox>
        <BsPeopleFill color="#5e43ff" />
        <HeadCount>1명</HeadCount>
        </HeadBox>
      </GroupCardBox>
    </div>
  );
};
const GroupCardBox = styled.div`
display:flex;
flex-direction:column;
margin: 0px 5px;
`;
const GroupTitle = styled.div`
font-size:16px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
line-height: 19px;
margin:5px 5px;
`;
const HeadCount = styled.div`
font-size:14px;
margin-left:5px ;
`;
const HeadBox = styled.div`
display:flex;
flex-direction:row;
`;
const GroupPhoto = styled.img`
  width: 110px;
  height: 110px;
  border-radius:10px;
  object-fit: cover;
`;
export default GroupCard;
