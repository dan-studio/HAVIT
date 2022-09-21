import styled, { css } from "styled-components";
import { useState } from "react";
import { MdPeopleAlt } from "react-icons/md";

// 컴포넌트

import { Tag } from "antd";
import { EditFilled } from "@ant-design/icons";

const CrewInfo = ({ data, type = "shadow" }) => {
    const [groupName, setGroupName] = useState("오운완ㅋ");
    const [numberOfPeople, setNumberOfPeopf] = useState(1);

    return (
        <Card type={type}>
            <div>
                <GroupImg></GroupImg>
                <GroupInfo>
                    <div className="title">
                        {groupName}
                        {type === "detail" ? (
                            <EditFilled style={{ color: "lightgray" }} />
                        ) : (
                            <></>
                        )}
                    </div>

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
            </div>
            {type === "detail" ? (
                <p>
                    ✅ 갓생을 희망하지만 마음으로만 실천하고 계시는 분들! <br />
                    🌞우리 모두 6시에 일어나기부터 해봅시다! <br />
                    <br />⏰ 매일 아침 6시 각자 활동인증샷을 올려주세요!
                </p>
            ) : (
                <></>
            )}
        </Card>
    );
};
export default CrewInfo;
const Card = styled.div`
    /* justify-content: space-between; */
    margin: 0 20px 0 20px;
    /* width: 46.4vw; */
    background-color: #ffffff;
    & > div {
        display: flex;
        align-items: center;
        height: 162px;
        ${({ type }) => {
            switch (type) {
                case "shadow":
                    return ShadowCard;
                case "list":
                    return css`
                        border-bottom: 0.5px solid #d9d9d9;
                    `;
                case "detail":
                    return css`
                        height: auto;
                    `;
                default:
                    return ShadowCard;
            }
        }}
    }
    & > p {
        margin-top: 25px;
        font-size: 12px;
    }
    .title {
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.25rem 0;
    }
`;

const ShadowCard = css`
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
