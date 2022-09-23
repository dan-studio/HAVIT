import styled from 'styled-components';

const UserImgForm = () => {
  return <UserImg></UserImg>;
};
const UserImg = styled.div`
  width: 170px;
  height: 170px;
  margin: 20px auto;
  background-color: red;
  border-radius: 100%;
  overflow: hidden;
  & > img {
    width: 92px;
    height: 92px;
    object-fit: cover;
  }
`;

export default UserImgForm;
