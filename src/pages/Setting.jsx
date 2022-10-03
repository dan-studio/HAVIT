import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { removeToken } from "../apis/config";
import ToggleSwitch from "../components/button/ToggleSwitch";

const Setting = () => {
  const [darkmode, setDarkmode] = React.useState(false);
  const navigate = useNavigate();
  const logoutHandler = () => {
    removeToken();
    navigate("/auth");
  };
  return (
    <>
      <h2
        style={{
          fontWeight: "700",
          fontSize: "20px",
          margin: "0 20px 45px",
          lineHeight: "24px",
        }}
      >
        환경설정
      </h2>

      <StyleWrap>
        <StyleSettingForm>
          <div>
            <h3
              style={{ color: "#252224", fontSize: "15px", fontWeight: "400" }}
            >
              알림
            </h3>
            <span style={{ color: "#B0B0B0", fontSize: "12px" }}>
              알림을 활성화/비활성화 할 수 있어요
            </span>
          </div>
          <ToggleSwitch id={"alert"} />
        </StyleSettingForm>

        <StyleSettingForm>
          <div>
            <h3
              style={{ color: "#252224", fontSize: "15px", fontWeight: "400" }}
            >
              다크모드
            </h3>
            <span style={{ color: "#B0B0B0", fontSize: "12px" }}>
              다크모드를 활성화 할 수 있어요
            </span>
          </div>
          <ToggleSwitch id={"setDarkmode"} />
        </StyleSettingForm>
        <StyleSettingForm  style={{
            position: "absolute",
            display: "flex",
            top: "90vh",
            justifyContent: "center",
          }}>
          <StyledButton onClick={logoutHandler}>로그아웃</StyledButton>
        </StyleSettingForm>
      </StyleWrap>
    </>
  );
};

const StyleWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
`;

const StyleSettingForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 21.875rem;
  /* height: 2.25rem; */
  margin: 0 1.25rem 2.1875rem;
`;

const StyledButton = styled.div`
  width: 30vw;
  display: flex;
  justify-content: center;
`;
export default Setting;
