import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { removeToken } from "../apis/config";
import ToggleSwitch from "../components/button/ToggleSwitch";
import { SiInstagram, SiNotion } from "react-icons/si";
import logo from "../../src/assets/havit.png";
const Setting = () => {
  const [darkmode, setDarkmode] = React.useState(false);
  const navigate = useNavigate();
  const logoutHandler = () => {
    removeToken();
    navigate("/auth");
  };
  return (
    <StyledDiv>
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
        {/* <StyleSettingForm>
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
        </StyleSettingForm> */}
        <StyleSettingForm>
          <div
            onClick={() => {
              navigate("notice");
            }}
          >
            <h3
              style={{ color: "#252224", fontSize: "15px", fontWeight: "400" }}
            >
              공지사항
            </h3>
          </div>
        </StyleSettingForm>
        <StyleSettingForm>
          <div
            onClick={() => {
              navigate("inquiry");
            }}
          >
            <h3
              style={{ color: "#252224", fontSize: "15px", fontWeight: "400" }}
            >
              개발팀에게 문의하기
            </h3>
          </div>
        </StyleSettingForm>
        <StyleSettingForm>
          <div>
            <h3
              style={{ color: "#252224", fontSize: "15px", fontWeight: "400" }}
            >
              버전
            </h3>
            <span style={{ color: "#B0B0B0", fontSize: "12px" }}>1.0.0</span>
          </div>
        </StyleSettingForm>
        <StyleSettingForm onClick={logoutHandler}>
          <div>
            <h3
              style={{ color: "#252224", fontSize: "15px", fontWeight: "400" }}
            >
              로그아웃
            </h3>
          </div>
        </StyleSettingForm>

        <StyleSettingForm
          style={{
            position: "absolute",
            display: "flex",
            top: "90vh",
            justifyContent: "center",
          }}
        ></StyleSettingForm>
      </StyleWrap>
      <StyledFooter>
        <StyledIcons>
          <img
            style={{
              marginLeft: "10px",
              marginBottom: "10px",
              width: "70px",
            }}
            src={logo}
            alt="logo"
          ></img>
          <SiInstagram
            onClick={() =>
              window.open(
                "https://instagram.com/havit_life?igshid=YmMyMTA2M2Y=",
                "_blank"
              )
            }
            style={{
              fontSize: "22px",
              marginRight: "10px",
              marginLeft: "10px",
              color: "#565656",
            }}
          />
          <SiNotion
            onClick={() =>
              window.open(
                "https://trusting-jobaria-326.notion.site/About-Havit-c126479bc8b542c3b4391deabf904d74",
                "_blank"
              )
            }
            style={{
              fontSize: "22px",
              color: "#565656",
            }}
          />
        </StyledIcons>

        <div
          style={{
            marginLeft: "10px",
          }}
        >
          Copyright 2022 Havit. All rights reserved.
        </div>
      </StyledFooter>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  height: 84.65vh;
`
const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  background-color: #f6f9fa;
  width: 100%;
`;
const StyledIcons = styled.div`
  margin-top: 20px;
`;
const StyleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleSettingForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 21.875rem;
  margin: 0 1.25rem 2.1875rem;
`;

const StyledButton = styled.div`
  width: 30vw;
  display: flex;
  justify-content: center;
`;
export default Setting;
