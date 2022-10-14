import React from 'react';
import styled from 'styled-components';
import ToggleSwitch from './ToggleSwitch';

const DevButton = ({ buttonName, onClick }) => {
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
  min-width: 62px;
  height: 26px;
  background: #DE4242;
  border: 1px solid #DE4242;
  border-radius: 30px;
  font-weight: 400;
  color: #fff;
  margin: 0 10px;
  :disabled {
    cursor: unset;
    background-color: #ccc;
    border: 1px solid #ccc;
  }
`;

export default DevButton;
