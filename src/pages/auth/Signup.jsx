import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import havit from '@assets/havitLogoPurple.png';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { resetLayout, setLayout } from '../../redux/layout';
import { userApis } from '../../apis/auth';

const Signup = () => {
  const navigate = useNavigate();

  const layout = useSelector(state => state.layout, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout({ showHeader: false }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [emailMessage, setEmailMessage] = useState('');
  const [nicknameMessage, setNicknameMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState('');

  const [isEmail, setIsEmail] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onSubmitHandler = e => {
    e.preventDefault();
    const data = {
      email,
      nickname,
      password,
      passwordConfirm,
    };
    userApis
      .signup(data)
      .then(res => {
        if (res.code === 'DUPLICATE_EMAIL') {
          return alert(res.message);
        }
        alert('회원가입이 완료되었어요 😉');
        navigate('/auth/signin');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onChangeEmail = useCallback(e => {
    const emailRegex = /([\w-.]{2,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('옳지 않은 이메일 형식입니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('올바른 이메일 형식이에요!');
      setIsEmail(true);
    }
  }, []);

  const onChangeNickname = useCallback(e => {
    setNickname(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 10) {
      setNicknameMessage('2글자 이상 10글자 이하로 입력해주세요.');
      setIsNickname(false);
    } else {
      setNicknameMessage('올바른 닉네임 형식이에요!');
      setIsNickname(true);
    }
  }, []);
  const onChangePassword = useCallback(e => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
      setIsPassword(false);
    } else {
      setPasswordMessage('안전한 비밀번호에요');
      setIsPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    e => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setConfirmPasswordMessage('비밀번호를 똑같이 입력했어요 : )');
        setIsPasswordConfirm(true);
      } else {
        setConfirmPasswordMessage('비밀번호가 일치하지 않습니다. 다시 한번 확인해주세요');
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  return (
    <StyledDiv>
      <StyledSpan>
        <span style={{ fontWeight: '400' }}>Come aboard,</span>
        <span style={{ fontWeight: '700', color: '#5e43ff' }}>Let's make</span>
        <img src={havit} alt='' />
        <span style={{ fontWeight: '700' }}>Together!</span>
      </StyledSpan>
      <StyledNotice>이벤트 상품 수령을 위하여 실제 사용하시는 이메일 주소 입력을 권장합니다.</StyledNotice>
      <form method='POST'>
        <StyledInputDiv>
          <StyledInput type='email' placeholder='✉  E-Mail' onChange={onChangeEmail} />
          {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
          <StyledInput type='text' placeholder='🙋‍♂️  닉네임' onChange={onChangeNickname} />
          {nickname.length > 0 && <span className={`message ${isNickname ? 'success' : 'error'}`}>{nicknameMessage}</span>}
          <StyledInput type='password' autoComplete='off' placeholder='🔒  비밀번호' onChange={onChangePassword} />
          {password.length > 0 && <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>}
          <StyledInput type='password' autoComplete='off' placeholder='🔒  비밀번호 확인' onChange={onChangePasswordConfirm} />

          {passwordConfirm.length > 0 && <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{confirmPasswordMessage}</span>}
        </StyledInputDiv>
      </form>
      <StyledButtonDiv>
        <StyledButton color='white' background='#5C53FF' onClick={onSubmitHandler} type='submit' disabled={!(isEmail && isNickname && isPassword && isPasswordConfirm)}>
          회원가입 완료
        </StyledButton>
        <StyledButton
          background='white'
          onClick={() => {
            navigate(-1);
          }}>
          뒤로가기
        </StyledButton>
      </StyledButtonDiv>
    </StyledDiv>
  );
};

export default Signup;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 40px;
  .message {
    font-size: 1.4vh;
    font-weight: 500;
    margin-left: 15px;
    &.success {
      color: rgb(94, 67, 255);
    }
    &.error {
      color: #e94560;
    }
  }
`;
const StyledSpan = styled.span`
  color: #252224;
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  margin: 115px auto 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 140px;
    margin: 10px 0;
  }
  span {
    margin: 5px 0 0px;
  }
`;

const StyledButtonDiv = styled.div`
  width: 80vw;
  margin: 145px auto;
`;
const StyledButton = styled.button`
  width: 80vw;
  color: ${props => props.color};
  border: 1px solid #5c53ff;
  background-color: ${props => props.background};
  padding: 10px;
  border-radius: 30px;
  margin: 0 0 5px;
  cursor: pointer;
  :disabled {
    cursor: unset;
    background-color: #ccc;
    border: 1px solid #ccc;
  }
`;
const StyledInput = styled.input`
  width: 80vw;
  border: 1px solid #d9d9d9;
  padding: 10px 30px;
  border-radius: 30px;
  margin: 5px auto 0;
`;
const StyledNotice = styled.div`
  font-size: 11px;
  background-color: rgb(94, 67, 255, 0.25);
  padding: 1px 6px;
  border-radius: 30px;
  margin: 0 auto 15px;
  width: 340px;
  transform: translateX(-20px);
`;
const StyledInputDiv = styled.div`
  width: 80vw;
  margin: 0 auto 5px;
`;
