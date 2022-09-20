
import styled from "styled-components";
import React from "react";

const Main = () => {


  return (
    <div>
      <MainBox>
        <UserProfile>
          <UserBox>
            <UserRight>
            <UserPhoto>

            </UserPhoto>
            </UserRight>
            <UserLeft>
            <UserName>
              김병처리

            </UserName>
            <UserIntr>
              세상에서 제일가는 장난꾸러기
            </UserIntr>
            <Achievements>
              업적
            </Achievements>
            </UserLeft>
          </UserBox>


        </UserProfile>
        <Group>

        </Group>
      </MainBox>
    </div>
  )
}

const MainBox= styled.div`
`;
const  UserProfile= styled.div`
`;
const UserBox= styled.div`
`;
const UserRight = styled.div`
`;
const UserPhoto= styled.div`
`;
const UserLeft= styled.div`
`;
const UserName= styled.div`
`;
const UserIntr= styled.div`
`;
const Achievements= styled.div`
`;
const Group = styled.div`

`;
// const = styled.div`
// `;
// const = styled.div`
// `;

export default Main