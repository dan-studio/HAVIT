import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import havit from '@/assets/havitLogoPurple.png';
import team from '@assets/havitTeam2.png';
import naverButton from '@assets/naverButton.png';
import kakaoButton from '@assets/kakaoButton.png';
import {  useDispatch } from 'react-redux';
import { resetLayout, setLayout } from '@redux/layout';
import useInputs from '@hooks/useInput';
import { signin } from '@apis/auth/principal';
import { RootDiv } from '../BasicLayout';

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout({ showHeader: false }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

  const [form, onChange, reset] =  useInputs({
    email:"",
    password:"",
  });

  const submmitHandler = ()=>{
    signin(form).then((res)=>{
      if(res.data.code==="MEMBER_NOT_FOUND"){
        alert("사용자를 찾을 수 없습니다.")
        return
      }else if(res.data.code==="PASSWORD_NOT_MATCHED"){
        alert("비밀번호가 일치하지 않습니다.")
        return
      }
      if(res.status === 200){
        alert(`${res.data.nickname}님 환영합니다!`);
        navigate("/");
      }
    }).catch((err)=>{
      if(err){
          alert(err)
      } 
    })
  }
  return (
    <StyledDiv>
      <StyledSpan>
        <br />
        <img src={havit} alt="" />
      </StyledSpan>
      <StyledInput
        type="email"
        top="24vh"
        
        placeholder="✉  E-Mail"
        value={form?.email}
        name={"email"}
        onChange={onChange}
      />
      <StyledInput
        type="password"
        top="32vh"
        placeholder="🔒  비밀번호"
        value={form?.password}
        name={"password"}
        onChange={onChange}
      />
      <StyledButtonDiv>
        <StyledButton
          top="40vh"
          color="white"
          background="#5C53FF"
          type="submit"
          onClick={submmitHandler}
        >
          로그인
        </StyledButton>
        <StyledButton
          top="47vh"
          background="white"
          onClick={() => {
            navigate('/auth');
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
  .message {
    position: absolute;
    font-size: 1.4vh;
    font-weight: 500;
    &.success {
      color: #2ede3d;
    }
    &.error {
      color: #5e43ff;
    }
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
  cursor: pointer;
  :disabled {
    cursor: unset;
    background-color: #ccc;
    border: 1px solid #ccc;
  }
`;
const StyledInput = styled.input`
  position: absolute;
  top: ${props => props.top};
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
  width: 150px;
  height: 40px;
  border-radius: 7px;
  margin: 0 2vw;
  cursor: pointer;
`;
const StyledKakaoButton = styled.img`
  width: 150px;
  height: 40px;
  border-radius: 7px;
  margin: 0 2vw;
  cursor: pointer;
`;

