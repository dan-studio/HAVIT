import styled, { css } from "styled-components";
import { MdPeopleAlt } from "react-icons/md";
import { HiStar } from "react-icons/hi";

// 컴포넌트
import Tags from "../Tag";
import { useNavigate} from "react-router-dom";

const CrewInfo = ({
  data,
  type = "shadow",
  groupId,
  title,
  startDate,
  memberCount,
  imgUrl,
  groupTag,
  favorite,
}) => {
  const navigate = useNavigate();
  console.log(groupId);
  const routeHandler = () => {
    console.log(groupId);
    navigate(`/group/${groupId}`);
  };
  return (
    <>
    <StCard type={type}>
      <StGroupImg src={imgUrl} onClick={routeHandler} />
      <StGroupInfo>
        <h2 onClick={routeHandler}>{title}</h2>
        <StDayInfo>
          <span>{startDate} 생성됨</span>
          <StCycle color={"#5e43ff"} style={{ margin: "0 .5rem" }}>
            매일
          </StCycle>
        </StDayInfo>
        <StPeople>
          <MdPeopleAlt color="#5e43ff" />
          <StSpan>{memberCount}명</StSpan>
        </StPeople>
        <StTagDiv>
          {groupTag &&
            groupTag.map((item, idx) => <Tags item={item} key={idx} />)}
        </StTagDiv>
      </StGroupInfo>
     
      {favorite && (
        <HiStar
          style={{
            color: "#ECA51B",
            fontSize: "20px",
            position: "absolute",
            zIndex: "10",
            top: "10px",
            right: "10px",
          }}
        />
      )}
    </StCard>
     
     </>
  );
};
export default CrewInfo;

const StCard = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  position: relative;
  height: 162px;
  background-color: #ffffff;
  ${({ type }) => {
    switch (type) {
      case "shadow":
        return ShadowCard;
      case "list":
        return css`
          border-bottom: 0.5px solid #d9d9d9;
        `;
      case "detail":
        return Detail;
      default:
        return ShadowCard;
    }
  }}
`;

const Detail = css``;
const StCycle = styled.div`
  background-color: #5e43ff;
  color: white;
  border-radius: 10px;
  width: 33px;
  font-size: 12px;
  display: flex;
  justify-content: center;
`;

const ShadowCard = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0.5px solid #eaeaea;
  border-radius: 10px;
  padding: 15px;
`;

const StGroupImg = styled.img`
  width: 110px;
  height: 110px;
  margin-right: 20px;
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
`;

const StGroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  & > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 22px;
  }
`;
const StPeople = styled.div`
  display: flex;
  align-items: center;
`;
const StSpan = styled.span`
  font-size: 15px;
`;
const StDayInfo = styled.div`
  display: flex;
  align-items: center;
  & > span {
    font-weight: bold;
  }
`;
const StTagDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 190px;
  max-height: 75px;
`;
