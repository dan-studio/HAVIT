import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { noticedata } from "./notice-data";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import styled from "styled-components";

const NoticeDetail = () => {
  const { noticeId } = useParams();
  const navigate = useNavigate();
  const id = parseInt(noticeId);
  const data = noticedata.find((item) => item.noticeId === id);
  const { title, date, author, content } = data;
  return (
    <StyledDiv>
      <ToNotice>
        <MdOutlineArrowBackIosNew
          style={{ fontSize: "15px", color: "#5E43FF" }}
        />
        <h2
          style={{
            fontWeight: "500",
            fontSize: "14px",
            margin: "0 10px",
          }}
          onClick={() => {
            navigate("/setting/notice");
          }}
        >
          공지사항
        </h2>
      </ToNotice>
      <div className="title">
        <span>{data.noticeId}.</span>
        <span>{" " + title}</span>
      </div>
      <div className="sub">
        <span className="date">{date}</span>
        <span className="author">{author}</span>
      </div>
      <div className="content">
        <span>{content}</span>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 90vw;
  margin: auto;
  .title {
    font-size: 20px;
  }
  .sub {
    margin: 20px 0;
  }
  .author {
    margin-left: 20px;
    font-weight: bold;
  }
`;
const ToNotice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
export default NoticeDetail;
