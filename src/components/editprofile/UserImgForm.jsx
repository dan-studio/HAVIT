import styled from 'styled-components';
import Uploader from '../input/Uploader';

const UserImgForm = () => {
  return (
    <StyleUserImg>
      <Uploader />
    </StyleUserImg>
  );
};
const StyleUserImg = styled.div`
  width: 130px;
  height: 130px;
  margin: 20px auto;
  border: 1px solid gray;
  border-radius: 100%;
  overflow: hidden;
  & > Uploader {
    margin: auto;
  }
`;

export default UserImgForm;
