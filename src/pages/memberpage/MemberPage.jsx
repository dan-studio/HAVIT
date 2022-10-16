import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { userApis } from "@apis/auth";
import UserProfile from "@components/profile/UserProfileCard";
import CrewInfo from "../../components/cards/CrewInfo";
import { IoIosArrowForward } from "react-icons/io";
import logo from "@assets/havit_black.svg";

const MemberPage = () => {
  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useState([]);
  const { memberId } = useParams();
  useEffect(() => {
    userApis.getMemberDetail(memberId).then((res) => {
      setMemberInfo(res.data);
    });
  }, []);

  const group = memberInfo?.groupList;

  return (
    <StyledDiv>
      <UserProfile memberInfo={memberInfo} />
      <StyledCrews>
        {group?.length === 0 ? (
          <StyledImg src={logo} alt="" />
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2>{memberInfo?.nickname}님이 속한 크루</h2>
              <IoIosArrowForward
                style={{
                  fontSize: "20px",
                  color: "#DE4242",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/group");
                }}
              />
            </div>
            {group &&
              group?.map((item, idx) => <CrewInfo {...item} key={idx} />)}
          </>
        )}
      </StyledCrews>
    </StyledDiv>
  );
};

export default MemberPage;
const StyledDiv = styled.div``;
const StyledCrews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 0 30px 0;
  position: relative;
  background-color: #fff;
  border-radius: 30px 30px 0 0;

  & > div {
    margin:20px 20px 0;
    & > h2 {
      font-weight: 700;
      font-size: 20px;
      margin: 0;
      line-height: 24px;
    }
  }
`;
const StyledImg = styled.img`
  width: 200px;
  margin: auto;
`;
