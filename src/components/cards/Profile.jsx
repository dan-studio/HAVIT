import styled, { css } from 'styled-components';

// 컴포넌트
import DayBadge from '../DayBadge';
import Tags from '../Tag';
import { Tag } from 'antd';

const Profile = ({ data, type = 'shadow' }) => {
  return (
    <Card type={type}>
      <ProfileImg />
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 40px 20px;
  padding: 20px 0;
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
      default:
        return ShadowCard;
    }
  }}
`;

const ShadowCard = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0.5px solid #eaeaea;
  border-radius: 20px;
  padding: 15px;
`;

const ProfileImg = styled.div`
  width: 92px;
  height: 92px;
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

export default Profile;
