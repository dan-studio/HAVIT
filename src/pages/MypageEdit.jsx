import { useDispatch } from 'react-redux';
import { setLayout } from '@redux/layout';
import { useEffect, useState, useCallback } from 'react';
import { resetLayout } from '../redux/layout';
import styled, { css } from 'styled-components';
import { userApis } from '@/apis/auth';
import { setToken } from '@/apis/config';

// components
import UserImgForm from '../components/editprofile/UserImgForm';
import EditInput from '../components/editprofile/EditInput';
import PrimaryButton from '../components/button/PrimaryButton';
import SubButton from '../components/button/SubButton';
import { Navigate, useNavigate } from 'react-router-dom';

const MypageEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ###########################################
  // ## SECTION State                        ###
  // ###########################################

  // WHAT 원래 상태
  const [nickname, setNickname] = useState('기본아이디');
  const [password, setPassword] = useState('기존비번');
  const [newPw, setNewPw] = useState('');
  const [newPwConfirm, setNewPwConfirm] = useState('');
  const [userProfile, setUserProfile] = useState('');

  // WHAT 상태 메세지
  const [nicknameMsg, setNicknameMsg] = useState('');
  const [newPwMsg, setNewPwMsg] = useState('');
  const [StylenewPwConfirmMsg, StylesetNewPwConfirmMsg] = useState('');

  // WHAT 상태
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // ###########################################
  // ## SECTION 수정 핸들러                        ###
  // ###########################################
  const onSubmitHandler = e => {};

  // ###########################################
  // ## SECTION 유효성검사                     ###
  // ###########################################

  // WHAT 닉네임 확인
  const onChangeNickname = useCallback(e => {
    setNickname(e.target.value);
    if (e.target.value < 2) {
      setNicknameMsg('2글자 이상 입력해주세요');
      setIsNickname(false);
    } else {
      setNicknameMsg('사용할 수 있는 닉네임입니다');
      setIsNickname(true);
    }
  });

  // WHAT 새로운 비번 입력
  const onChangePw = useCallback(e => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const newPwCurent = e.target.value;
    setNewPw(newPwCurent);

    if (!passwordRegex.test(newPwCurent)) {
      setNewPwMsg('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
      setIsPassword(false);
    } else {
      setNewPwMsg('안전한 비밀번호에요');
      setIsPassword(true);
    }
  }, []);

  // WHAT 새로운 비번 확인
  const onChangePwConfirm = useCallback(e => {
    const pwConfirmCurrent = e.target.value;
    setNewPwConfirm(pwConfirmCurrent);

    if (newPw === pwConfirmCurrent) {
      StylesetNewPwConfirmMsg('비밀번호가 일치합니다');
      setIsPasswordConfirm(true);
    } else {
      StylesetNewPwConfirmMsg('비밀번호가 일치하지 않습니다. 다시 한번 확인해주세요');
      setIsPasswordConfirm(false);
    }
  });

  // ###########################################
  // ## SECTION VIEW 부분                     ###
  // ###########################################
  return (
    <>
      <h2 style={{ fontWeight: '700', fontSize: '20px', margin: '20px', lineHeight: '24px' }}>개인정보 수정</h2>

      {/* WHAT 유저 프로필 */}
      <UserImgForm />

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '44px' }}>
        {/** 닉네임 부분 */}
        <StyledDivBox>
          <EditInput inputLabel={'닉네임 변경'} type={'text'} onChange={onChangeNickname} />
          {nickname.length > 0 && (
            <StyledConfirmMsg className={`message ${isNickname ? 'success' : 'error'}`} style={{ top: '47vh', fontSize: '12px' }}>
              {nicknameMsg}
            </StyledConfirmMsg>
          )}
        </StyledDivBox>

        <StyledDivBox>
          <EditInput inputLabel={'상태메세지'} type={'text'} />
        </StyledDivBox>

        {/* WHAT 비밀번호 부분 */}
        <EditInput inputLabel={'현재 비밀번호'} type={'password'} placeHolder={password} />

        <StyledDivBox>
          <EditInput inputLabel={'비밀번호 변경'} type={'password'} onChange={onChangePw} />
          {newPw.length > 0 && (
            <StyledConfirmMsg className={`message ${isPassword ? 'success' : 'error'}`} style={{ top: '47vh', fontSize: '12px' }}>
              {newPwMsg}
            </StyledConfirmMsg>
          )}
        </StyledDivBox>

        <StyledDivBox>
          <EditInput inputLabel={'비밀번호 확인'} type={'password'} onChange={onChangePwConfirm} />
          {newPwConfirm.length > 0 && (
            <StyledConfirmMsg className={`message ${isPasswordConfirm ? 'success' : 'error'}`} style={{ top: '54vh', fontSize: '12px' }}>
              {StylenewPwConfirmMsg}
            </StyledConfirmMsg>
          )}
        </StyledDivBox>
      </div>

      {/* WHAT 버튼 */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
        <PrimaryButton buttonName={'수정하기'} onClick={onSubmitHandler} />
        <SubButton buttonName={'취소'} onClick={() => Navigate(-1)} />
      </div>
    </>
  );
};

const StyledDivBox = styled.div`
  display: flex;
  height: 88px;
  margin-bottom: 18px;
  flex-direction: column;
  & > span {
    margin: 0 1.25rem;
  }
`;

const StyledConfirmMsg = styled.span`
  &.message {
    font-size: 1.4vh;
    font-weight: 500;
    &.success {
      color: #5e43ff;
    }
    &.error {
      color: #e94560;
    }
  }
`;

export default MypageEdit;
