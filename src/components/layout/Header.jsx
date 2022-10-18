import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { FiSettings, FiSearch } from "react-icons/fi";
import { GiRank3 } from "react-icons/gi";
import Search from "@components/layout/Search";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { transform } from "framer-motion";

const Header = () => {
  const layout = useSelector((state) => state.layout);
  const navigate = useNavigate();
  const [showSearchForm, setShowSearchForm] = useState(false);

  const onClickLogo = () => {
    navigate("/");
  };
  return (
    <>
      <Container
        id="header"
        invert={layout.isInvert}
        smallType={layout.smallType}
      >
        <AdDiv>
          <span>
            이벤트 기간 : 2022년 10월 19일(수) - 25일(화) 자세한 내용은 환경설정(우측 상단 톱니바퀴) =&gt; HAVIT 런칭 이벤트 안내 페이지에서 확인해 주세요!
          </span>
        </AdDiv>
        {layout.isInvert ? (
          <StyledInvertedLogo
            alt="logo"
            src={require("@assets/HavitWhite.png")}
            onClick={onClickLogo}
          />
        ) : (
          <StyledLogo
            alt="logo"
            src={require("@assets/havit.png")}
            onClick={onClickLogo}
          />
        )}

        <Icons invert={layout.isInvert}>
          {/* NOTE SEARCH 부분 */}
          <FiSearch
            onClick={() => setShowSearchForm(true)}
            style={{ marginRight: "10px" }}
          ></FiSearch>
          {/* <GiRank3 onClick={() => navigate('/rank')} size="25px" style={{ marginRight: '10px', strokeWidth: "23" ,transform:"translateY(2px)"}}></GiRank3> */}
          <FiSettings
            onClick={() => {
              navigate("setting");
            }}
          />
        </Icons>
        {!!showSearchForm ? (
          <Search
            onClose={(e) => {
              setShowSearchForm(!e);
            }}
          />
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};
const Container = styled.div`
  background-color: ${(props) => (props.invert ? "#5E43FF" : "white")};
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: ${(props) =>
    props.smallType ? "55px 20px 0px 20px" : "55px 20px 40px 20px"};
  justify-content: space-between;
`;
const Icons = styled.div`
  font-size: ${(props) => props.size || "22px"};
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
const AdDiv = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: rgb(100, 100, 100, 0.5);
  span {
    color: white;
    font-weight: bold;
    animation: belt 20s infinite linear;
    width: 300vw;
    font-size: 13px;
    white-space: nowrap;
  }
  @keyframes belt {
    0% {
      transform: translateX(400px);
    }
    100% {
      transform: translateX(-800px);
    }
    
  }
`;

export default Header;
