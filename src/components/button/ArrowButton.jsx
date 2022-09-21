import { Tooltip } from "antd";
import styled from "styled-components";
const ArrowButton = () => {
    return (
        <Container onClick={() => window.scrollTo(0, 0)}>
            <Tooltip>
                {/* <Tooltip placement="top" title="Go Top"> */}
                <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.0622 0.476689L19.5595 9.68866C20.1468 10.3254 20.1468 11.3549 19.5595 11.9849L18.1475 13.5157C17.5601 14.1524 16.6104 14.1524 16.0294 13.5157L10 6.99281L3.97688 13.5225C3.38957 14.1592 2.43986 14.1592 1.85879 13.5225L0.440487 11.9917C-0.146829 11.3549 -0.146829 10.3254 0.440487 9.69544L8.93783 0.483463C9.52515 -0.160021 10.4749 -0.160021 11.0622 0.476689V0.476689Z"
                        fill="#B0B0B0"
                    />
                </svg>
            </Tooltip>
        </Container>
    );
};

export default ArrowButton;

const Container = styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 49px;
    height: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    position: absolute;
    right: 9px;
    border: 0.5px solid ${({ theme }) => theme.color.gray};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
