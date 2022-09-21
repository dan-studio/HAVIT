import { EditFilled } from "@ant-design/icons";
import { Col, Divider, Form, Input, Row, Tag } from "antd";
import TextArea from "rc-textarea";
import TagInput from "../input/TagInput";
import Uploader from "../input/Uploader";
import styles from "./CrewInput.module.less";
import styled from "styled-components";
const CrewInput = (props) => {
    return (
        <Form className={props?.className}>
            <Row>
                <Col span={6}>
                    <Uploader className={styles.upload}></Uploader>
                </Col>
                <Col span={18}>
                    <Form.Item>
                        <Input
                            className={styles.title_input}
                            type="search"
                            suffix={<EditFilled />}
                            placeholder="크루명 입력"
                        ></Input>
                    </Form.Item>
                    <Form.Item
                        style={{ padding: "0 .5rem", overflowY: "auto" }}
                    >
                        <TagInput />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};
export default CrewInput;
