import styled from 'styled-components';
import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';

const GroupCard = ({title, imgUrl, memberCount}) => {
  return (
    <div>
      <GroupCardBox>
        <GroupPhoto src={imgUrl}/>
        <GroupTitle>{title}</GroupTitle>
        <HeadBox>
          <div style={{display:'flex', alignItems:'center', margin:'0 .3125rem'}}>
            <BsPeopleFill color='#5e43ff' />
            <HeadCount>{memberCount}</HeadCount>
          </div>
        </HeadBox>
      </GroupCardBox>
    </div>
  );
};
const GroupCardBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 5px;
`;
const GroupTitle = styled.div`
  font-size: 16px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  margin: 5px 5px;
`;
const HeadCount = styled.div`
  font-size: 14px;
  margin-left: 5px;
`;
const HeadBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const GroupPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
`;
export default GroupCard;
