import styled from "styled-components";

const MemberInfo = ({ width, height }) => {
    return (
        <Container width={width} height={height}>
            <img
                alt="프로필 이미지"
                src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ys5jqwvg6pgtpacb5kqb/IMG%20%EC%9B%94%EB%93%9C%20%EC%98%A4%EB%B8%8C%20%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B2%98%20%EC%9E%85%EC%9E%A5%EA%B6%8C.jpg"
            ></img>
            <div>
                <div>타이틀</div>
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
