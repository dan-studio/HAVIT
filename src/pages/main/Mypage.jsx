import styled from 'styled-components';
import Profile from '@components/cards/Profile';
import CrewInfo from '@components/cards/CrewInfo';
import AlertUser from '@components/cards/AlertUser';
import { userApis } from '../../apis/auth';

import { IoIosArrowForward } from 'react-icons/io';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useEffect, useState } from 'react';
import { resetLayout, setLayout } from '@redux/layout';
import MyProfile from '@components/profile/MyProfile';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  const principal = useSelector(state => state.auth.principal, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [group, setGroup] = useState([]);
  const [friends, setFriends] = useState([]);
  const [myInfo, setMyInfo] = useState("");

  // 레이아웃 관련 설정
  useEffect(() => {
    dispatch(setLayout({ isInvert: true }));
    return () => {
      dispatch(resetLayout());
    };
  }, []);

  // 그룹 가져오기
  useEffect(() => {
    userApis.getmyGroup().then(res => {
      setGroup(res.data);
    });
    userApis
    .myProfile()
    .then((res) => {
      setMyInfo(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  const certifies = myInfo?.certifyList?.length
  return (
    <StyledWrap>
      {/* 프로필 */}
      <MyProfile myInfo={principal} certifies={certifies}/>

      {/* 크루 정보 */}
      <StyledCrews>
        {/* <Bar /> */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2>내가 속한 크루</h2>
          <IoIosArrowForward
              style={{ fontSize: "20px", color: "#DE4242", cursor:"pointer" }}
              onClick={() => {
                navigate("/group");
              }}
            />
        </div>
        {group.code==="PARTICIPATION_NOT_FOUND"?null:group?.map((item, idx) => (
          <CrewInfo {...item} key={idx} />
        ))}

      </StyledCrews>

      {/* 알림 */}
      <StyledAlert>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2>알림</h2>
          <IoIosArrowForward style={{ fontSize: '20px' }} />
        </div>
        {friends && friends.map((item, idx) => <AlertUser {...item} key={idx} />)}
      </StyledAlert>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  position: relative;
  background-color: #5e43ff;
`;

const StyledCrews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0 30px 0;
  position: relative;
  background-color: #fff;
  border-radius: 30px 30px 0 0;

  & > div {
    margin: 35px 20px 0 20px;
    & > h2 {
      font-weight: 700;
      font-size: 20px;
      margin: 0;
      line-height: 24px;
    }
  }
`;

const Bar = styled.div`
  width: 50%;
  height: 5px;
  left: 20%;
  position: absolute;
  background: #eaeaea;
  border-radius: 5px;
`;

const StyledAlert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0;
  /* height: 100vh; */
  background-color: #ededed;

  & > div {
    margin: 35px 20px 0 20px;
    & > h2 {
      font-weight: 700;
      font-size: 20px;
      margin: 0;
      line-height: 24px;
    }
  }
`;

export default Mypage;
