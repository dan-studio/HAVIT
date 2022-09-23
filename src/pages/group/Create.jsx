import styled from "styled-components";
import CrewInput from "@components/cards/CrewInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import styles from "./group_create.module.less";
import React from "react";
const GroupCreate = () => {
    return (
        <Container id="content">
            <CrewInput></CrewInput>
            <Row>
                <Col span={24}>
                    <Form.Item>
                        <TextArea
                            placeholder="그룹을 소개 해주세요"
                            className={styles.text_area}
                            autoSize={{ minRows: 6, maxRows: 6 }}
                        ></TextArea>
                    </Form.Item>
                </Col>
            </Row>
            <Divider></Divider>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Title>크루원 호칭</Title>
                </Col>
                <Col span={11}>
                    <Input
                        type="text"
                        placeholder="리더"
                        className={styles.input_border}
                    ></Input>
                </Col>
                <Col span={11} offset={2}>
                    <Input
                        type="text"
                        placeholder="크루원"
                        className={styles.input_border}
                    ></Input>
                </Col>
            </Row>
            <Row
                justify="center"
                className={styles.button_group}
                style={{ top: "250px" }}
            >
                <Button type="primary">생성</Button>
                <Button type="default">취소</Button>
            </Row>
        </Container>
    );
};

export default React.memo(GroupCreate);
const Container = styled.div``;
const Title = styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.black};
`;
