import { shallowEqual, useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

// components
import EditInput from '@components/editprofile/EditInput';
import PrimaryButton from '@components/button/PrimaryButton';
import SubButton from '@components/button/SubButton';
import { useNavigate } from 'react-router-dom';
import useInputs from '@hooks/useInput';
import Uploader from '../../components/input/Uploader';
import { userApis } from '../../apis/auth';

const Myprofile = () => {
  // ###########################################
  // ## SECTION State                        ###
  // ###########################################
  const principal = useSelector(state => state.auth.principal, shallowEqual);
  const navigate = useNavigate();
  const [form, onChange, reset] = useInputs({ ...principal });

  // WHAT 상태 메세지
  const [nicknameMsg, setNicknameMsg] = useState('');
  // 유효성 통과 여부
  const [validateCheck, setValidateCheck] = useState(true);

  // ###########################################
  // ## SECTION 유효성검사                     ###
  // ###########################################
  useEffect(() => {
    setValidateCheck(onChangeValidate());
  }, [form]);

  // WHAT 닉네임 확인
  const onChangeValidate = () => {
    if (form.nickname?.length < 2) {
      setNicknameMsg('2글자 이상 입력해주세요');
      return false;
    } else {
      setNicknameMsg('사용할 수 있는 닉네임입니다');
    }
    return true;
  };

  const onSubmmit = () => {
    userApis.updateProfile(form)
      .then(res => {
        if (res.status !== 200) return;
        alert('프로필 수정이 완료되었습니다.');
        navigate('/mypage');
      })
      .catch(err => {
        alert('Fail Modify User Info', err);
      });
  };

  const onCancel = () => {
    reset();
    navigate('/mypage')
  };


  // ###########################################
  // ## SECTION VIEW 부분                    ###
  // ###########################################
  return (
    <>
      <h2 style={{ fontWeight: '700', fontSize: '20px', margin: '20px', lineHeight: '24px' }}>개인정보 수정</h2>

      {/* WHAT 유저 프로필 */}
      <Uploader
        className={'profile_uploader'}
        // defaultVvalue={form?.imageId}
        value={form?.imageId}
        name='imageId'
        children={<UserOutlined style={{ fontSize: '2rem', color: 'lightgray' }} />}
        onChange={e => {
          form.imageId = e;
        }}></Uploader>

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '44px' }}>
        {/** 닉네임 부분 */}
        <StyledDivBox>
          <EditInput inputLabel={'닉네임'} placeholder={'닉네임'} name={'nickname'} value={form?.nickname} type={'text'} onChange={onChange} />
          <StyledConfirmMsg style={{ top: '47.3vh', fontSize: '12px', padding: '2px 5px' }}>{validateCheck ? <div style={{ color: '#5e43ff' }}>{nicknameMsg}</div> : <div style={{ color: '#e94560' }}>{nicknameMsg}</div>}</StyledConfirmMsg>
        </StyledDivBox>

        {/* 자기소개 */}
        <StyledDivBox>
          <EditInput inputLabel={'자기소개'} placeholder={'소개'} name={'introduce'} value={form?.introduce} onChange={onChange} type={'text'} />
        </StyledDivBox>

        <span onClick={() => navigate(`/mypage/edit/private`)} style={{ fontSize: '1rem', color: '#b0b0b0', margin: '.625rem 1.25rem 0 1.25rem', textDecoration: 'underline' }}>
          비밀번호 변경
        </span>
      </div>

      {/* WHAT 버튼 */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '6.25rem auto' }}>
        <PrimaryButton buttonName={'수정하기'} onClick={onSubmmit} />
        <SubButton buttonName={'취소'} onClick={onCancel} />
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
