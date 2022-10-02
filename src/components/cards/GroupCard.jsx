import styled from 'styled-components';
import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { fileUrlHost } from '@apis/config';

const GroupCard = ({title, imgUrl, memberCount, onClick}) => {
  const [src, setSrc] = React.useState(fileUrlHost(imgUrl))
  return (
    <div onClick={onClick}>
      <GroupCardBox>
        {!!imgUrl ? (<GroupPhoto src={src} />) : (<EmptyPhoto>이미지 없음</EmptyPhoto>)}
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
  max-width:150px;
  font-weight: 600;
  line-height: 19px;
  margin: 5px 5px;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
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

const EmptyPhoto = styled.div`
  border:1px solid lightgray;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  display:flex;
  justify-content:center;
  align-items:center;
`;
export default GroupCard;
