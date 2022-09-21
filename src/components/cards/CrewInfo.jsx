import styled, { css } from "styled-components";
import { useState } from "react";
import { MdPeopleAlt } from "react-icons/md";

// 컴포넌트
import DayBadge from "../DayBadge";
import Tags from "../Tag";
import { Tag } from "antd";

const CrewInfo = ({ data, type = "shadow" }) => {
    const [groupName, setGroupName] = useState("오운완ㅋ");
    const [numberOfPeople, setNumberOfPeopf] = useState(1);

    return (
        <Card type={type}>
            <GroupImg></GroupImg>
            <GroupInfo>
                <h2>{groupName}</h2>
                <DayInfo>
                    <span>8월 19일 - 12월 31일</span>
                    <Tag color={"#5e43ff"} style={{ margin: "0 .5rem" }}>
                        매일
                    </Tag>
                </DayInfo>
                <div>
                    <MdPeopleAlt color="#5e43ff" />
                    <span>{numberOfPeople}명</span>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "8px",
                    }}
                >
                    <Tag>테스트</Tag>
                    <Tag>테스트1</Tag>
                    <Tag>테스트2</Tag>
                </div>
            </GroupInfo>
        </Card>
    );
};
export default CrewInfo;
const Card = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    box-sizing: border-box;
    margin: 0 20px 0 20px;
    /* width: 46.4vw; */
    height: 162px;
    background-color: #ffffff;
    ${({ type }) => {
        switch (type) {
            case "shadow":
                return ShadowCard;
            case "list":
                return css`
                    border-bottom: 0.5px solid #d9d9d9;
                `;
            default:
                return ShadowCard;
        }
    }}
`;

const ShadowCard = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 0.5px solid #eaeaea;
    border-radius: 10px;
    padding: 15px;
`;

const GroupImg = styled.div`
    width: 92px;
    height: 92px;
    margin-right: 20px;
    background-color: red;
    border-radius: 100%;
    overflow: hidden;
    & > img {
        width: 92px;
        height: 92px;
        object-fit: cover;
    }
`;

const GroupInfo = styled.div`
    display: flex;
    flex-direction: column;

    & > h2 {
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 22px;
    }
`;

const DayInfo = styled.div`
    display: flex;
    align-items: center;
    & > span {
        font-weight: bold;
    }
`;

const Nop = styled.div`
    display: flex;
`;
