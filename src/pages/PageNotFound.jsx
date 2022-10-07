import React from "react";
import styled from "styled-components";
import logo from "../assets/havit_black.svg";

const PageNotFound = () => {
  return (
    <StyledDiv>
      <StyledImg src={logo} />
      <StyledParagraph>요청하신 페이지를 찾을 수 없습니다.</StyledParagraph>
    </StyledDiv>
  );
};

export default PageNotFound;
const StyledDiv = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledImg = styled.img`
  width: 200px;
`;
const StyledParagraph = styled.p`
  margin-top: 25vh;
  position: absolute;
  font-size: 25px;
  text-align: center;
  color: #575757;
`;
