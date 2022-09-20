
import styled from "styled-components";
import React from "react";
import {FaStarHalfAlt} from 'react-icons/fa'

import {BsTrophy} from 'react-icons/bs'
const Main = () => {


  return (
    <div>
      <MainBox>
        <UserProfile>
          <UserBox>
            <UserRight>
            <UserPhoto
            src="https://t1.daumcdn.net/cfile/tistory/99D8AA4B5C5621621C">

            </UserPhoto>
            </UserRight>
            <UserLeft>
            <UserName>
              김병처리d
            </UserName>
            <UserIntr>
              세상에서 제일가는 장난꾸러기
            </UserIntr>
            <Percentage value="50" max="100">

            </Percentage>
            <Achievements>
              업적 <br/>
              <FaStarHalfAlt /> 시작이 반이다 <br />
              <BsTrophy /> 첫 완수

            </Achievements>
            </UserLeft>
          </UserBox>

  
        </UserProfile>
        <Group>
          <GroupTitle>

          </GroupTitle>
          <GroupPhotoBox>


          <GroupPhoto 
          src="https://file.mk.co.kr/meet/neds/2022/01/image_readmed_2022_65373_16434607774924988.jpg">
          </GroupPhoto>

          <GroupPhoto
          src="https://file.mk.co.kr/meet/neds/2022/01/image_readmed_2022_65373_16434607774924988.jpg">

          </GroupPhoto>
          <GroupPhoto
          src="https://file.mk.co.kr/meet/neds/2022/01/image_readmed_2022_65373_16434607774924988.jpg">

          </GroupPhoto>
          <GroupPhoto
          src="https://file.mk.co.kr/meet/neds/2022/01/image_readmed_2022_65373_16434607774924988.jpg">

          </GroupPhoto>
          <GroupPhoto
          src="https://file.mk.co.kr/meet/neds/2022/01/image_readmed_2022_65373_16434607774924988.jpg">

          </GroupPhoto>

          </GroupPhotoBox>



        </Group>
      </MainBox>
    </div>
  )
}

const MainBox= styled.div`
display:flex;
flex-direction:column;
`;
const  UserProfile= styled.div`
border-radius:25px;
border-color: black;
border-style:solid;
border:solid;
height: 200px;
margin: 10px 0 10px 0;

`;
const UserBox= styled.div`
display:flex;
flex-direction:row;
`;
const UserRight = styled.div`
display:flex;
flex-direction:column;
margin:5px 0 0 10px;

`;
const UserPhoto= styled.img`
width:150px;
height:150px;
border-radius: 50%;
margin:5px 0 0 10px;

`;
const UserLeft= styled.div`
margin:5px 0 0 10px;

`;
const Percentage = styled.progress`

`;
const UserName= styled.div`
font-weight:bold;
font-size: 20px;
`;
const UserIntr= styled.div`
color:gray;
`;
const Achievements= styled.div`
`;
const Group = styled.div`

`;
const GroupTitle = styled.div`
`;
const GroupPhotoBox = styled.div`

  display: flex;
  flex-direction:row;
  width: 95vw;
  height: 100px;
  margin: 10px 20px 5px;
  overflow-x: scroll;
  overflow-y: hidden;

`;
const GroupPhoto = styled.img`

`;
export default Main