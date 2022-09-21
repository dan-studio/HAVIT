import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import havit from "../assets/havitLogoPurple.png";
import team from "../assets/havitTeam.png";

const Signup = () => {
  const navigate = useNavigate()

  return (
    <StyledDiv>
      <StyledSpan>
        Come aboard, <br />
        Let's make <br />
        <img src={havit} alt="" />
        <br />
        Together!
      </StyledSpan>
      <StyledInput top="33vh"  placeholder="✉  E-Mail"/>
      <StyledInput top="40vh" placeholder="🙋‍♂️  닉네임"/>
      <StyledInput top="47vh" placeholder="🔒  비밀번호"/>
      <StyledInput top="54vh" placeholder="🔒  비밀번호 확인"/>
      <img className="team" src={team} alt="" height="120vh"/>
      <StyledButtonDiv>
        <StyledButton
          top="80vh"
          color="white"
          background="#5C53FF"
          onClick={() => {}}
        >
          회원가입 완료
        </StyledButton>
        <StyledButton top="87vh" background="white" onClick={()=>{navigate(-1)}}>
          뒤로가기
        </StyledButton>
      </StyledButtonDiv>
    </StyledDiv>
  );
};

export default Signup;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  .team{
    position: absolute;
    top: 63vh;
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
  padding: 10px 30px ;
  border-radius: 30px;
`;
