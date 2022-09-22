import React from 'react';
import styled from 'styled-components';

const DayBadge = () => {
  const [Day, setDay] = React.useState('매일');

  return <Badge>{Day}</Badge>;
};

/** @todo 나중에 현욱님한테 craco.config.js 사용 방법 물어보기 */
const Badge = styled.div`
  width: 2.25rem;
  height: 1rem;
  padding: 1px;
  background-color: #5e43ff;
  color: #fff;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  align-self: center;
`;

export default DayBadge;
