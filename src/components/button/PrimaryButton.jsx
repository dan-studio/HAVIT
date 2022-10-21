import React from 'react';
import styled from 'styled-components';
import ToggleSwitch from './ToggleSwitch';

const PrimaryButton = ({ buttonName, onClick }) => {
  return (
    <>
      <StyledButton type='submit' onClick={onClick}>
        {buttonName}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  min-width: 98px;
  height: 34px;
  background: #5e43ff;
  border: 1px solid #5e43ff;
  border-radius: 30px;
  color: #fff;
  margin: 0 10px;
  font-weight: bold;
  :disabled {
    cursor: unset;
    background-color: #ccc;
    border: 1px solid #ccc;
  }
`;

export default PrimaryButton;
