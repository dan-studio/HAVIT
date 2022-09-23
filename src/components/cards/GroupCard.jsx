import styled from "styled-components";
import React from "react";
import { MdPeopleAlt } from "react-icons/md";

const GroupCard = () => {
  return (
    <div>
      <GroupCardBox>
        <GroupPhoto src="https://file.mk.co.kr/meet/neds/2022/01/image_readmed_2022_65373_16434607774924988.jpg"></GroupPhoto>
        <GroupTitle>오운완챌린지ㅋ</GroupTitle>
        <HeadBox>
        <MdPeopleAlt color="#5e43ff" />
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
`;
const PhotoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default GroupCard;
