import { PlusCircleFilled } from '@ant-design/icons';
import { Row, Select } from 'antd';
import styled from 'styled-components';
import CrewInfo from '@components/cards/CrewInfo';
import styles from './group_list.module.less';
import { useNavigate } from 'react-router';
import ArrowButton from '@components/button/ArrowButton';
import React from 'react';
// /grup
const Group = () => {
  const navigate = useNavigate();
  return (
    <Container id={'content'}>
      <Row>
        <Select className={styles.pop_radius} defaultValue={'all'}>
          <Select.Option value='all'>전체</Select.Option>
        </Select>
      </Row>
      <Row>
        <AddGroupContainer onClick={() => navigate('create')}>
          <PlusCircleFilled
            style={{
              color: 'rgba(58,58,58,0.3)',
              fontSize: '2.25rem',
            }}
          />
          새 크루 생성
        </AddGroupContainer>
      </Row>
      <CrewInfo type='list'></CrewInfo>
      <CrewInfo type='list'></CrewInfo>
      <CrewInfo type='list'></CrewInfo>
      <CrewInfo type='list'></CrewInfo>
      <CrewInfo type='list'></CrewInfo>
      <Box>
        더이상 그룹이 없어요.
        <ArrowButton />
      </Box>
    </Container>
  );
};

export default React.memo(Group);

const Container = styled.div`
  flex-direction: column;
  display: flex;
  gap: 1rem 0;
`;

const AddGroupContainer = styled.div`
  width: 100%;
  height: 162px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  justify-content: center;
  gap: 0.75rem 0;
  color: rgba(58, 58, 58, 0.3);
  flex-direction: column;
  border: 1px dashed rgba(58, 58, 58, 0.3);
  border-radius: 25px;
  transition: 250ms;
  &:hover {
    transform: scale(0.95);
  }
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #787878;
  font-size: 0.8rem;
`;
