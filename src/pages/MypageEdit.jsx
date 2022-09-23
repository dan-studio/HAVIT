import { useDispatch } from 'react-redux';
import { setLayout } from '@redux/layout';
import { useEffect, useState, useCallback } from 'react';
import { resetLayout } from '../redux/layout';
import styled, { css } from 'styled-components';

// components
import UserImgForm from '../components/editprofile/UserImgForm';
import EditInput from '../components/editprofile/EditInput';
import PrimaryButton from '../components/PrimaryButton';
import SubButton from '../components/SubButton';

const MypageEdit = () => {
  // ANCHOR dispatch / useEffect
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLayout({ showHeader: false }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

  // WHAT 원래 상태
  const [nickname, setNickname] = useState('기본아이디');
  const [password, setPassword] = useState('기존비번');
  const [newPw, setNewPw] = useState('');
  const [newPwConfirm, setNewPwConfirm] = useState('');

  // WHAT 상태 메세지
  const [nicknameMsg, setNicknameMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [newPwConfirmMsg, setNewPwConfirmMsg] = useState('');

  // WHAT 상태
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // ANCHOR 유효성 검사
  const onChangeNickname = useCallback(e => {
    setNickname(e.target.value);
    if (e.target.value < 2) {
      setNicknameMsg('2글자 이상 입력해주세요');
      setNickname(false);
    } else {
      setNicknameMsg('사용할 수 있는 닉네임입니다');
    }
  });

  const onChangePw = useCallback(e => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const newPwCurent = e.target.value;
    setNewPw(newPwCurent);

    if (!passwordRegex.test(newPwCurent)) {
      setPasswordMsg('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
      setIsPassword(false);
    } else {
      setPasswordMsg('안전한 비밀번호에요');
      setIsPassword(true);
    }
  }, []);

  return (
    <>
      <h2 style={{ fontWeight: '700', fontSize: '20px', margin: '20px', lineHeight: '24px' }}>개인정보 수정</h2>
      <UserImgForm />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <EditInput inputLabel={'닉네임 변경'} type={'text'} onChange={onChangeNickname} />
        <EditInput inputLabel={'현재 비밀번호'} type={'password'} />
        <EditInput inputLabel={'비밀번호 변경'} type={'password'} onChange={onChangePw} />
        <EditInput inputLabel={'비밀번호 확인'} type={'password'} onChange={onChangePw} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
        <PrimaryButton buttonName={'수정하기'} />
        <SubButton buttonName={'취소'} />
      </div>
    </>
  );
};

export default MypageEdit;
