import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';
import { userApis } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Search = ({onClose}) => {

  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const navigate = useNavigate()
  const onChange = e => {
    setSearch(e.target.value)
    userApis.search(search).then(res=>{
      setSearchResult(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
  },[search, searchResult])

  return (
    <StyleCover>
    <StyleContainer id ="searchContainer">
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
            }
            onChange={onChange}
            ></Input>
        </StyleSearchBox>
        <StyleHistoryBox>
          <h2>최근검색기록</h2>
          {search.length>=2&&
          searchResult.map((item, idx)=>
          <div key={idx} onClick={()=>{navigate('/group/'+item.groupId)}}>{item.title}</div>
          )}
        </StyleHistoryBox>
        <StyleDragLine></StyleDragLine>
      </StyleContainer>
      <StyleUpCover onClick={()=>{
        document.getElementById("searchContainer").style.animationName="slide-fade-up-animation";
        setTimeout(() => {
          onClose(true);
        }, 500);
      }}></StyleUpCover>
    </StyleCover>
  );
};

export default React.memo(Search);
const StyleUpCover = styled.div`
  position:fixed;
  bottom:0;
  height:calc(840px - 675px);
  left:0;
  width:100%;
`
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
  animation: 500ms slide-fade-in-animation forwards 1;
  top: -100%; 
  left: 0; 
  @keyframes slide-fade-in-animation {
    0% {
      top: -100%;
    }

    100% {
      top: 0;
    }
  }
  @keyframes slide-fade-up-animation {
    0% {
      top: 0;
    }

    100% {
      top: -100;
    }
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