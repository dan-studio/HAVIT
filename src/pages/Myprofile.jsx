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

const Myprofile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ###########################################
  // ## SECTION State                        ###
  // ###########################################

  // WHAT 원래 상태
  const [userProfile, setUserProfile] = useState('');
  const [nickname, setNickname] = useState('기본아이디');
  const [introduce, setIntroduce] = useState('기본소개');

  // ###########################################
  // ## SECTION 내정보 가져오기                 ###
  // ###########################################

  useEffect(() => {
    userApis
      .myProfile()
      .then(res => {
        console.log('🚀 ⁝ userApis.Myprofile ⁝ res', res);
        setUserProfile(res.profileUrl);
        setNickname(res.nickname);
        setIntroduce(res.introduce);
      })
      .catch(err => {
        console.log('🚀 ⁝ Myprofile ⁝ err', err);
      });
  }, []);

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
  const onSubmitHandler = () => {
    userApis
      .updateProfile()
      .then(response => {
        console.log(response);
        alert(`${response.data.data.nickname}님 환영합니다!`);
        const temp = { access_token: response.headers.authorization, refresh_token: response.headers['refresh-token'] };
        setToken(temp);
        navigate('/main');
      })
      .catch(error => {
        if (error.response.data.errorMsg.code === 'MEMBER_NOT_FOUND') {
          alert('입력하신 이메일 또는 비밀번호가 일치하지 않습니다.');
        }
      });
  };

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
          <EditInput inputLabel={'닉네임'} value={nickname} type={'text'} onChange={onChangeNickname} />
          {nickname.length > 0 && (
            <StyledConfirmMsg className={`message ${isNickname ? 'success' : 'error'}`} style={{ top: '47vh', fontSize: '12px' }}>
              {nicknameMsg}
            </StyledConfirmMsg>
          )}
        </StyledDivBox>

        {/* 자기소개 */}
        <StyledDivBox>
          <EditInput inputLabel={'자기소개'} value={introduce} type={'text'} />
        </StyledDivBox>

        <span onClick={() => navigate(`/mypage/edit/private`)} style={{ fontSize: '1rem', color: '#b0b0b0', margin: '.625rem 1.25rem 0 1.25rem', textDecoration: 'underline' }}>
          비밀번호 변경
        </span>
      </div>

      {/* WHAT 버튼 */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '6.25rem auto' }}>
        <PrimaryButton buttonName={'수정하기'} onClick={onSubmitHandler} />
        <SubButton buttonName={'취소'} onClick={() => navigate(-1)} />
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

export default Myprofile;
