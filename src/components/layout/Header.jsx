import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { FiSettings, FiSearch} from 'react-icons/fi';
import {AiFillBell } from 'react-icons/ai';
import Search from '@components/layout/Search';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Header = () => {
  const layout = useSelector(state => state.layout);
  const navigate = useNavigate();
  const [showSearchForm, setShowSearchForm] = useState(false);

  const onClickLogo = ()=>{
    navigate('/');
  }
  return (
    <>
      <Container id='header' invert={layout.isInvert} smallType={layout.smallType}>
        {layout.isInvert ? (
          <StyledInvertedLogo
            alt='logo'
            src={require('@assets/HavitWhite.png')}
            onClick={onClickLogo}
          />
        ) : (
          <StyledLogo
            alt='logo'
            src={require('@assets/havit.png')}
            onClick={onClickLogo}
          />
        )}

        <Icons invert={layout.isInvert} >
            {/* NOTE SEARCH 부분 */}
            <FiSearch onClick={() => setShowSearchForm(true)} style={{ marginRight: '15px' }}></FiSearch>
            <FiSettings
              onClick={() => {
                navigate('setting');
              }}
            />
        </Icons>
        {!!showSearchForm ? <Search onClose={(e)=>{setShowSearchForm(!e)}} /> : <></>}
      </Container>
    </>
  );
};
const Container = styled.div`
  background-color: ${props => (props.invert ? '#5E43FF' : 'white')};
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: ${props=>(props.smallType?'55px 20px 0px 20px':'55px 20px 40px 20px')};
  justify-content: space-between;
`;
const Icons = styled.div`
  font-size: 22px;
  color: ${props => (props.invert ? 'white' : '#b0b0b0')};
  & > * {
    margin: 0 0.25rem;
    &:hover {
      transform: scale(0.85);
    }
  }
`;
const StyledLogo = styled.img`
  width: 120px;
  cursor: pointer;
`;
const StyledInvertedLogo = styled.img`
  width: 120px;
  cursor: pointer;
`;

export default Header;
