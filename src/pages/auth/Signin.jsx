import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import havit from "@/assets/havitLogoPurple.png";
import team from "@assets/havitTeam2.png";
import naverButton from "@assets/naverButton.png";
import kakaoButton from "@assets/kakaoButton.png";
import { useDispatch } from "react-redux";
import { resetLayout, setLayout } from "@redux/layout";
import useInputs from "@hooks/useInput";
import { signin } from "@apis/auth/principal";
import { RootDiv } from "../BasicLayout";
import { Modal } from "antd";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout({ showHeader: false }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

  const [form, onChange, reset] = useInputs({
    email: "",
    password: "",
  });

  const submmitHandler = () => {
    signin(form)
      .then((res) => {
        if (res.data.code === "MEMBER_NOT_FOUND") {
          alert("사용자를 찾을 수 없습니다.");
          return;
        } else if (res.data.code === "PASSWORD_NOT_MATCHED") {
          alert("비밀번호가 일치하지 않습니다.");
          return;
        }
        if (res.status === 200) {
          alert(`${res.data.nickname}님 환영합니다!`);
          navigate("/");
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      submmitHandler();
    }
  };
  return (
    <StyledDiv>
      <StyledSpan>
        Sign in to
        <br />
        <img src={havit} alt="" />
      </StyledSpan>
      <StyledInputDiv>
        <StyledInput
          type="email"
          placeholder="✉  E-Mail"
          value={form?.email}
          name={"email"}
          onChange={onChange}
        />
        <StyledInput
          type="password"
          placeholder="🔒  비밀번호"
          value={form?.password}
          name={"password"}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </StyledInputDiv>
      <StyledButtonDiv>
        <StyledButton
          color="white"
          background="#5C53FF"
          type="submit"
          onClick={submmitHandler}
        >
          로그인
        </StyledButton>
        <StyledButton
          background="white"
          onClick={() => {
            navigate("/auth");
          }}
        >
          뒤로가기
        </StyledButton>
      </StyledButtonDiv>
    </StyledDiv>
  );
};

export default Signin;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .message {
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
  left: 15vw;
  font-weight: 400;
  font-size: 35px;
  line-height: 50px;
  margin: 40px 15vw 20px;
  img {
    width: 140px;
  }
`;

const StyledButtonDiv = styled.div`
  width: 80vw;
  margin: 0 auto;
`;
const StyledButton = styled.button`
  width: 80vw;
  color: ${(props) => props.color};
  border: 1px solid #5c53ff;
  background-color: ${(props) => props.background};
  padding: 10px;
  border-radius: 30px;
  margin: 0 0 10px;
  cursor: pointer;
  :disabled {
    cursor: unset;
    background-color: #ccc;
    border: 1px solid #ccc;
  }
`;

const StyledInputDiv = styled.div`
  width: 80vw;
  margin: 0 auto 10px;
`;

const StyledInput = styled.input`
  width: 80vw;
  border: 1px solid #d9d9d9;
  padding: 10px 30px;
  border-radius: 30px;
  margin: 10px auto 0;
`;
