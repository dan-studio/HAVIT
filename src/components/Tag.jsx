import React from "react";
import styled from "styled-components";

const Tags = (props) => {
  return <HashTag>#{props.item}</HashTag>;
};

const HashTag = styled.div`
  margin: 2px;
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
