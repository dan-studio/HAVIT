import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <StyledDiv>
      <StyledSpan>
        환영해요 <br />
        <img
          src="https://velog.velcdn.com/images/danchoi/post/c4a8c59f-a1cc-42bc-9988-87288889c969/image.png"
          alt=""
        />{" "}
        &emsp;&emsp;&emsp;&emsp;&ensp;&nbsp; 은 <br />
        처음이신가요?
      </StyledSpan>

      <StyledButtonDiv>
        <StyledButton top="65vh" color="white" background="#5C53FF">
          네, 처음이에요
        </StyledButton>
        <StyledButton top="71vh" background="white">
          아니요, 이미 회원이에요
        </StyledButton>
      </StyledButtonDiv>
    </StyledDiv>
  );
};

export default Login;

const StyledDiv = styled.div``;
const StyledSpan = styled.span`
  color: #252224;
  position: absolute;
  left: 15vw;
  top: 25vh;
  font-weight: 400;
  font-size: 35px;
  line-height: 50px;
  img {
    position: absolute;
    margin-top: .5vh;
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
  width: 70vw;
  color: ${(props) => props.color};
  border: 1px solid #5c53ff;
  background-color: ${(props) => props.background};
  padding: 5px;
  border-radius: 30px;
`;
