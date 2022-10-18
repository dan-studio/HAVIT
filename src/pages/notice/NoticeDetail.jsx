import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { noticedata } from "./notice-data";
import styled from "styled-components";
import GoBackButton from "../../components/button/GoBackButton";
import Footer from "../../components/layout/Footer";

const NoticeDetail = () => {
  const { noticeId } = useParams();
  const id = parseInt(noticeId);
  const data = noticedata.find((item) => item.noticeId === id);
  const { title, date, author, content } = data;
  return (
    <>
    <StyledBox>
      <GoBackButton title={"공지사항"} to={"/setting/notice"}/>
    <StyledDiv>
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
    <Footer />
    </StyledBox>
    </>
  );
};
const StyledBox = styled.div`
  height: 84.7vh;
`

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

export default NoticeDetail;
