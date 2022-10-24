import React from 'react';
import styled from 'styled-components';

const EditInput = ({ inputLabel,name, type, value, onChange, disabled , placeholder}) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <StyleWrap>
      <label style={{ fontWeight: '600', fontSize: '16px', lineHeight: '24px', marginBottom: '10px' }} htmlFor='userEditInput'>
        {inputLabel}
      </label>

      <input type={type} name={name} defaultValue={value} onChange={onChange} required disabled={disabled} placeholder={placeholder}></input>
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
      color: #343434;
    }

    :focus {
      outline: 2px solid #5e43ff; 
    }
  }
`;

export default EditInput;
