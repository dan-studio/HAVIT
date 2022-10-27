import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { removeToken } from "../../apis/config";
import ToggleSwitch from "../../components/button/ToggleSwitch";
import Footer from "../../components/layout/Footer";
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
              style={{ color: "#252224", fontSize: "15px", fontWeight: "400" ,display:"flex"}}
            >
              공지사항
            <div className="newPost"></div>
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
          <div
            onClick={() => {navigate('event')}}
          >
            <h3
              style={{ color: "#252224", fontSize: "15px", fontWeight: "400" }}
            >
              HAVIT 런칭 이벤트 안내
            </h3>
          </div>
        </StyleSettingForm>
        <StyleSettingForm>
          <div
            onClick={() => window.open('https://forms.gle/5xcZ5dfDZsarEomi9', '_blank')}
          >
            <h3
              style={{ color: "#252224", fontSize: "15px", fontWeight: "400" }}
            >
              피드백 참여하기
            </h3>
            <span style={{ color: "#B0B0B0", fontSize: "12px" }}>추첨을 통해 스타벅스 기프티콘 받자!</span>
          </div>
        </StyleSettingForm>
        <StyleSettingForm>
          <div>
            <h3
              style={{ color: "#252224", fontSize: "15px", fontWeight: "400" }}
            >
              버전
            </h3>
            <span style={{ color: "#B0B0B0", fontSize: "12px" }}>1.1.0</span>
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
      <Footer />

    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  height: 84.7vh;
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
  .newPost{
    display: flex;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background-color: #2CDF3D;
  }
`;

export default Setting;
