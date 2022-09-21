import CrewInfo from '@components/cards/CrewInfo';
import styled from 'styled-components';

const Mypage = () => {
  return (
    <Wrap>
      <Header>HAVIT</Header>
      <Crews>
        <Bar />
        <h2>내가 속한 크루</h2>
        <CrewInfo />
        <CrewInfo />
        <CrewInfo />
      </Crews>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  background-color: #5e43ff;
`;

const Header = styled.div`
  width: 350px;
  height: 26px;
  position: fixed;
  top: 55px;
  margin: 0 20px 40px 20px;
  background-color: red;
`;

const Crews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 30px;
  background-color: #fff;
  border-radius: 30px 30px 0 0;

  & > h2 {
    padding: 10px 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
`;

const Bar = styled.div`
  width: 60%;
  height: 5px;
  left: 20%;
  position: absolute;
  background: #eaeaea;
  border-radius: 5px;
`;

export default Mypage;
