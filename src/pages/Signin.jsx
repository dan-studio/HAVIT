import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import havit from "../assets/havitLogoPurple.png";
import team from "../assets/havitTeam2.png";
import naverButton from "../assets/naverButton.png";
import kakaoButton from "../assets/kakaoButton.png";

const Signin = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <StyledSpan>
        Sign in to
        <br />
        <img src={havit} alt="" />
      </StyledSpan>
      <StyledInput top="25vh" placeholder="✉  E-Mail" />
      <StyledInput top="32vh" placeholder="🔒  비밀번호" />
      <StyledButtonDiv>
        <StyledButton
          top="40vh"
          color="white"
          background="#5C53FF"
          onClick={() => {}}
        >
          로그인
        </StyledButton>
        <StyledButton
          top="47vh"
          background="white"
          onClick={() => {
            navigate(-1);
          }}
        >
          뒤로가기
        </StyledButton>
      </StyledButtonDiv>
      <StyledOrDiv>
        <StyledHrLeft />
        <StyledHrRight />
        <span>or</span>
      </StyledOrDiv>
      <StyledSocialLogin>
        <StyledNaverButton src={naverButton} alt="" />
        <StyledKakaoButton src={kakaoButton} alt="" />
      </StyledSocialLogin>
      <img className="team" src={team} alt="" height="140vh" />
    </StyledDiv>
  );
};

export default Signin;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  .team {
    position: absolute;
    top: 70vh;
  }
`;
const StyledSpan = styled.span`
  color: #252224;
  position: absolute;
  left: 15vw;
  top: 7vh;
  font-weight: 400;
  font-size: 35px;
  line-height: 50px;
  img {
    position: absolute;
    margin-top: 0.5vh;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledButton = styled.button`
  position: absolute;
  top: ${(props) => props.top};
  width: 80vw;
  color: ${(props) => props.color};
  border: 1px solid #5c53ff;
  background-color: ${(props) => props.background};
  padding: 10px;
  border-radius: 30px;
`;
const StyledInput = styled.input`
  position: absolute;
  top: ${(props) => props.top};
  width: 80vw;
  border: 1px solid #d9d9d9;
  padding: 10px 30px;
  border-radius: 30px;
`;
const StyledHrLeft = styled.hr`
  position: absolute;
  width: 30vw;
  background-color: #cecece;
  left: 10vw;
`;
const StyledHrRight = styled.hr`
  position: absolute;
  width: 30vw;
  background-color: #cecece;
  right: 10vw;
`;
const StyledOrDiv = styled.div`
  position: absolute;
  top: 53vh;
  color: #cecece;
  font-size: 2.5vh;
  hr {
    transform: translateY(1vh);
  }
`;
const StyledSocialLogin = styled.div`
  position: absolute;
  top: 58vh;
`;
const StyledNaverButton = styled.img`
  width: 37vw;
  height: 4vh;
  object-fit: cover;
  border-radius: 7px;
  margin: 0 2vw;
  `;
const StyledKakaoButton = styled.img`
  width: 37vw;
  height: 4vh;
  object-fit: cover;
  border-radius: 7px;
  margin: 0 2vw;
`;
