import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import styled from 'styled-components';

const Search = ({ searchRef }) => {
  const [visibleAnimation, setVisibleAnimation] = React.useState(false);

  React.useEffect(() => {
    if (searchRef) {
      setVisibleAnimation(true);
    } else {
      setTimeout(() => {
        setVisibleAnimation(false);
      }, 0.4);
    }
  }, [searchRef]);

  return (
    <StyleCover>
      <StyleContainer ref={searchRef} className={`${searchRef ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
        <StyleSearchBox>
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
        </StyleSearchBox>
        <StyleHistoryBox>
          <h2>최근검색기록</h2>
          <div>내일군대감</div>
          <div>등산모임</div>
          <div>배그 5판 연속 치킨</div>
          <div>김병처리</div>
          <div>미라클 모닝</div>
        </StyleHistoryBox>
        <StyleDragLine></StyleDragLine>
      </StyleContainer>
    </StyleCover>
  );
};

export default Search;

const StyleCover = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;
const StyleContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 80%;
  background-color: white;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  /* animation: 500ms dropdown forwards 1; */
  /* top: -100%; */
  /* left: 0; */
  /* fade in */
  @keyframes slide-fade-in-dropdown-animation {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  &.slide-fade-in-dropdown {
    overflow: hidden;
  }

  &.slide-fade-in-dropdown {
    animation: slide-fade-in-dropdown-animation 0.4s ease-in-out;
  }

  /* fade out */
  @keyframes slide-fade-out-dropdown-animation {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-100%);
    }
  }

  &.slide-fade-out-dropdown {
    overflow: hidden;
  }

  &.slide-fade-out-dropdown {
    animation: slide-fade-out-dropdown-animation 0.4s ease;
    animation-fill-mode: forwards;
  }
`;
const StyleSearchBox = styled.div`
  width: 100%;
  height: 128px;
  margin: 2 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyleHistoryBox = styled.div`
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
const StyleDragLine = styled.div`
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
