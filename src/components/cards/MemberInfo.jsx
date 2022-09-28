import styled from "styled-components";

const MemberInfo = ({ width, height, nickname, profileUrl}) => {
    return (
        <Container width={width} height={height}>
            <img
                alt=""
                src={profileUrl}
            ></img>
            <div>
                <div>{nickname}</div>
                <span>역할</span>
            </div>
        </Container>
    );
};

export default MemberInfo;

const Container = styled.div`
    display: flex;
    align-items: center;
    width: ${({ width }) => {
        return width + "px" || "100%";
    }};
    height: ${({ height }) => {
        return height + "px" || "100%";
    }};
    justify-content: space-between;
    & > img {
        border-radius: 100%;
        width: ${({ height }) => height}px;
        height: 100%;
    }
    & > div {
        display: flex;
        flex-direction: column;

        div {
            font-size: 12px;
            color: ${({ theme }) => theme.color.black};
            font-weight: bold;
        }
        span {
            font-size: 8px;
            color: ${({ theme }) => theme.color.gray};
        }
    }
`;
