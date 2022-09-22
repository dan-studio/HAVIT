import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/havit_black.svg";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/startpage");
    }, 2000);
  }, );
  return (
    <StyledDiv>
      <StyledImg src={logo} />
      <StyledP>혼자가 아닌, 함께 만들어가는 습관.</StyledP>
      <StyledSpinner />
    </StyledDiv>
  );
};

export default Start;

const StyledDiv = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledImg = styled.img`
  width: 200px;
`;
const StyledP = styled.p`
  margin-top: 35vh;
  position: absolute;
  font-size: 16px;
  text-align: center;
  color: #575757;
`;
const StyledSpinner = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 65vh;
  left: 50%;
  width: 64px;
  height: 64px;
  margin-top: -32px;
  margin-left: -32px;
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
