import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GoBackButton from "../../components/button/GoBackButton";
import { noticedata } from "./notice-data";
import Footer from "../../components/layout/Footer";

const Notice = () => {
  const navigate = useNavigate();
  return (
    <>
    <StyledDiv>
    <GoBackButton title={"환경설정"} to={"/setting"}/>
      <h2
        style={{
          fontWeight: "700",
          fontSize: "20px",
          margin: "0 20px 30px",
          lineHeight: "24px",
        }}
      >
        공지사항
      </h2>

      <StyleWrap>
        {noticedata&&noticedata.map((item,idx)=>
        <StyleSettingForm key={idx} {...item}>
          <div onClick={()=>{navigate('/setting/notice/'+item.noticeId)}}>
            <h3
              style={{ color: "#252224", fontSize: "15px", fontWeight: "400" }}
            >
              {item.title}
            </h3>
            <span style={{ color: "#B0B0B0", fontSize: "12px" }}>
              {item.date}
            </span>
          </div>
            <div>{item.author}</div>
        </StyleSettingForm>
        )}
      </StyleWrap>
      <Footer />
      </StyledDiv>
    </>
  );
};
const StyledDiv = styled.div`
  height: 84.9vh;
`
const StyleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleSettingForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 21.875rem;
  margin: 0 auto 1.2rem;
`;

export default Notice;
