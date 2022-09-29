import { setLayout } from '@redux/layout';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { resetLayout } from '../redux/layout';
import { userApis } from '@/apis/auth';
import { setToken } from '@/apis/config';

// components
import UserImgForm from '../components/editprofile/UserImgForm';
import EditInput from '../components/editprofile/EditInput';
import PrimaryButton from './../components/button/PrimaryButton';
import SubButton from '../components/button/SubButton';

const EnterMyapgeEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   userApis.userProfile().then(res => {
  //     // NOTE 이메일만 가져오는 방법을 알고싶습니다.
  //     console.log('🚀 ⁝ userApis.userProfile ⁝ res.data', res.data[0].email);
  //     setEmail(res.data[0].email);
  //     console.log('🚀 ⁝ userApis.userProfile ⁝ setEmail', setEmail);
  //   });
  // }, []);

  // ###########################################
  // ## SECTION State                        ###
  // ###########################################

  // WHAT 원래 상태
  const [email, setEmail] = useState('기존이메일');
  const [password, setPassword] = useState('기존비번');

  // WHAT 상태 메세지
  const [passwordMsg, setPasswordMsg] = useState('');

  // WHAT 상태
  const [isPassword, setIsPassword] = useState(false);

  // ###########################################
  // ## SECTION 수정 핸들러                        ###
  // ###########################################
  const onSubmitHandler = () => {
    userApis
      .userPwCheck(password)
      .then(res => {
        console.log('🚀 ⁝ userApis.userPwCheck ⁝ res', res);
        // const temp = { access_token: res.headers.authorization, refresh_token: res.headers['refresh-token'] };
        // setToken(temp);
        navigate('/MypageEdit');
      })
      .catch(err => {
        console.log('🚀 ⁝ onSubmitHandler ⁝ err', err);
      });
  };

  // ###########################################
  // ## SECTION 유효성검사                     ###
  // ###########################################

  // WHAT 비번 확인
  const onChangePwConfirm = useCallback(e => {
    const pwConfirmCurrent = e.target.value;
    setPassword(pwConfirmCurrent);

    if (password === pwConfirmCurrent) {
      setPasswordMsg('비밀번호가 일치합니다');
      setIsPassword(true);
    } else {
      setPasswordMsg('비밀번호가 일치하지 않습니다. 다시 한번 확인해주세요');
      setIsPassword(false);
    }
  });

  // ###########################################
  // ## SECTION VIEW 부분                     ###
  // ###########################################
  return (
    <>
      <h2 style={{ fontWeight: '700', fontSize: '20px', margin: '20px', lineHeight: '24px' }}>개인정보 수정</h2>

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '44px' }}>
        {/** 닉네임 부분 */}
        <StyleDivBox>
          {/** @NOTE db내 이메일을 어떻게 받아서 전달해줄쥐?  */}
          <EditInput inputLabel={'이메일'} type={'text'} value='asdf@naver.com' disabled={true} />
        </StyleDivBox>

        {/* WHAT 비밀번호 부분 */}

        <StyleDivBox>
          {/** @NOTE db내 비밀번호와 입력한 비밀번호를 비교해야합니다 ^^  */}
          <EditInput inputLabel={'현재 비밀번호'} type={'password'} onChange={onChangePwConfirm} />
        </StyleDivBox>

        {/* <StDivBox>
          <EditInput inputLabel={'비밀번호 변경'} type={'password'} onChange={onChangePw} />
          {newPw.length > 0 && (
            <ConfirmMsg className={`message ${isPassword ? 'success' : 'error'}`} style={{ top: '47vh', fontSize: '12px' }}>
              {passwordMsg}
            </ConfirmMsg>
          )}
        </StDivBox> */}

        {/* <StDivBox>
          <EditInput inputLabel={'비밀번호 확인'} type={'password'} onChange={onChangePwConfirm} />
          {newPwConfirm.length > 0 && (
            <ConfirmMsg className={`message ${isPasswordConfirm ? 'success' : 'error'}`} style={{ top: '54vh', fontSize: '12px' }}>
              {newPwConfirmMsg}
            </ConfirmMsg>
          )}
        </StDivBox> */}
      </div>

      {/* WHAT 버튼 */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
        <PrimaryButton buttonName={'수정하기'} onClick={onSubmitHandler} />
        <SubButton buttonName={'취소'} onClick={() => navigate(-1)} />
      </div>
    </>
  );
};

const StyleDivBox = styled.div`
  display: flex;
  height: 88px;
  margin-bottom: 18px;
  flex-direction: column;
  & > span {
    margin: 0 1.25rem;
  }
`;

const StyleConfirmMsg = styled.span`
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

export default EnterMyapgeEdit;
