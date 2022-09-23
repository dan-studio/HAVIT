import styled from 'styled-components';
import Uploader from '../input/Uploader';

const UserImgForm = () => {
  return (
    <UserImg>
      <Uploader styled={{ margin: 'auto' }} />
    </UserImg>
  );
};
const UserImg = styled.div`
  width: 130px;
  height: 130px;
  margin: 20px auto;
  border: 1px solid gray;
  border-radius: 100%;
  overflow: hidden;
`;

export default UserImgForm;
