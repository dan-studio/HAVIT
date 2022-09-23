import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FiSettings, FiSearch } from "react-icons/fi";
import Search from "@components/layout/Search";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const searchRef = useRef();
  const navigate = useNavigate();
  const [showSearchForm, setShowSearchForm] = useState(false);
  const invert = useSelector((state) => state.layout);
  useEffect(() => {
    let handler = (e) => {
      if (!searchRef.current?.contains(e.target)) {
        setShowSearchForm(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <Container id="header" invert={invert.isInvert}>
        {invert.isInvert ? (
          <StyledInvertedLogo
            alt='logo'
            src={require('@assets/HavitWhite.png')}
            onClick={() => {
              navigate('/main');
            }}
          />
        ) : (
          <StyledLogo
            alt='logo'
            src={require('@assets/havit.png')}
            onClick={() => {
              navigate('/main');
            }}
          />
        )}

        <Icons invert={invert.isInvert}>
          <Setting>
            <FiSearch onClick={() => setShowSearchForm(true)} style={{"marginRight":"20px"}}/>
            <FiSettings
              onClick={() => {
                navigate("mypage/edit");
              }}
            />
            <AlertSign></AlertSign>
          </Setting>
        </Icons>
      </Container>
      {!!showSearchForm ? <Search searchRef={searchRef} /> : <></>}
    </>
  );
};
const Container = styled.div`
  background-color: ${(props) => (props.invert ? "#5E43FF" : "white")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;
const Icons = styled.div`
  font-size: 22px;
  color: ${(props) => (props.invert ? "white" : "#b0b0b0")};
  & > * {
    margin: 0 0.25rem;
    &:hover {
      transform: scale(0.85);
    }
  }
`;
const StyledLogo = styled.img`
  width: 120px;
  cursor: pointer;
`;
const StyledInvertedLogo = styled.img`
  width: 120px;
  cursor: pointer;
`;
const Setting = styled.div`
  position: relative;
`;
const AlertSign = styled.div`
  position: absolute;
  top: 3px;
  right: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: red;
`;
export default Header;
