import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React, { useRef } from 'react';
import styled from 'styled-components';

const Location = ({ locationRef }) => {
  const locationDisable = useRef();

  return (
    <Cover onClick={locationDisable}>
      <Container ref={locationRef}>
        <SearchBox>
          <Input
            type='search'
            style={{
              width: '90%',
              height: '3rem',
              borderRadius: '25px',
            }}
            prefix={
              <SearchOutlined
                style={{
                  color: '#5E43FF',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                }}></SearchOutlined>
            }></Input>
        </SearchBox>
        <HistoryBox>
          <h2>최근위치검색기록</h2>
          <div>스파르타</div>
          <div>용용선생</div>
          <div>서울대학교</div>
          <div>김병처리 집</div>

        </HistoryBox>
        <DragLine></DragLine>
      </Container>
    </Cover>
  );
};

export default Location;

const Cover = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;
const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 80%;
  background-color: white;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  animation: 500ms dropdown forwards 1;
  top: -100%;
  left: 0;
  @keyframes dropdown {
    from {
      top: -100%;
    }
    to {
      top: 0%;
    }
  }
`;
const SearchBox = styled.div`
  width: 100%;
  height: 128px;
  margin: 2 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HistoryBox = styled.div`
  width: 100%;
  max-height: 70%;
  padding: 0 2.5rem;
  overflow: hidden;
  & > h2 {
    font-size: 1.125rem;
    font-weight: bold;
    letter-spacing: -2px;
    color: ${({ theme }) => {
      return theme.color.neongreen;
    }};
    margin-bottom: 1rem;
  }
  & > div {
    font-size: 1rem;
    font-weight: 600;
    margin: 0.25rem 0;
  }
`;
const DragLine = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 4px;
  border-radius: 25px;
  background-color: ${({ theme }) => {
    return theme.color.black;
  }};
`;
