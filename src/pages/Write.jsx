import styled from "styled-components";



const Write = () => {


  return (
    <div>
      <WriteBox>
      <div>헤더 들어갈 자리</div>
      <AddPhoto>
        사진추가
      </AddPhoto>
      <InputTitle>
      제목입력
      </InputTitle>
      <AddLocation>
        위치추가
      </AddLocation>
      <WriteBtn>
        <PostBtn>등록</PostBtn>
        <CancelBtn>취소</CancelBtn>
      </WriteBtn>

      write test
      </WriteBox>

    </div>
  )
}


const WriteBox = styled.div`
display:flex;
flex-direction: column;
`;
const AddPhoto = styled.div`
`;
const InputTitle = styled.div`
`;
const AddLocation = styled.div`
`;
const WriteBtn = styled.div`
display:flex;
flex-direction:row;
`;
const PostBtn = styled.div`
`;
const CancelBtn = styled.div`
`;

export default Write