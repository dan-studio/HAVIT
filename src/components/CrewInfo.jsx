import styled from 'styled-components';
import { useState } from 'react';
import { MdPeopleAlt } from 'react-icons/md';
import groupProfile from '../img/profile.jpg';

// 컴포넌트
import DayBadge from './DayBadge';
import Tags from './Tag';

const CrewInfo = () => {
  const [groupImg, setGroupImg] = useState(groupProfile);
  const [groupName, setGroupName] = useState('오운완ㅋ');
  const [numberOfPeople, setNumberOfPeopf] = useState(1);

  return (
    <Card>
      <GroupImg>
        <img src={groupImg} alt='group_image' />
      </GroupImg>
      <GroupInfo>
        <h2>{groupName}</h2>
        <DayInfo>
          <span>8월 19일 - 12월 31일</span>
          <span>
            <DayBadge />
          </span>
        </DayInfo>
        <div>
          <MdPeopleAlt color='#5e43ff' />
          <span>{numberOfPeople}명</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Tags />
          <Tags />
          <Tags />
        </div>
      </GroupInfo>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  box-sizing: border-box;
  margin: 0 20px 0 20px;
  padding: 15px;
  /* width: 46.4vw; */
  height: 162px;
  border: 0.5px solid #eaeaea;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const GroupImg = styled.div`
  width: 92px;
  height: 92px;
  margin-right: 20px;
  background-color: red;
  border-radius: 9999px;
  overflow: hidden;
  & > img {
    width: 92px;
    height: 92px;
    object-fit: cover;
  }
`;

const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;

  & > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 22px;
  }
`;

const DayInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Nop = styled.div`
  display: flex;
`;

export default CrewInfo;
