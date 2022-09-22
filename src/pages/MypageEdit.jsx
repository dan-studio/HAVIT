import { useDispatch } from 'react-redux';
import { setLayout } from '@redux/layout';
import { useEffect } from 'react';
import { resetLayout } from '../redux/layout';
import styled, { css } from 'styled-components';

// components
import EditInput from '../components/EditInput';
import PrimaryButton from '../components/PrimaryButton';
import SubButton from '../components/SubButton';

const MypageEdit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLayout({ showHeader: false }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

  return (
    <>
      <h2 style={{ fontWeight: '700', fontSize: '20px', margin: '20px', lineHeight: '24px' }}>개인정보 수정</h2>
      <UserImg />
      <div>
        <EditInput inputLabel={'닉네임 변경'} type={'text'} />
        <EditInput inputLabel={'현재 비밀번호'} type={'password'} />
        <EditInput inputLabel={'비밀번호 변경'} type={'password'} />
        <EditInput inputLabel={'비밀번호 확인'} type={'password'} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
        <PrimaryButton buttonName={'수정하기'} />
        <SubButton buttonName={'취소'} />
      </div>
    </>
  );
};

const UserImg = styled.div`
  width: 170px;
  height: 170px;
  margin: auto;
  background-color: red;
  border-radius: 100%;
  overflow: hidden;
  & > img {
    width: 92px;
    height: 92px;
    object-fit: cover;
  }
`;
export default MypageEdit;
