import React, {memo} from "react";
import styled from "styled-components";

const SkeletonUI = () => {
  return (
    <Div>
      <Img>
        <Shimmer />
      </Img>
      <Wrap>
        <Text className="title">
          <Shimmer />
        </Text>
        <InnerWrap>
        <Text className="date">
          <Shimmer />
        </Text>
        <Text className="often">
          <Shimmer />
        </Text>
        </InnerWrap>
        <Text className="number">
          <Shimmer />
        </Text>
        <Text className="tags">
          <Shimmer />
        </Text>
      </Wrap>
    </Div>
  );
};

export default memo(SkeletonUI);

const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background-color: #e0e0e0;
  box-shadow: 0 0 30px 30px #e0e0e0;
  animation: loading 1s infinite;
  @keyframes loading {
    0% {
      transform: translateX(-50%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translate(200%);
    }
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  position: relative;
  min-height: 162px;
  background-color: #ffffff;
  & .circleImage,
  & .ant-image-mask {
    width: 110px;
    height: 110px;
    margin-right: 20px;
    border-radius: 100%;
    overflow: hidden;
    object-fit: cover;
  }
`;

const Img = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 0 15px 0 0;
  overflow: hidden;
  background-color: #eeeeee;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flexs;
  padding: 0.4rem;
  .title {
    width: 145px;
    height: 23px;
    margin-left: 0;
  }
  .date {
    width: 120px;
    height: 14px;
    margin-left: 0;
  }
  .number {
    width: 50px;
    height: 14px;
    margin-left: 0;
  }
  .tags {
    width: 160px;
    height: 18px;
    margin-left: 0;
  }
  .often{
    width: 35px;
    height: 18px;
    border-radius: 10px;
    margin-left: 10px;
  }
`;

const Text = styled.div`
  margin: 5px auto;
  overflow: hidden;
  background-color: #eeeeee;
`;
const InnerWrap = styled.div`
  display: flex;
`