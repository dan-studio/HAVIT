import React from 'react';
import styled from 'styled-components';

const Tags = () => {
  const [tag, setTag] = React.useState('오운완');
  return <HashTag>#오운완</HashTag>;
};

const HashTag = styled.div`
  max-width: 100px;
  margin-top: 5px;
  padding: 3px;
  border: 0.5px solid #b0b0b0;
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #b0b0b0;
`;

export default Tags;
