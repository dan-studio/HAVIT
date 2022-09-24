import React from 'react';
import styled from 'styled-components';

const SubButton = ({ buttonName, onClick }) => {
  return <Button type='button' onClick={onClick}>{buttonName}</Button>;
};

const Button = styled.button`
  cursor: pointer;
  min-width: 98px;
  height: 34px;
  background: #fff;
  border: 1px solid #5e43ff;
  border-radius: 30px;
  font-weight: 400;
  color: #252224;
  margin: 0 10px;
`;

export default SubButton;
