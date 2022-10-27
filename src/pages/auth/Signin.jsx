import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import havit from '@/assets/havitLogoPurple.png';
import { useDispatch } from 'react-redux';
import { resetLayout, setLayout } from '@redux/layout';
import useInputs from '@hooks/useInput';
import { userApis } from '../../apis/auth';

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout({ showHeader: false }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

  const [form, onChange, reset] = useInputs({
    email: '',
    password: '',
  });

  const submmitHandler = e => {
    e.preventDefault();
    userApis.signin(form)
      .then(res => {
        if (!form.email) {
          alert('이메일을 입력해주세요');
          return;
        } else if (!form.password) {
          alert('비밀번호를 입력해주세요');
          return;
        } else if (res.data.code === 'MEMBER_NOT_FOUND') {
          alert('사용자를 찾을 수 없습니다.');
          return;
        } else if (res.data.code === 'PASSWORD_NOT_MATCHED') {
          alert('비밀번호가 일치하지 않습니다.');
          return;
        }
        if (res.status === 200) {
          alert(`${res.data.nickname}님 환영합니다!`);
          navigate('/');
        }
      })
      .catch(err => {
        if (err.code === 'ERR_NETWORK') {
          alert('네트워크 에러가 발생했습니다.');
          return;
        } else if (err) {
          console.log(err);
        }
      });
  };
  const onKeyDown = e => {
    if (e.key === 'Enter') {
      submmitHandler(e);
    }
  };
  return (
    <StyledDiv>
      <StyledSpan>
        SIGN IN TO
        <br />
        <img src={havit} alt='' />
      </StyledSpan>
      <form method='POST'>
        <StyledInputDiv>
          <StyledInput type='email' placeholder='✉  E-Mail' value={form?.email} name={'email'} onChange={onChange} />
          <StyledInput type='password' autoComplete='off' placeholder='🔒  비밀번호' value={form?.password} name={'password'} onChange={onChange} onKeyDown={onKeyDown} />
        </StyledInputDiv>
      </form>
      <StyledButtonDiv>
        <StyledButton color='white' background='#5C53FF' type='submit' onClick={submmitHandler}>
          로그인
        </StyledButton>
        <StyledButton
          background='white'
          onClick={() => {
            navigate('/auth');
          }}>
          뒤로가기
        </StyledButton>
      </StyledButtonDiv>
    </StyledDiv>
  );
};

export default Signin;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 40px;
  .message {
    font-size: 1.4vh;
    font-weight: 500;
    &.success {
      color: #2ede3d;
    }
    &.error {
      color: #5e43ff;
    }
  }
`;
const StyledSpan = styled.span`
  color: #252224;
  left: 15vw;
  font-weight: 400;
  font-size: 25px;
  line-height: 40px;
  margin: 115px auto 30px 10px;
  img {
    width: 140px;
  }
`;

const StyledButtonDiv = styled.div`
  width: 80vw;
  margin: 300px auto;
`;
const StyledButton = styled.button`
  width: 80vw;
  color: ${props => props.color};
  border: 1px solid #5c53ff;
  background-color: ${props => props.background};
  padding: 10px;
  border-radius: 30px;
  margin: 0 0 10px;
  cursor: pointer;
  :disabled {
    cursor: unset;
    background-color: #ccc;
    border: 1px solid #ccc;
  }
`;

const StyledInputDiv = styled.div`
  width: 80vw;
  margin: 0 auto 10px;
`;

const StyledInput = styled.input`
  width: 80vw;
  border: 1px solid #d9d9d9;
  padding: 10px 30px;
  border-radius: 30px;
  margin: 10px auto 0;
`;
