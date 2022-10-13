import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import logo from "../assets/havit_black.svg";
import { resetLayout, setLayout } from "../redux/layout";

const ServerOnMaintenance = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout({ showHeader: false }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);
  return (
    <StyledDiv>
      <StyledImg src={logo} />
      <StyledParagraph marginTop="35vh">더 나은 서비스를 위해 서버를 점검하고 있습니다.</StyledParagraph>
      <StyledParagraph marginTop="45vh">불편을 끼쳐드려 죄송합니다.</StyledParagraph>
    </StyledDiv>
  );
};

export default ServerOnMaintenance;
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
  font-size: ${props=>props.fontSize||"17px"};
  text-align: center;
  color: #575757;
`;
