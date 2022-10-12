import { useState } from "react";
import styled from "styled-components";
import MemberInfo from "../cards/MemberInfo";

const List = ({ data, type, memberList, leaderName, crewName, leader }) => {
  const crewLeader = memberList?.find(
    (item) => item.memberId === leader?.memberId
  );
  const [members, setMembers] = useState(false);

  return (
    <Container>
      <div className="title" onClick={()=>{setMembers(!members)}}>
        {data?.title ? (
          <>
            {data.title}
            {members?<span>▲</span>:<span>▼</span>}
          </>
        ) : (
          <></>
        )}
      </div>
      {members && (
        <aside>
          {memberList?.map((item, idx) =>
            item.memberId === leader.memberId ? (
              <MemberInfo
                key={idx}
                {...item}
                roleName={leaderName}
                width={79}
                height={30}
                leader={crewLeader}
              />
            ) : (
              <MemberInfo
                {...item}
                roleName={crewName}
                width={60}
                height={86}
                key={idx}
              />
            )
          )}
        </aside>
      )}
    </Container>
  );
};

export default List;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;

    color: ${({ theme }) => theme.color.black};
  }
  & > aside {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 0.5rem;
  }
  span {
    font-size: 8px;
    margin-left: 0.25rem;
  }
`;
