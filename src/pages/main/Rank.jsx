import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { userApis } from "../../apis/auth";

const Rank = () => {
  const [groups, setGroups] = useState()
  useEffect(()=>{
    userApis.getGroup().then(res=>{
      setGroups(res.data)
    })
  },[])
  return (
    <StyledDiv>
            <h2>HAVIT 랭킹</h2>
    </StyledDiv>
  );
};

export default Rank;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
