import styled from "styled-components";
import CrewInfo from "@components/cards/CrewInfo";
import { Divider } from "antd";
import List from "@components/list/MemberList";
import PhotoList from "@components/list/PhotoList";

// /grup
const GroupDetail = () => {
    return (
        <Container id={"content"}>
            <CrewInfo type="detail"></CrewInfo>
            <Divider></Divider>

            <List data={{ title: "맴버들 ▼" }} />
            <PhotoList></PhotoList>
        </Container>
    );
};

export default GroupDetail;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
`;
