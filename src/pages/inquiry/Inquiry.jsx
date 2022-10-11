import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import EditInput from "@components/editprofile/EditInput";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { userApis } from "../../apis/auth";
import GoBackButton from "../../components/button/GoBackButton";
import PrimaryButton from "@components/button/PrimaryButton";
import Footer from "../../components/layout/Footer";

const Inquiry = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [myInfo, setMyInfo] = useState([]);
  const [sent, setSent] = useState(false);
  useEffect(() => {
    userApis.myProfile().then((res) => {
      setMyInfo(res);
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLETE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <GoBackButton title={"환경설정"} to={"/setting"} />
      <h2
        style={{
          fontWeight: "700",
          fontSize: "20px",
          margin: "0 20px 30px",
          lineHeight: "24px",
        }}
      >
        문의하기
      </h2>

      <StyledForm ref={form} onSubmit={sendEmail}>
        <StyledDivBox>
          <EditInput
            inputLabel={"닉네임"}
            name={"from_name"}
            value={myInfo?.nickname}
            type={"text"}
            // disabled
          />
        </StyledDivBox>
        <StyledDivBox>
          <EditInput
            inputLabel={"이메일"}
            name={"from_email"}
            value={myInfo?.username}
            type={"text"}
            // disabled
          />
        </StyledDivBox>
        <StyledDivBox height="240px">
          <StyledTextArea
          disabled={sent?"disabled":null}
            inputLabel={"내용"}
            placeholder={"내용"}
            name={"message"}
            type={"text"}
          />
        </StyledDivBox>
        {sent ? (
          <StyledSendMsg>
            문의하신 내용이 HAVIT 이메일로 발송되었습니다!
          </StyledSendMsg>
        ) : (
          <div className="buttonDiv">
            <PrimaryButton buttonName={"전송하기"} />
          </div>
        )}
      </StyledForm>
      <Footer />
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  .buttonDiv {
    display: flex;
    justify-content: center;
    margin: auto;
  }
`;
const StyledDivBox = styled.div`
  display: flex;
  height: ${(props) => props.height || "80px"};
  margin-bottom: 18px;
  flex-direction: column;
  & > span {
    margin: 0 1.25rem;
  }
`;
const StyledTextArea = styled.textarea`
  margin: 12px 20px 2px;
  background: #ffffff;
  border: 0.5px solid #eaeaea;
  border-radius: 30px;
  padding: 15px;
  height: 200px;
  :focus {
    outline: 1px solid #5e43ff;
  }
  
`;
const StyledSendMsg = styled.div`
  margin: auto;
`;
export default Inquiry;
