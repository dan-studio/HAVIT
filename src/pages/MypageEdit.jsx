import { useDispatch } from 'react-redux';
import { setLayout } from '@redux/layout';
import { useEffect } from 'react';
import { resetLayout } from '../redux/layout';
import styled from 'styled-components';

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
      <UserImg/>
    </>
  );
};

const UserImg = styled.div`
  width: 170px;
  height: 170px;
  margin-right: 20px;
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
