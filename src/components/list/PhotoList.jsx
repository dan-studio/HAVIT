import { PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fileUrlHost } from "../../apis/config";

const PhotoList = ({ groupId, list, isMember, height }) => {
  const navigate = useNavigate();
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const createdAt = year + "-" + month + "-" + day;
  const certifyToday = list?.filter(
    (el) => el.createdAt.slice(0, 10) === createdAt
  );
  const certifyBefore = list?.filter(
    (el) => el.createdAt.slice(0, 10) !== createdAt
  );
  return (<>
        {certifyToday?.length>0?<div className="title">👏오늘의 인증👏</div>:<div className="title">🔥🔥오늘의 첫 인증을 해보세요!🔥🔥</div>}
        {list?.length===0&&<div className="title">그룹이 일정 기간 동안 활성화되지 않는다면 <br/>운영진의 판단하에 해산될 수 있다는 점 <br/>이용에 참고 부탁드립니다. 😥</div>}
    <StyledContainer height={"10px"}>
        {isMember ? (
          <div
            className="adder"
            onClick={() => {
              navigate(`/group/${groupId}/write`);
            }}
          >
            <PlusCircleFilled />
          </div>
        ) : (
          <div className="adder">
            <PlusCircleFilled />
          </div>
        )}
        {certifyToday &&
          certifyToday?.map((el) => (
            <div
              key={el.certifyId}
              onClick={() => {
                navigate(`/group/${groupId}/${el?.certifyId}`);
              }}
            >
              <CertifyImg alt="" src={fileUrlHost(el?.imageId)}></CertifyImg>
            </div>
          ))}
      </StyledContainer>
      <StyledContainer height={height}>
        {certifyBefore &&
          certifyBefore?.map((el) => (
            <div
              key={el.certifyId}
              onClick={() => {
                navigate(`/group/${groupId}/${el?.certifyId}`);
              }}
            >
              <CertifyImg alt="" src={fileUrlHost(el?.imageId)}></CertifyImg>
            </div>
          ))}
      </StyledContainer></>
  );
};
export default PhotoList;


const StyledContainer = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;
  gap: 2px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 10px;
  & > div {
    width: 112px;
    height: 112px;
    border: 0.5px solid #eeeeee;
    overflow: hidden;
    @media screen and (max-width: 372px) {
      width: 108px;
      height: 108px;
    }
    @media screen and (max-width: 360px) {
      width: 104px;
      height: 104px;
    }
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  & > .adder {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #eeeeee;
  }
`;
const CertifyImg = styled.img`
  border: 0.5px solid #eeeeee;
  object-fit: cover;
`;
