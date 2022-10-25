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
  const onClickEvent = () => {
    navigate(`/setting/event`);
  };  
  return (
    <>
      <Container
        id="header"
        invert={layout.isInvert}
        smallType={layout.smallType}
      >
      {/* <AdDiv>
          <span onClick={onClickEvent}  >
            클릭!!!  설문조사 이벤트에 참여하고 스벅 기프티콘, 자체제작 티셔츠를 받아가세요.  자세한 정보를 얻으려면 일단 클릭!!!
            
          </span>
        </AdDiv> */}
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
