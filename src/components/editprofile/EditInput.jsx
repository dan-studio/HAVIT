import React from 'react';
import styled from 'styled-components';
import { RiPencilFill } from 'react-icons/ri';
import { Button } from 'antd';

const EditInput = ({ inputLabel, type }) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Wrap>
      <label style={{ fontWeight: '400', fontSize: '16px', lineHeight: '24px', marginBottom: '10px' }} htmlFor='userEditInput'>
        {inputLabel}
      </label>
      <input type={type} id='userEditInput' placeholder={inputValue} />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  & > input {
    height: 44px;
    padding: 10px;
    background: #ffffff;
    border: 0.5px solid #eaeaea;
    border-radius: 10px;
  }
`;

export default EditInput;
