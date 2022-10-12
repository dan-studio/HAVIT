import { PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fileUrlHost } from "../../apis/config";

const PhotoList = ({ groupId, list, isMember, height }) => {
  const navigate = useNavigate();
  return (
    <StyledContainer height={height}>
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
      {list?.map((el) => (
        <div
          key={el?.certifyId}
          onClick={() => {
            navigate(`/group/${groupId}/${el?.certifyId}`);
          }}
        >
          <CertifyImg alt="" src={fileUrlHost(el?.imageId)}></CertifyImg>
        </div>
      ))}
    </StyledContainer>
  );
};
export default PhotoList;

const StyledContainer = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;
  gap: 2px;
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 113px;
    height: 113px;
    border: 0.5px solid #eeeeee;
    overflow: hidden;
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
  width: 113px;
  height: 113px;
  border: 0.5px solid #eeeeee;
  object-fit: cover;
`;
