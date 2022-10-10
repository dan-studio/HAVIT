import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { noticedata } from "./notice-data";


const Notice = () => {
  const navigate = useNavigate();
  return (
    <>
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
  margin: 0 1.25rem 1.2rem;
`;

export default Notice;
