import React from 'react';
import styled from 'styled-components';

const Alert = ({message,setAlertPopUp}) => {
  
  const title = message().slice(0, -12)
  const content = message().slice(-12)

  return (
    <StyledPopUp>
    <p className='alert'>🚨알림이 도착했어요🚨</p><p className='title'>{title}</p><p className='content'>{content}</p>
    <div onClick={()=>{setAlertPopUp(false)}}>닫기</div>
  </StyledPopUp>
  );
};

export default Alert;
const StyledPopUp = styled.div`
position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 30vh;
  left: 20vw;
  width: 60%;
  background-color: white;
  height: 170px;
  font-weight: bold;
  z-index: 100;
  padding:15px;
  box-shadow: 10px 5px 20px #1f1f1f8c;
  border-radius: 10px;
  .alert{
    margin-top: 15px;
    font-size: 12px;
  }
  div{
    margin-top: 5px;
    color: #727272;
    font-size: 15px;
    cursor: pointer;
  }
  .title{
    font-size: 15px;
  }
  .content{
    font-size: 14px;
  }
`;
