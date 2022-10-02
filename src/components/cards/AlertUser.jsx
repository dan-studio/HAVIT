import styled, { css } from 'styled-components';
import { useState } from 'react';
import { MdPeopleAlt } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';

// 컴포넌트
import DayBadge from '../DayBadge';
import Tags from '../Tag';
import { Tag } from 'antd';
import { useNavigate } from 'react-router';
import PrimaryButton from '../button/PrimaryButton';
import SubButton from './../button/SubButton';

const AlertUser = ({ data, type = 'shadow', nickName, profileUrl, crew }) => {
  const navigate = useNavigate();

  return (
    <Card type={type}>
      <div style={{ display: 'flex' }}>
        <UserImg />

        <UserInfo>
          <span style={{ marginBottom: '3px' }}>{crew}</span>
          <div style={{ height: '23px' }}>
            <h3>{nickName}</h3>
            <Tag style={{ margin: '0 .5rem', opacity: '.5', color: '#252224' }}>12시간</Tag>
          </div>
        </UserInfo>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '12px',
        }}>
        <SubButton buttonName={'숨기기'} />
        <PrimaryButton buttonName={'확인'} />
      </div>

      <div>
        <AlertBadge>3</AlertBadge>
        <FaBell style={{ color: '#ECA51B', fontSize: '20px', position: 'absolute', zIndex: '10', top: '15px', right: '13px' }} />
      </div>
    </Card>
  );
};
export default AlertUser;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  box-sizing: border-box;
  margin: 0 20px 25px 20px;
  position: relative;
  height: 140px;
  background-color: #ffffff;
  ${({ type }) => {
    switch (type) {
      case 'shadow':
        return ShadowCard;
      case 'list':
        return css`
          border-bottom: 0.5px solid #d9d9d9;
        `;
      default:
        return ShadowCard;
    }
  }}
`;

const ShadowCard = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0.5px solid #eaeaea;
  border-radius: 10px;
  padding: 15px;
`;

const UserImg = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  background-color: red;
  border-radius: 100%;
  overflow: hidden;
  & > img {
    width: 92px;
    height: 92px;
    object-fit: cover;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    & > h3 {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 22px;
    }
  }
  & > span {
    font-style: normal;
    font-weight: 200;
    font-size: 13px;
    line-height: 16px;
  }
`;

const AlertBadge = styled.div`
  width: 15px;
  height: 15px;
  top: 10px;
  right: 8px;
  border-radius: 9999px;
  background-color: #de4242;
  position: absolute;
  z-index: 30;
  font-size: 12px;
  color: white;
  text-align: center;
  line-height: 120%;
`;
