import React from "react";
import styled from "styled-components";
import GoBackButton from "../../components/button/GoBackButton";

const Event = () => {
  return (
    <>
      <GoBackButton title={"환경설정"} to={"/setting"} />
      <StyledDiv>
        <h1>안녕하세요 HAVIT입니다!👾</h1>
        <br />
        <h1>💝 피드백 이벤트</h1>
        <p>
          설문조사를 제출하신 분들 중 서비스 개선에 필요한 좋은 의견을 남겨주신
          분들께 감사의 마음을 담아 <b>스타벅스 아이스 아메리카노(10명)</b>를
          드릴 예정입니다. 또한! Havit 활동을 열심히 하신 분들 한해서{" "}
          <b>Havit 자체 제작 티셔츠</b>도 드릴 예정
        </p>
        <br />
        <h1>📆 이벤트 참여 기간 : 2022년 10월 19일(수) - 25일(화)</h1>
        <br />
        <h1>📣 발표 : 2022년 10월 26일(수) 중으로 개별 연락</h1>
        <br />
        <h1>📝 선정 기준</h1>
        <span>
          - 설문했상 : 가장 개선이 될 수 있는 피드백을 성심성의껏 적어주신 분
        </span>
        <span>- 잘참여했상 : 인증을 매일 꾸준히 잘하신 분</span>
        <br />
        <h1>🎁 경품 안내</h1>
        <ImgDiv>
          <img
            src="https://velog.velcdn.com/images/danchoi/post/c5eba530-b0f9-4b89-8331-4da246a9b7ed/image.jpeg"
            alt=""
          />
          <img
            src="https://velog.velcdn.com/images/danchoi/post/1a7ac7c9-852e-4b84-a9f6-26025be8375f/image.jpeg"
            alt=""
          />
        </ImgDiv>
        <span>
          - 잘참여했상 : Havit 개발자의 정성이 들어간 자체 제작 티셔츠(15명)
        </span>
        <span>- 설문했상 : StarBucks Ice 아메리카노(10명)</span>
      </StyledDiv>
    </>
  );
};

export default Event;

const StyledDiv = styled.div`
  width: 340px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  li {
    font-size: 11px;
  }
  p {
    font-size: 12px;
  }
  span {
    font-size: 12px;
  }
  img {
    width: 200px;
    margin: auto;
  }
`;
const ImgDiv = styled.div`
  display: flex;
  img{
    width: 170px;
    height: 200px;
    object-fit: cover;
  }
`