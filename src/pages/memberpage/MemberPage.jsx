import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { userApis } from '@apis/auth';
import UserProfile from '@components/profile/UserProfile';

const MemberPage = () => {
  const [memberInfo, setMemberInfo] = useState([])

  const {memberId} = useParams()
  useEffect(()=>{
    userApis.getMemberDetail(memberId).then(res=>{
      setMemberInfo(res.data)
    })
  },[])

  return (
    <StyledDiv>
      <UserProfile memberInfo={memberInfo}/>
    </StyledDiv>
  );
};

export default MemberPage;
const StyledDiv = styled.div`
  
`