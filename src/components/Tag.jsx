import React from "react";
import styled from "styled-components";
import { userApis } from "../apis/auth";

const Tags = (props) => {
  return <StyledHashTag onClick={()=>{props.onTagClick(props.item)}}>#{props.item}</StyledHashTag>;
};

const StyledHashTag = styled.div`
  margin: 2px 4px 2px 0;
  padding: 2px 10px;
  border: 0.5px solid #b0b0b0;
  border-radius: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #b0b0b0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default Tags;
