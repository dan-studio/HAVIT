import React from 'react';
import styled from 'styled-components';
import { RiPencilFill } from 'react-icons/ri';
import { Button } from 'antd';
import { userApis } from '../../apis/auth';
import { useSelector } from 'react-redux';

const EditInput = ({ inputLabel, type, value, onChange, disabled }) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <StyleWrap>
      <label style={{ fontWeight: '600', fontSize: '16px', lineHeight: '24px', marginBottom: '10px' }} htmlFor='userEditInput'>
        {inputLabel}
      </label>

      <input type={type} id='userEditInput' value={value} onChange={onChange} required disabled={disabled}></input>
    </StyleWrap>
  );
};

const StyleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 20px 2px 20px;

  & > input {
    height: 42px;
    padding: 10px;
    background: #ffffff;
    border: 0.5px solid #eaeaea;
    border-radius: 30px;

    :disabled {
      background-color: #eaeaea;
      color: #b0b0b0;
    }
  }
`;

export default EditInput;
