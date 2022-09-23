import React from 'react';
import styled from 'styled-components';
import { RiPencilFill } from 'react-icons/ri';
import { Button } from 'antd';

const EditInput = ({ inputLabel, type, onChange, placeHolder }) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Wrap>
      <label style={{ fontWeight: '600', fontSize: '16px', lineHeight: '24px', marginBottom: '10px' }} htmlFor='userEditInput'>
        {inputLabel}
      </label>
      <input type={type} id='userEditInput' onChange={onChange} required></input>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 20px 2px 20px;

  & > input {
    height: 42px;
    padding: 10px;
    background: #ffffff;
    border: 0.5px solid #eaeaea;
    border-radius: 30px;
  }
`;

export default EditInput;
