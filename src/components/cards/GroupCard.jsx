import styled from "styled-components";
import React from "react";
import { FcBusinessman, FcAbout } from "react-icons/fc";
import { fileUrlHost } from "@apis/config";
import { useEffect } from "react";
import { useState } from "react";
import { userApis } from "../../apis/auth";

const GroupCard = ({ title, imgUrl, memberCount, onClick, groupId }) => {
  const [src, setSrc] = React.useState(fileUrlHost(imgUrl));
  const [detail, setDetail] = useState();
  useEffect(() => {
    userApis.getGroupDetail(groupId).then((res) => {
      setDetail(res.data);
    });
  }, []);
  const certifyList = detail?.certifyList;
  return (
    <StyledDiv onClick={onClick}>
      <GroupCardBox>
        {!!imgUrl ? (
          <GroupPhoto src={src} />
        ) : (
          <EmptyPhoto>이미지 없음</EmptyPhoto>
        )}
        <GroupTitle>{title}</GroupTitle>
        <HeadBox>
          <ItemDiv>
            <FcBusinessman />
            <HeadCount>{memberCount && memberCount}</HeadCount>
          </ItemDiv>
          <ItemDiv>
            <FcAbout />
            <HeadCount>{certifyList && certifyList?.length}</HeadCount>
          </ItemDiv>
        </HeadBox>
      </GroupCardBox>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  width: 162px;
`
const GroupCardBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 5px;
`;
const GroupTitle = styled.div`
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  max-width: 150px;
  font-weight: 600;
  line-height: 19px;
  margin: 5px 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const HeadCount = styled.div`
  font-size: 14px;
  margin-left: 5px;
`;
const HeadBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const GroupPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
`;

const EmptyPhoto = styled.div`
  border: 1px solid lightgray;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
export default GroupCard;
