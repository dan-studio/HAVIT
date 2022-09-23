import styled from "styled-components";
import React from "react";
import { AiOutlinePlusCircle} from "react-icons/ai";
import Button from "../components/PrimaryButton";



const Write = () => {


  return (
    <div>
      <WriteBox>        
      <AddPhoto>
        <IconBox>
        <AiOutlinePlusCircle size="60" color="lightgray"/>
        </IconBox>
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
/* background-color:pink; */
border: 0.5px solid #eaeaea;
  background-color: #ffffff;

margin: 0 auto;

`;
const InputTitle = styled.input`
width:334px;
border-color:  transparent transparent gray transparent;
margin: 10px 10px;

`;
const IconBox = styled.div`
/* position: center; */
margin: 160px 160px 160px 160px;

`;

const AddLocation = styled.button`
width:80px;
border-color:transparent;
background-color:transparent;
margin-right: 0;

`;
const WriteBtn = styled.div`
display:flex;
flex-direction:row;
/* position: center; */
margin: 0 auto;

`;
const PostBtn = styled.button`
margin: 50px 0 50px 0; 
border-radius: 25px ;
width:50px;
height:30px;
border-color:transparent;
background-color:#5e43ff;
color:white;
font-size: small
`;

const CancelBtn = styled.button`
margin: 50px 0 50px 0; 
border-radius: 25px ;
width:50px;
height:30px;
border-color:transparent;
background-color: transparent;
color:#5e43ff;
font-size: small
`;

export default Write