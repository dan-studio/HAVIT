import styled from "styled-components";
import CrewInfo from "@components/cards/CrewInfo";
import { Divider } from "antd";
import List from "@components/list/MemberList";
import PhotoList from "@components/list/PhotoList";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { userApis } from "../../apis/auth";

// /grup
const GroupDetail = () => {
    const id = useParams()
    console.log(id)
    useEffect(()=>{
        userApis.getGroupDetail(id).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <Container id={"content"}>
            <CrewInfo type="detail"></CrewInfo>
            <Divider></Divider>

            <List data={{ title: "맴버들" }} />
            <PhotoList></PhotoList>
        </Container>
    );
};

export default React.memo(GroupDetail);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
`;
