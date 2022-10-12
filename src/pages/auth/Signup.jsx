import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import havit from "@assets/havitLogoPurple.png";
import team from "@assets/havitTeam.png";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { resetLayout, setLayout } from "../../redux/layout";
import { userApis } from "../../apis/auth";
import { signin } from '@apis/auth/principal';

const Signup = () => {
  const navigate = useNavigate();

  const layout = useSelector((state) => state.layout, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout({ showHeader: false }));
    return ()=>{
      dispatch(resetLayout());
    }
  }, []);

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onSubmitHandler = e => {
    e.preventDefault()
    const data = {
      email, nickname, password, passwordConfirm
    }
    userApis.signup(data)
    .then((res)=>{
      console.log(res)
      if(res.code==="DUPLICATE_EMAIL"){
        return alert(res.message)
      }
      alert('회원가입이 완료되었어요 😉')
      navigate('/auth/signin')
    }).catch((error)=>{
      console.log(error)
    })
  };

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]{2,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("옳지 않은 이메일 형식입니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식이에요!");
      setIsEmail(true);
    }
  }, []);

  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
    if (e.target.value.length < 2||e.target.value.length>10) {
      setNicknameMessage("2글자 이상 10글자 이하로 입력해주세요.");
      setIsNickname(false);
    } else {
      setNicknameMessage("올바른 닉네임 형식이에요!");
      setIsNickname(true);
    }
  }, []);
  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호에요");
      setIsPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setConfirmPasswordMessage("비밀번호를 똑같이 입력했어요 : )");
        setIsPasswordConfirm(true);
      } else {
        setConfirmPasswordMessage(
          "비밀번호가 일치하지 않습니다. 다시 한번 확인해주세요"
        );
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  return (
    <StyledDiv>
      <StyledSpan>
        Come aboard, <br />
        Let's make <br />
        <img src={havit} alt="" />
        <br />
        Together!
      </StyledSpan>
      <StyledInput
        type="email"
        top="32vh"
        placeholder="✉  E-Mail"
        onChange={onChangeEmail}
      />
      <StyledNotice>이벤트 상품 수령을 위하여 실제 사용하시는 이메일 주소 입력을 권장합니다.</StyledNotice>
      {email.length > 0 && (
        <span
          className={`message ${isEmail ? "success" : "error"}`}
          style={{ top: "37vh" }}
        >
          {emailMessage}
        </span>
      )}
      <StyledInput
        type="text"
        top="40vh"
        placeholder="🙋‍♂️  닉네임"
        onChange={onChangeNickname}
      />
      {nickname.length > 0 && (
        <span
          className={`message ${isNickname ? "success" : "error"}`}
          style={{ top: "45vh" }}
        >
          {nicknameMessage}
        </span>
      )}
      <StyledInput
        type="password"
        top="48vh"
        placeholder="🔒  비밀번호"
        onChange={onChangePassword}
      />
      {password.length > 0 && (
        <span
          className={`message ${isPassword ? "success" : "error"}`}
          style={{ top: "53vh" }}
        >
          {passwordMessage}
        </span>
      )}
      <StyledInput
        type="password"
        top="56vh"
        placeholder="🔒  비밀번호 확인"
        onChange={onChangePasswordConfirm}
      />

      {passwordConfirm.length > 0 && (
        <span
          className={`message ${isPasswordConfirm ? "success" : "error"}`}
          style={{ top: "61vh" }}
        >
          {confirmPasswordMessage}
        </span>
      )}
      <StyledButtonDiv>
        <StyledButton
          top="80vh"
          color="white"
          background="#5C53FF"
          onClick={onSubmitHandler}
          type="submit"
          disabled={!(isEmail&&isNickname&&isPassword&&isPasswordConfirm)}
        >
          회원가입 완료
        </StyledButton>
        <StyledButton
          top="87vh"
          background="white"
          onClick={() => {
            navigate(-1);
          }}
        >
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
  .team {
    position: absolute;
    top: 64vh;
  }
  .message {
    position: absolute;
    font-size: 1.4vh;
    font-weight: 500;
    &.success {
      color: rgb(94, 67, 255);
    }
    &.error {
      color: #E94560;
    }
  }
`;
const StyledSpan = styled.span`
  color: #252224;
  position: absolute;
  left: 15vw;
  top: 7vh;
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
  img {
    position: absolute;
    margin-top: .75vh;
    width: 140px;
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
  :disabled{
    cursor: unset;
    background-color: #ccc;
    border: 1px solid #ccc;
}
`;
const StyledInput = styled.input`
  position: absolute;
  top: ${(props) => props.top};
  width: 80vw;
  border: 1px solid #d9d9d9;
  padding: 10px 30px;
  border-radius: 30px;
`;
const StyledNotice = styled.div`
  position: absolute;
  top: 27.5vh;
  font-size: 11px;
  background-color: rgb(94 ,67 ,255, 0.25);
  padding: 1px 6px;
  border-radius: 30px;
`