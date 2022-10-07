import styled, { css } from 'styled-components';
import { MdPeopleAlt } from 'react-icons/md';
import { HiStar } from 'react-icons/hi';
import { FORMAT_DATE } from '@utils/format/time';
// 컴포넌트
import Tags from '../Tag';
import { useNavigate } from 'react-router-dom';
import { fileUrlHost } from '@apis/config';
import moment from 'moment';
import { Image } from 'antd';

const CrewInfo = ({ data, type = 'shadow', groupId, title, startDate, memberCount, memberList, imgUrl, groupTag, favorite, createdAt }) => {
  const navigate = useNavigate();
  const createdDate = createdAt?.slice(2, 10).split('-');
  const yyyy_mm_dd = () => {
    if (createdDate && createdDate.length > 0) {
      return createdDate[0] + '년 ' + createdDate[1] + '월 ' + createdDate[2] + '일';
    }
  };
  const routeHandler = () => {
    navigate(`/group/${groupId}`, {state:'/group'});
  };
  return (
    <>
      <StyledCard type={type}>
        <Image className='circleImage' src={fileUrlHost(imgUrl)} onClick={routeHandler} />
        <StyledGroupInfo>
          <h2 onClick={routeHandler}>{title}</h2>
          <StyledDayInfo>
            <span>{yyyy_mm_dd()} 생성</span>
            <StyledCycle color={'#5e43ff'} style={{ margin: '0 .5rem' }}>
              매일
            </StyledCycle>
          </StyledDayInfo>
          <StyledPeople>
            <MdPeopleAlt style={{ fontSize: '16px' }} color='#5e43ff' />
            <StyledSpan>{memberList ? memberList.length : memberCount}명</StyledSpan>
          </StyledPeople>
          <StyledTagDiv>
            {groupTag?.map((item, idx) => (
              <Tags item={item} key={idx} />
            ))}
          </StyledTagDiv>
        </StyledGroupInfo>
        {favorite && (
          <HiStar
            style={{
              color: '#ECA51B',
              fontSize: '20px',
              position: 'absolute',
              zIndex: '10',
              top: '10px',
              right: '10px',
            }}
          />
        )}
      </StyledCard>
    </>
  );
};
export default CrewInfo;

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  position: relative;
  min-height: 162px;
  background-color: #ffffff;
  & .circleImage,
  & .ant-image-mask {
    width: 110px;
    height: 110px;
    margin-right: 20px;
    border-radius: 100%;
    overflow: hidden;
    object-fit: cover;
  }
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

const Detail = css``;
const StyledCycle = styled.div`
  background-color: #5e43ff;
  color: white;
  border-radius: 10px;
  width: 33px;
  font-size: 12px;
  display: flex;
  justify-content: center;
`;

const ShadowCard = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0.5px solid #eaeaea;
  border-radius: 10px;
  padding: 15px;
`;

const StyledGroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  & > h2 {
    width: 190px;
    word-break: nowrap;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.2rem;
    font-weight: 800;
    line-height: 20px;
  }
`;
const StyledPeople = styled.div`
  display: flex;
  align-items: center;
`;
const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  margin-left: 0.25rem;
  margin: 5px;
`;
const StyledDayInfo = styled.div`
  display: flex;
  align-items: center;
  & > span {
    font-weight: bold;
  }
`;
const StyledTagDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 190px;
  max-height: 75px;
`;
