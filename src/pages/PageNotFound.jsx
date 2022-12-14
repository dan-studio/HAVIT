import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/havit_black.svg";
import { resetLayout, setLayout } from "../redux/layout";

const PageNotFound = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(setLayout({ showHeader: false }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);
  return (
    <StyledDiv>
      <StyledImg src={logo} />
      <StyledParagraph marginTop="35vh">요청하신 페이지를 찾을 수 없습니다.</StyledParagraph>
      <StyledParagraph marginTop="45vh" fontSize="15px" onClick={()=>{navigate('/')}}>메인으로 돌아가기</StyledParagraph>
    </StyledDiv>
  );
};

export default PageNotFound;
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
