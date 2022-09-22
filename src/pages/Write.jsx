import styled from "styled-components";
// import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import React from "react";


const Write = () => {


  return (
    <div>
      <WriteBox>
        
      <div>헤더 들어갈 자리</div>
      <AddPhoto>
        사진추가
      </AddPhoto>
      <InputTitle placeholder= "제목입력">
      
      </InputTitle>

      <AddLocation>
      {/* <LibraryAddIcon /> */}
      위치추가
      </AddLocation>
      <WriteBtn>
        <PostBtn>등록</PostBtn>
        <CancelBtn>취소</CancelBtn>
      </WriteBtn>


      </WriteBox>

    </div>
  )
}


const WriteBox = styled.div`
display:flex;
flex-direction: column;
/* @media screen and (max-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}
background-color:blue; */
width:390px;
height:844px;
margin:0 auto;
`;
const AddPhoto = styled.div`
width :350px;
height:350px;
background-color:pink;
margin: 0 20px 0 20px;

`;
const InputTitle = styled.input`
width:334px;
border-color:  transparent transparent gray transparent;
margin: 50px 0 50px 0;

`;
const AddLocation = styled.button`
width:100px;
border-color:transparent;
background-color:transparent;


`;
const WriteBtn = styled.div`
display:flex;
flex-direction:row;
position: center;
`;
const PostBtn = styled.button`
margin: 50px 0 50px 0; 
border-radius: 25px ;
width:50px;
height:20px;
border-color:transparent;
background-color:#5e43ff;
color:white;
font-size: small

`;
const CancelBtn = styled.button`
margin: 50px 0 50px 0; 
border-radius: 25px ;
width:50px;
height:20px;
border-color:transparent;
background-color: transparent;
color:#5e43ff;
font-size: small
`;

export default Write