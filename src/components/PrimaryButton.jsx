import React from 'react';
import styled from 'styled-components';

const PrimaryButton = ({ buttonName, onClick }) => {
  return <Button type='submit' onClick={onClick}>{buttonName}</Button>;
};

const Button = styled.button`
  cursor: pointer;
  min-width: 98px;
  height: 34px;
  background: #5e43ff;
  border: 1px solid #5e43ff;
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

export default PrimaryButton;
