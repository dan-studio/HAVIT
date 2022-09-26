import React from "react";
import styled from "styled-components";
import logo from "../assets/havit_black.svg";

const PageNotFound = () => {
  return (
    <StDiv>
      <StImg src={logo} />
      <StParagraph>요청하신 페이지를 찾을 수 없습니다.</StParagraph>
    </StDiv>
  );
};

export default PageNotFound;
const StDiv = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StImg = styled.img`
  width: 200px;
`;
const StParagraph = styled.p`
  margin-top: 25vh;
  position: absolute;
  font-size: 25px;
  text-align: center;
  color: #575757;
`;
