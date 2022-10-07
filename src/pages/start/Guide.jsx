import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import havit from "@assets/havitLogoPurple.png";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { resetLayout, setLayout } from "../../redux/layout";
import { RootDiv } from "../BasicLayout";

const Guide = () => {
  const navigate = useNavigate();
  const layout = useSelector((state) => state.layout, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout({ showHeader: false }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

  return (
    <StDiv>
      <StSpan>
        환영해요 <br />
        <img src={havit} alt="" /> &emsp;&emsp;&emsp;&emsp;&ensp;&nbsp; 은{" "}
        <br />
        처음이신가요?
      </StSpan>
      <StButtonDiv>
        <StButton
          top="65vh"
          color="white"
          background="#5C53FF"
          onClick={() => {
            navigate("signup");
          }}
        >
          네, 처음이에요
        </StButton>
        <StButton
          top="71vh"
          background="white"
          onClick={() => {
            navigate("signin");
          }}
        >
          아니요, 이미 회원이에요
        </StButton>
      </StButtonDiv>
    </StDiv>
  );
};

export default Guide;

const StDiv = styled.div``;
const StSpan = styled.span`
  color: #252224;
  position: absolute;
  left: 15vw;
  top: 25vh;
  font-weight: 400;
  font-size: 35px;
  line-height: 50px;
  img {
    position: absolute;
    margin-top: 0.5vh;
  }
`;

const StButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StButton = styled.button`
  position: absolute;
  top: ${(props) => props.top};
  width: 70vw;
  color: ${(props) => props.color};
  border: 1px solid #5c53ff;
  background-color: ${(props) => props.background};
  padding: 5px;
  border-radius: 30px;
  cursor: pointer;
`;
