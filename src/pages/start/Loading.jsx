import React from "react";
import styled from "styled-components";
import logo from "@assets/havit_black.svg";

const Loading = () => {
  return (
    <StDiv>
      <StImg src={logo} />
      <StParagraph>혼자가 아닌, 함께 만들어가는 습관.</StParagraph>
      <StSpinner />
    </StDiv>
  );
};

export default Loading;

const StDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;
const StImg = styled.img`
  width: 200px;
`;
const StParagraph = styled.p`
  margin:3rem 0;
  font-size: 16px;
  text-align: center;
  color: #575757;
`;
const StSpinner = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: #575757;
  border-bottom-color: #575757;
  animation: spinner .9s ease infinite;

  @keyframes spinner {
  from {transform: rotate(0deg); }
  to {transform: rotate(360deg);}
}
`;
