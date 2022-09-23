import styled, { css } from 'styled-components';
import { useState } from 'react';
import { MdPeopleAlt } from 'react-icons/md';
import { HiStar } from 'react-icons/hi';

// 컴포넌트
import DayBadge from '../DayBadge';
import Tags from '../Tag';
import { Tag } from 'antd';

const CrewInfo = ({ data, type = 'shadow' }) => {
  const [groupName, setGroupName] = useState('오운완ㅋ');
  const [numberOfPeople, setNumberOfPeopf] = useState(1);

  return (
    <Card type={type}>
      <GroupImg />

      <GroupInfo>
        <h2>{groupName}</h2>

        <DayInfo>
          <span>8월 19일 생성됨</span>
          <Cycle color={'#5e43ff'} style={{ margin: '0 .5rem' }}>
            매일
          </Cycle>
        </DayInfo>

        <div>
          <MdPeopleAlt color='#5e43ff' />
          <span>{numberOfPeople}명</span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '8px',
          }}>
          <Tag>테스트</Tag>
          <Tag>테스트1</Tag>
          <Tag>테스트2</Tag>
        </div>
      </GroupInfo>
      <HiStar style={{ color: '#ECA51B', fontSize: '32px', position: 'absolute', zIndex: '10', top: '10px', right: '10px' }} />
    </Card>
  );
};
export default CrewInfo;

const Card = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0 20px 25px 20px;
  position: relative;
  height: 162px;
  background-color: #ffffff;
  ${({ type }) => {
    switch (type) {
      case 'shadow':
        return ShadowCard;
      case 'list':
        return css`
          border-bottom: 0.5px solid #d9d9d9;
        `;
        case 'detail':
          return Detail;
      default:
        return ShadowCard;
    }
  }}
`;

const Detail = css``
const Cycle = styled.div`
background-color: #5e43ff;
color: white;
border-radius: 10px;
width: 33px;
font-size: 12px;
display: flex;
justify-content: center;


`

const ShadowCard = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0.5px solid #eaeaea;
  border-radius: 10px;
  padding: 15px;
`;

const GroupImg = styled.div`
  width: 92px;
  height: 92px;
  margin-right: 20px;
  border: 1px solid black;
  border-radius: 100%;
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
  align-items: center;
  & > span {
    font-weight: bold;
  }
`;
