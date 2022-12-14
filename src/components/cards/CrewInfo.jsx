import styled, { css } from "styled-components";
import { FcBusinessman, FcAbout } from "react-icons/fc";
// 컴포넌트
import Tags from "../Tag";
import { useNavigate } from "react-router-dom";
import { fileUrlHost } from "@apis/config";
import { Image } from "antd";

const CrewInfo = ({
  type = "shadow",
  groupId,
  title,
  memberCount,
  memberList,
  imageId,
  groupTag,
  favorite,
  createdAt,
  certifyList,
  setTag,
  onTagClick,
  tag
}) => {
  const navigate = useNavigate();
  const createdDate = createdAt?.slice(2, 10).split("-");
  const yyyy_mm_dd = () => {
    if (createdDate && createdDate.length > 0) {
      return (
        createdDate[0] + "년 " + createdDate[1] + "월 " + createdDate[2] + "일"
      );
    }
  };
  const routeHandler = () => {
    navigate(`/group/${groupId}`, { state: "/group" });
  };
  return (
    <>
      <StyledCard type={type}>
        <StyledImgDiv>
        <Image
          className="circleImage"
          src={fileUrlHost(imageId)}
          onClick={routeHandler}
          />
        </StyledImgDiv>
        <StyledGroupInfo>
          <h2 onClick={routeHandler}>{title}</h2>
          <StyledDayInfo>
            <span>{yyyy_mm_dd()} 생성</span>
            <StyledCycle color={"#5e43ff"} style={{ margin: "0 .5rem" }}>
              매일
            </StyledCycle>
          </StyledDayInfo>
          <StyledPeople>
            <FcBusinessman style={{ fontSize: "16px" }} />
            <StyledSpan style={{ marginRight: "15px" }}>
              {memberList ? memberList.length : memberCount}명
            </StyledSpan>
           {certifyList &&  <><FcAbout /><StyledSpan>{certifyList?.length} 개</StyledSpan></>}
          </StyledPeople>
          <StyledTagDiv>
            {groupTag?.map((item, idx) => (
              <Tags item={item} key={idx} setTag={setTag} onTagClick={onTagClick} tag={tag}/>
            ))}
          </StyledTagDiv>
        </StyledGroupInfo>
      </StyledCard>
    </>
  );
};
export default CrewInfo;

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  position: relative;
  min-height: 162px;
  background-color: #ffffff;
  & .circleImage,
  & .ant-image-mask {
    width: 110px;
    height: 110px;
    margin-right: 20px;
    border-radius: 100%;
    overflow: hidden;
    object-fit: cover;
  }
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
const StyledCycle = styled.div`
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

const StyledGroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  & > h2 {
    width: 190px;
    word-break: nowrap;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.2rem;
    font-weight: 800;
    line-height: 20px;
  }
`;
const StyledPeople = styled.div`
  display: flex;
  align-items: center;
`;
const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  margin-left: 0.25rem;
  margin: 5px;
`;
const StyledDayInfo = styled.div`
  display: flex;
  align-items: center;
  & > span {
    font-weight: bold;
  }
`;
const StyledTagDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 190px;
  max-height: 75px;
`;
const StyledImgDiv = styled.div`
  background-color: transparent;
`