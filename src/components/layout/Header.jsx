import React, { useState } from "react";
import styled from "styled-components";
import { FiSettings, FiSearch } from "react-icons/fi";
import Search from "@components/layout/Search";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [showSearchForm, setShowSearchForm] = useState(false);
  return (
    <>

      <Container id="header">
        <StyledLogo
          alt="logo"
          src={require("@assets/havit.png")}
          onClick={() => {
            navigate("/main");
          }}
        />

        <Icons>
          <FiSearch onClick={() => setShowSearchForm(true)} />
          <FiSettings
            onClick={() => {
              navigate("mypage/edit");
            }}
          />
        </Icons>
      </Container>
      {!!showSearchForm ? <Search /> : <></>}
    </>
  );
};

const Container = styled.div`
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
  color: #b0b0b0;
  & > * {
    margin: 0 0.25rem;
    &:hover {
      transform: scale(0.85);
    }
  }
`;

const StyledLogo = styled.img`
  height: 30px;
  cursor: pointer;
`;
export default Header;
