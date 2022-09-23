import { useDispatch } from "react-redux";
import { setLayout } from "@redux/layout";
import { useEffect, useState, useCallback } from "react";
import { resetLayout } from "../redux/layout";
import styled, { css } from "styled-components";

// components
import UserImgForm from "../components/editprofile/UserImgForm";
import EditInput from "../components/editprofile/EditInput";
import PrimaryButton from "../components/PrimaryButton";
import SubButton from "../components/SubButton";

const MypageEdit = () => {
  // ANCHOR dispatch / useEffect

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [nicknameMessage, setNicknameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
    if (e.target.value.length < 2) {
      setNicknameMessage("2글자 이상으로 입력해주세요.");
      setIsNickname(false);
    } else {
      setNicknameMessage("올바른 닉네임 형식이에요!");
      setIsNickname(true);
    }
  }, []);

  const onChangeNewPW = useCallback((e) => {
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
      <h2
        style={{
          fontWeight: "700",
          fontSize: "20px",
          margin: "20px",
          lineHeight: "24px",
        }}
      >
        개인정보 수정
      </h2>
      <UserImgForm />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <EditInput
          inputLabel={"닉네임 변경"}
          type={"text"}
          onChange={onChangeNickname}
        />
        {nickname.length > 0 && (
          <span
            className={`message ${isNickname ? "success" : "error"}`}
            style={{ top: "40vh" }}
          >
            {nicknameMessage}
          </span>
        )}
        <EditInput inputLabel={"현재 비밀번호"} type={"password"} />
        <EditInput
          inputLabel={"비밀번호 변경"}
          type={"password"}
          onChange={onChangeNewPW}
        />
        {password.length > 0 && (
          <span
            className={`message ${isPassword ? "success" : "error"}`}
            style={{ top: "80vh" }}
          >
            {passwordMessage}
          </span>
        )}
        <EditInput
          inputLabel={"비밀번호 확인"}
          type={"password"}
          onChange={onChangePasswordConfirm}
        />
        {passwordConfirm.length > 0 && (
          <span
            className={`message ${isPasswordConfirm ? "success" : "error"}`}
            style={{ top: "54vh" }}
          >
            {confirmPasswordMessage}
          </span>
        )}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "auto" }}
      >
        <PrimaryButton buttonName={"수정하기"} />
        <SubButton buttonName={"취소"} />
      </div>
    </StyledDiv>
  );
};

export default MypageEdit;

const StyledDiv = styled.div`
  .message {
    margin: 0 auto;
    font-size: 1.4vh;
    font-weight: 500;
    &.success {
      color: #5e43ff;
    }
    &.error {
      color: #e94560;
    }
  }
`;
