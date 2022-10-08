import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";
import { fileUrlHost } from "@apis/config";
import crown from "@assets/leader.png";

const MemberInfo = ({ width, height, nickname, imageId, roleName, leader }) => {
  return (
    <Container width={width} height={height}>
      {imageId&&imageId ? (
        <StyledProfileImg alt="" src={fileUrlHost(imageId)}></StyledProfileImg>
      ) : (
        <StyledProfileDiv>
          <UserOutlined style={{ fontSize: "20px" }}></UserOutlined>
        </StyledProfileDiv>
      )}
      {leader && <Crown src={crown} alt="" />}
      <div>
        <div>{nickname}</div>
        <span>{roleName || "역할"}</span>
      </div>
    </Container>
  );
};

export default MemberInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  justify-content: space-between;
  & > div {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      justify-content: center;
      white-space: nowrap;
      width: 60px;
      font-size: 12px;
      color: ${({ theme }) => theme.color.black};
      font-weight: bold;
    }
    span {
      display: flex;
      justify-content: center;
      margin: 0px;
      font-size: 8px;
      color: ${({ theme }) => theme.color.gray};
    }
  }
`;

const StyledProfileImg = styled.img`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const StyledProfileDiv = styled.div`
  border-radius: 100%;
  width: ${({ height }) => height}px;
  height: 50px;
  width: 50px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Crown = styled.img`
  position: absolute;
  height: 33px;
  transform: translate(-8px, -20px);
`;
