import React from 'react';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GoBackButton = ({title, to}) => {
  const navigate = useNavigate()
  return (
    <ToNotice  onClick={() => {
      navigate(to);
    }}>
        <MdOutlineArrowBackIosNew
          style={{ fontSize: "15px", color: "#5E43FF" }}
        />
        <h2
          style={{
            fontWeight: "500",
            fontSize: "14px",
            margin: "0 10px",
          }}
        >
          {title}
        </h2>
      </ToNotice>
  );
};
const ToNotice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin: 0 15px 20px;
`;
export default GoBackButton;