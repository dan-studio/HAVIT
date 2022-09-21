import { EditFilled } from "@ant-design/icons";
import { Col, Divider, Form, Input, Row, Tag } from "antd";
import Uploader from "../input/Uploader";
import styles from "./CrewInput.module.less";
const CrewInput = () => {
    return (
        <Form>
            <Row>
                <Col>
                    <Uploader></Uploader>
                </Col>
                <Col>
                    <Form.Item>
                        <Input
                            className={styles.title_input}
                            type="search"
                            suffix={<EditFilled />}
                            placeholder="크루명 입력"
                        ></Input>
                    </Form.Item>
                    {/* todo tag Contentable */}
                    <Form.Item>
                        <Input
                            className={styles.tag_input}
                            placeholder="태그 입력"
                        ></Input>
                    </Form.Item>
                </Col>
            </Row>
            <Row></Row>
            <Divider></Divider>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
        </Form>
    );
};
export default CrewInput;
