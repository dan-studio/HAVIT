import { Header } from 'antd/lib/layout/layout';
import React, { useEffect } from 'react';
import styled from "styled-components";
import logo from "../assets/havit_black.svg";
import { useDispatch } from 'react-redux';
import { resetLayout, setLayout } from '../redux/layout';

const WideScreen = () => {
  return (
    <StyledDiv>
      <StyledImg src={logo} />
      <StyledParagraph marginTop="35vh">HAVIT은 모바일에 최적화된 모바일 웹으로,</StyledParagraph>
      <StyledParagraph marginTop="45vh" >모바일 기기에서만 이용이 가능합니다.</StyledParagraph>
    </StyledDiv>
  );
};

export default WideScreen;
const StyledDiv = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledImg = styled.img`
  width: 200px;
`;
const StyledParagraph = styled.p`
  margin-top: ${props=>props.marginTop};
  position: absolute;
  font-size: ${props=>props.fontSize||"22px"};
  text-align: center;
  color: #575757;
`;
