import EditInput from '@components/editprofile/EditInput';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';
import PrimaryButton from '@components/button/PrimaryButton';
import SubButton from '@components/button/SubButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { userApis } from '../../apis/auth';

const pwData = {
  currentPw: '',
  password: '',
  passwordConfirm: '',
};

const MyPwEditor = () => {
  const navigate = useNavigate();
  const principal = useSelector(state => state.auth.principal, shallowEqual);

  const [pw, setPw] = React.useState(pwData);

  const onChange = e => {
    setPw(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onCancel = () => {
    reset();
    navigate('/mypage/edit')
  };

  const reset = () => {
    setPw(pwData);
  };

  const onSubmit = () => {
    userApis.modifyPassword(pw)
      .then(res => {
        if (res.status === 200) {
          alert('비밀번호 변경이 완료되었습니다.');
          reset();
          navigate('/');
        }
      })
      .catch(err => {
        alert('Error');
      });
  };

  return (
    <>
      <h2 style={{ fontWeight: '700', fontSize: '20px', margin: '20px', lineHeight: '24px' }}>개인정보 수정</h2>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '44px' }}>
        {/** 닉네임 부분 */}
        <StyledDivBox>
          {/** @NOTE db내 이메일을 어떻게 받아서 전달해줄쥐?  */}
          <EditInput inputLabel={'이메일'} type={'text'} name='username' value={principal?.username} disabled={true} />
        </StyledDivBox>

        {/* WHAT 비밀번호 부분 */}

        <StyledDivBox>
          {/** @NOTE db내 비밀번호와 입력한 비밀번호를 비교해야합니다 ^^  */}
          <EditInput inputLabel={'현재 비밀번호'} type={'password'} value={pw?.currentPw} name='currentPw' onChange={onChange} />
        </StyledDivBox>

        <StyledDivBox>
          <EditInput inputLabel={'비밀번호 변경'} type={'password'} value={pw.password} name='password' onChange={onChange} />
          {/* <ConfirmMsg className={`message ${isPassword ? 'success' : 'error'}`} style={{ top: '47vh', fontSize: '12px' }}>
              {passwordMsg}
            </ConfirmMsg> */}
        </StyledDivBox>

        <StyledDivBox>
          <EditInput inputLabel={'비밀번호 확인'} type={'password'} value={pw.passwordConfirm} name='passwordConfirm' onChange={onChange} />
          {/* <ConfirmMsg className={`message ${isPasswordConfirm ? 'success' : 'error'}`} style={{ top: '54vh', fontSize: '12px' }}>
              {newPwConfirmMsg}
            </ConfirmMsg> */}
        </StyledDivBox>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
        <PrimaryButton buttonName={'수정하기'} onClick={onSubmit} />
        <SubButton buttonName={'취소'} onClick={onCancel} />
      </div>
    </>
  );
};

export default MyPwEditor;

const StyledDivBox = styled.div`
  display: flex;
  height: 88px;
  margin-bottom: 18px;
  flex-direction: column;
  & > span {
    margin: 0 1.25rem;
  }
`;
